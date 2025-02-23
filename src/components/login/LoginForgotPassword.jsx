import React from 'react'
import Input from '../form/Input'
import Button from '../form/Button'
import useForm from '../../hooks/useForm'
import useFetch from '../../hooks/useFetch'
import { PASSWORD } from '../../api'
import Error from '../helper/Error'

const LoginForgotPassword = () => {
  const { data, error, loading, request } = useFetch()
  const login = useForm(true)

  async function handleSubmit(event) {
    event.preventDefault()
    const { url, options } = PASSWORD.LOST.POST({
      login: login.value,
      url: window.location.href.replace('esqueci', 'resetar'),
    })
    request(url, options)
  }

  return (
    <section className='animeLeft'>
      <h1 className='title'>Esqueceu a senha?</h1>
      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input
            id='login'
            label='Login'
            {...login}
          />
          <Button disabled={loading}>Enviar Email</Button>
          <Error error={error} />
        </form>
      )}
    </section>
  )
}

export default LoginForgotPassword
