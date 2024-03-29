/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState, createContext, useContext } from 'react'
import axios from 'axios'
import { timeout } from '../helpers/timeout'
import AuthDataService from '../services/auth.service'
import { users } from '../stories/data/users'
import type { USER_ROLE } from '../constants/insight/user'

export interface IAuthResponse {
  success: boolean
  error: string | null
}
interface IAuthContext {
  loading: boolean
  authenticated: boolean
  email: string | null
  roles: USER_ROLE[]
  errorMsg: string
  login: (email: string, password: string) => Promise<IAuthResponse | undefined>
  logout: (callback: VoidFunction) => void
}

const AuthContext = createContext<IAuthContext>(null!)

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false)
  const [authenticated, setAuthenticated] = useState<boolean>(false)
  const [email, setEmail] = useState<string | null>(null)
  const [roles, setRoles] = useState<USER_ROLE[]>([])
  const [errorMsg, setErrorMsg] = useState<string>('')

  const isValidUser = (email: string): boolean =>
    users.some(user => user.email === email)

  const getUserRoles = (email: string): USER_ROLE[] =>
    users.find(user => user.email === email)?.roles ?? []

  const login = async (
    email: string,
    password: string,
  ): Promise<IAuthResponse | undefined> => {
    let tempErrorMsg = ''
    setLoading(true)

    try {
      const tempUser = {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      }

      await timeout(500)
      const res = await AuthDataService.login(tempUser)

      if (isValidUser(email) && res.status === 200) {
        setEmail(email)
        setAuthenticated(true)
        setRoles(getUserRoles(email))
        tempErrorMsg = ''

        return { success: true, error: null }
      } else {
        tempErrorMsg = 'Invalid User'

        return { success: false, error: tempErrorMsg }
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response == null) {
          tempErrorMsg = 'No Server Response'
        } else if (err.response.status === 400) {
          const { data } = err.response
          const { error } = data as { error: string }
          tempErrorMsg = error ?? 'Missing Email or Password'
        } else if (err.response.status === 401) {
          tempErrorMsg = 'Invalid credentials'
        }
      } else {
        tempErrorMsg = 'Unknown Error'
      }

      return { success: false, error: tempErrorMsg }
    } finally {
      setErrorMsg(tempErrorMsg)
      setLoading(false)
    }
  }

  const logout = (callback: VoidFunction): void => {
    setEmail(null)
    setAuthenticated(false)
    setRoles([])
    setErrorMsg('')
    callback()
  }

  const value = {
    loading,
    authenticated,
    email,
    roles,
    errorMsg,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = (): IAuthContext => useContext(AuthContext)
