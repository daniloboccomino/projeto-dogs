import React from 'react'
import styles from './UserHeaderNav.module.css'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import Adicionar from '../../assets/adicionar.svg?react'
import Feed from '../../assets/feed.svg?react'
import Stats from '../../assets/estatisticas.svg?react'
import Sair from '../../assets/sair.svg?react'
import useMedia from '../../hooks/useMedia'

const UserHeaderNav = () => {
  const mobile = useMedia('(max-width: 40rem)')
  const [mobileMenu, setMobileMenu] = React.useState(false)
  const { userLogout } = React.useContext(UserContext)
  const navigate = useNavigate

  const { pathname } = useLocation()
  React.useEffect(() => {
    setMobileMenu(false)
  }, [pathname])

  function handleLogout() {
    userLogout()
    navigate('/login')
  }

  return (
    <>
      {mobile && (
        <button
          aria-label='Menu'
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
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
    </>
  )
}

export default UserHeaderNav
