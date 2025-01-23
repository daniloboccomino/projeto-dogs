import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import Dogs from '../assets/dogs.svg?react'
import { UserContext } from '../UserContext'

const Header = () => {
  const { data } = React.useContext(UserContext)

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`}>
        <Link
          to='/'
          aria-label='Dogs - Home'
          className={styles.logo}
        >
          <Dogs />
        </Link>
        {data ? (
          <Link
            to='/conta'
            className={styles.login}
          >
            {data.nome}
          </Link>
        ) : (
          <Link
            to='/login'
            className={styles.login}
          >
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  )
}

export default Header
