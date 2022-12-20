/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
interface Result {
  current: [any, any]
}

export function getStateFromResult(result: Result) {
  return result.current[0]
}

export function getHandlersFromResult(result: Result) {
  return result.current[1]
}
