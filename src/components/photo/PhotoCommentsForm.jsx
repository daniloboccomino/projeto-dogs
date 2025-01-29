import React from 'react'
import styles from './PhotoCommentsForm.module.css'
import Send from '../../assets/enviar.svg?react'
import useFetch from '../../hooks/useFetch'
import { COMMENT_POST } from '../../api'
import Error from '../helper/Error'

const PhotoCommentsForm = ({ id, setComments }) => {
  const { error, request } = useFetch()
  const [comment, setComment] = React.useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    const token = window.localStorage.getItem('token')
    const { url, options } = COMMENT_POST(id, token, { comment })
    const { response, json } = await request(url, options)
    if (response.ok) {
      setComment('')
      setComments(comments => [...comments, json])
    }
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <textarea
        className={styles.textarea}
        id='comment'
        name='comment'
        placeholder='Comentar'
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <Send />
      </button>
      <Error error={error} />
    </form>
  )
}

export default PhotoCommentsForm
