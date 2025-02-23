import React from 'react'
import useForm, { types } from '../../hooks/useForm'
import Input from '../form/Input'
import Button from '../form/Button'
import { USER } from '../../api'
import { UserContext } from '../../UserContext'
import useFetch from '../../hooks/useFetch'
import Error from '../helper/Error'

const LoginCreate = () => {
  const { userLogin } = React.useContext(UserContext)
  const { error, loading, request } = useFetch()
  const email = useForm(true, types.email)
  const username = useForm(true)
  const password = useForm(true)

  async function handleSubmit(event) {
    event.preventDefault()
    const { url, options } = USER.POST({
      email: email.value,
      username: username.value,
      password: password.value,
    })
    const { response } = await request(url, options)
    if (response.ok) userLogin(username.value, password.value)
  }

  return (
    <section className='animeLeft'>
      <h1 className='title'>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input
          id='email'
          label='Email'
          type='email'
          {...email}
        />
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
        <Button disabled={loading}>Cadastrar</Button>
        <Error error={error} />
      </form>
    </section>
  )
}

export default LoginCreate
