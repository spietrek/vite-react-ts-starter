import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline'

export const ALERT_VARIANT_CONFIG = {
  info: 'alert-info',
  success: 'alert-success',
  warning: 'alert-warning',
  error: 'alert-error',
}

export const ALERT_ICON_CONFIG = {
  info: <InformationCircleIcon className="h-6 w-6" />,
  success: <CheckCircleIcon className="h-6 w-6" />,
  warning: <ExclamationTriangleIcon className="h-6 w-6" />,
  error: <XCircleIcon className="h-6 w-6" />,
}
