import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/login/Login'
import { UserStorage } from './UserContext'
import ProtectedRoute from './components/helper/ProtectedRoute'
import User from './components/user/User'
import Photo from './components/photo/Photo'
import UserProfile from './components/user/UserProfile'
import NotFound from './components/NotFound'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className='app-body'>
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
              <Route
                path='foto/:id'
                element={<Photo />}
              />
              <Route
                path='perfil/:user'
                element={<UserProfile />}
              />
              <Route
                path='*'
                element={<NotFound />}
              />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App
