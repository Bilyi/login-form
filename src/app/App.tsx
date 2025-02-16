import 'app/App.scss'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Navigate } from 'react-router-dom'

import * as routes from 'constants/routes'
import { Home } from 'pages/home/Home'
import { Login } from 'pages/login/Login'
import { NotFound } from 'pages/notFound/NotFound'
import { Profile } from 'pages/profile/Profile'
import { AuthProvider } from 'providers/authProvider/AuthProvider'
import { CheckAuth } from 'providers/authProvider/CheckAuth'
import { useAppSelector } from 'state/app'
import { selectIsAuthenticated } from 'state/auth'

function App() {
  const isAuthenticated = useAppSelector(selectIsAuthenticated)

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route index element={<Home />} />

          <Route path={routes.LOGIN} element={isAuthenticated ? <Navigate to={routes.PROFILE} /> : <Login />} />
          <Route element={<CheckAuth />}>
            <Route path={routes.PROFILE} element={<Profile />} />
          </Route>
          <Route path={routes.UNSUPPORTED} element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
