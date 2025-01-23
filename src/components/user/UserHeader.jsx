import React from 'react'
import styles from './UserHeader.module.css'
import UserHeaderNav from './UserHeaderNav'
import { useLocation } from 'react-router-dom'

const UserHeader = () => {
  const [title, setTitle] = React.useState('')
  const location = useLocation()

  React.useEffect(() => {
    setTitle(
      location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
    )
  }, [location])

  return (
    <header className={styles.header}>
      <h1 className={styles.capitalize + ' title'}>{title}</h1>
      <UserHeaderNav />
    </header>
  )
}

export default UserHeader
