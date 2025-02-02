import React from 'react'
import styles from './UserPost.module.css'
import Input from '../form/Input'
import Button from '../form/Button'
import useForm, { types } from '../../hooks/useForm'
import useFetch from '../../hooks/useFetch'
import { PHOTO } from '../../api'
import Error from '../helper/Error'
import { useNavigate } from 'react-router-dom'

const UserPost = () => {
  const nome = useForm()
  const peso = useForm(true, types.number)
  const idade = useForm(true, types.number)
  const [img, setImg] = React.useState({})
  const { data, error, loading, request } = useFetch()
  const navigate = useNavigate()

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData()
    formData.append('img', img.raw)
    formData.append('nome', nome.value)
    formData.append('peso', peso.value)
    formData.append('idade', idade.value)

    const token = window.localStorage.getItem('token')
    const { url, options } = PHOTO.POST(token, formData)
    request(url, options)
  }

  React.useEffect(() => {
    if (data) navigate('/conta')
  }, [data, navigate])

  return (
    <section className={`${styles.post} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input
          id='nome'
          label='Nome'
          {...nome}
        />
        <Input
          id='peso'
          label='Peso'
          type='number'
          {...peso}
        />
        <Input
          id='idade'
          label='Idade'
          type='number'
          {...idade}
        />
        <input
          id='img'
          name='img'
          type='file'
          onChange={handleImgChange}
          className={styles.file}
        />
        {loading ? (
          <Button disabled>Enviando ... </Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error} />
      </form>
      {img.preview && (
        <div
          className={styles.preview}
          style={{ backgroundImage: `url('${img.preview}')` }}
        >
          {' '}
        </div>
      )}
    </section>
  )
}

export default UserPost
