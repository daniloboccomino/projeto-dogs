import React from 'react'
import styles from './Login.module.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginForgotPassword from './LoginForgotPassword'
import LoginResetPassword from './LoginResetPassword'
import { UserContext } from '../../UserContext'

const Login = () => {
  const { login } = React.useContext(UserContext)

  return login === true ? (
    <Navigate to='/conta' />
  ) : (
    <section className={styles.login}>
      <div className={styles.forms}>
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
            path='esqueci'
            element={<LoginForgotPassword />}
          />
          <Route
            path='resetar'
            element={<LoginResetPassword />}
          />
        </Routes>
      </div>
    </section>
  )
}

export default Login
