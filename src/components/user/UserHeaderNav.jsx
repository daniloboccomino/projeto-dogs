import React from 'react'
import styles from './UserHeaderNav.module.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import Adicionar from '../../assets/adicionar.svg?react'
import Feed from '../../assets/feed.svg?react'
import Stats from '../../assets/estatisticas.svg?react'
import Sair from '../../assets/sair.svg?react'

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null)
  const { userLogout } = React.useContext(UserContext)
  const navigate = useNavigate

  function handleLogout() {
    userLogout()
    navigate('/login')
  }

  return (
    <nav className={styles.nav}>
      <NavLink
        to='/conta'
        end
      >
        <Feed /> {mobile && 'Minhas Fotos'}
      </NavLink>
      <NavLink to='/conta/postar'>
        <Adicionar /> {mobile && 'Adicionar Foto'}
      </NavLink>
      <NavLink to='/conta/estatisticas'>
        <Stats /> {mobile && 'Estatísticas'}
      </NavLink>
      <button onClick={handleLogout}>
        <Sair /> {mobile && 'Sair'}
      </button>
    </nav>
  )
}

export default UserHeaderNav
