import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/login/Login'
import { UserStorage } from './UserContext'

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
              path='/login/*'
              element={<Login />}
            />
          </Routes>
        </UserStorage>
      </BrowserRouter>
    </>
  )
}

export default App
