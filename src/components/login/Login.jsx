import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginLostPassword from './LoginLostPassword'
import LoginResetPassword from './LoginResetPassword'

const Login = () => {
  return (
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
