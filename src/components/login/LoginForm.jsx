import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../form/Input'
import Button from '../form/Button'
import useForm from '../../hooks/useForm'

const LoginForm = () => {
  const username = useForm()
  const password = useForm()

  function handleSubmit(event) {
    event.preventDefault()
    if (username.validate() && password.validate()) {
      fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      }).then(response => response.json())
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
        <Button>Entrar</Button>
      </form>
      <Link to='/login/criar'>Cadastre</Link>
    </section>
  )
}

export default LoginForm
