import React from 'react'
import UserHeader from './UserHeader'
import { Route, Routes } from 'react-router-dom'
import Feed from '../feed/Feed'
import UserPost from './UserPost'
import UserStats from './UserStats'
import { UserContext } from '../../UserContext'
import NotFound from '../NotFound'
import Head from '../helper/Head'

const User = () => {
  const { data } = React.useContext(UserContext)

  return (
    <section className='container'>
      <Head title='Minha conta' />
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
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </section>
  )
}

export default User
