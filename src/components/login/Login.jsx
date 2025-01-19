import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginLostPassword from './LoginLostPassword'
import LoginResetPassword from './LoginResetPassword'
import { UserContext } from '../../UserContext'

const Login = () => {
  const { login } = React.useContext(UserContext)

  return login === true ? (
    <Navigate to='/conta' />
  ) : (
    <div>
      <Routes>
        <Route
          path='/'
          element={<LoginForm />}
        />
        <Route
          path='criar'
          element={<LoginCreate />}
        />
        <Route
          path='perdeu'
          element={<LoginLostPassword />}
        />
        <Route
          path='resetar'
          element={<LoginResetPassword />}
        />
      </Routes>
    </div>
  )
}

export default Login
