import React from 'react'
import Input from '../form/Input'
import Button from '../form/Button'
import useForm from '../../hooks/useForm'
import useFetch from '../../hooks/useFetch'
import { PASSWORD } from '../../api'
import Error from '../helper/Error'
import { useNavigate } from 'react-router-dom'

const LoginResetPassword = () => {
  const { error, loading, request } = useFetch()
  const [key, setKey] = React.useState('')
  const [login, setLogin] = React.useState('')
  const password = useForm(true)
  const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault()
    if (password.validate()) {
      const { url, options } = PASSWORD.RESET.POST({
        key,
        login,
        password: password.value,
      })
      const { response } = await request(url, options)
      response.ok && navigate('/login')
    }
  }

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const key = params.get('key')
    const login = params.get('login')
    key && setKey(key)
    login && setLogin(login)
  }, [])

  return (
    <div>
      <h1 className='title'>Resete a senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          id='password'
          label='Nova Senha'
          type='password'
          {...password}
        />
        <Button disabled={loading}>Resetar</Button>
        <Error error={error} />
      </form>
    </div>
  )
}

export default LoginResetPassword
