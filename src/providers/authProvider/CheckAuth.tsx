import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { Loading } from 'components/loading/Loading'
import * as routes from 'constants/routes'
import { useAppSelector } from 'state/app'
import { selectIsAuthenticated } from 'state/auth'

export const CheckAuth = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(routes.LOGIN)
    }
  }, [isAuthenticated, navigate])

  if (!isAuthenticated) {
    return <Loading />
  }

  if (isAuthenticated) {
    return <Outlet />
  }
}
