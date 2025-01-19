import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../form/Input'
import Button from '../form/Button'
import useForm from '../../hooks/useForm'
import { UserContext } from '../../UserContext'

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
    <section>
      <h1>Login</h1>
      <form
        action=''
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
        {error && <p>{error}</p>}
      </form>
      <Link to='/login/criar'>Cadastre</Link>
    </section>
  )
}

export default LoginForm
