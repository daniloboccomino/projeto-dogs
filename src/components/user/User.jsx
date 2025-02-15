import React from 'react'
import UserHeader from './UserHeader'
import { Route, Routes } from 'react-router-dom'
import Feed from '../feed/Feed'
import UserPost from './UserPost'
import UserStats from './UserStats'
import { UserContext } from '../../UserContext'

const User = () => {
  const { data } = React.useContext(UserContext)

  return (
    <section className='container'>
      <UserHeader />
      <Routes>
        <Route
          path='/'
          element={<Feed user={data.id} />}
        />
        <Route
          path='postar'
          element={<UserPost />}
        />
        <Route
          path='estatisticas'
          element={<UserStats />}
        />
      </Routes>
    </section>
  )
}

export default User
