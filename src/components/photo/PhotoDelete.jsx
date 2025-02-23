import React from 'react'
import styles from './PhotoDelete.module.css'
import useFetch from '../../hooks/useFetch'
import { PHOTO } from '../../api'

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch()

  async function handleClick() {
    const confirm = window.confirm('Deseja deletar a foto?')
    if (confirm) {
      const { url, options } = PHOTO.DELETE(id)
      const { response } = await request(url, options)
      response.ok && window.location.reload()
    }
  }

  return (
    <>
      {loading ? (
        <button
          className={styles.delete}
          disabled
        >
          Deletar
        </button>
      ) : (
        <button
          className={styles.delete}
          onClick={handleClick}
        >
          Deletar
        </button>
      )}
    </>
  )
}

export default PhotoDelete
