import React from 'react'
import loginform from './LoginForm.module.css'
import button from '../form/Button.module.css'
import { Link } from 'react-router-dom'
import Input from '../form/Input'
import Button from '../form/Button'
import useForm from '../../hooks/useForm'
import { UserContext } from '../../UserContext'
import Error from '../helper/Error'

const LoginForm = () => {
  const { userLogin, loading, error } = React.useContext(UserContext)
  const username = useForm()
  const password = useForm()

  async function handleSubmit(event) {
    event.preventDefault()
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <section className='animeLeft'>
      <h1 className='title'>Login</h1>
      <form
        className={loginform.form}
        onSubmit={handleSubmit}
      >
        <Input
          id='username'
          label='Usuário'
          {...username}
        />
        <Input
          id='password'
          label='Senha'
          type='password'
          {...password}
        />
        {loading ? (
          <Button disabled>Carregando ... </Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Link
        to='/login/esqueci'
        className={loginform.esqueci}
      >
        Esqueci a senha
      </Link>
      <div className={loginform.cadastro}>
        <h2 className={loginform.subtitle}> Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link
          to='/login/criar'
          className={button.button}
        >
          Cadastre
        </Link>
      </div>
    </section>
  )
}

export default LoginForm
