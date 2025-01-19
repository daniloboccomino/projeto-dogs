import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/login/Login'
import { UserStorage } from './UserContext'
import ProtectedRoute from './components/helper/ProtectedRoute'
import User from './components/user/User'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='login/*'
              element={<Login />}
            />
            <Route
              path='conta/*'
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
          </Routes>
        </UserStorage>
      </BrowserRouter>
    </>
  )
}

export default App
