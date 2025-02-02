import React from 'react'
import styles from './FeedModal.module.css'
import useFetch from '../../hooks/useFetch'
import { PHOTO } from '../../api'
import Error from '../helper/Error'
import Loading from '../helper/Loading'
import PhotoContent from '../photo/PhotoContent'

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch()

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalPhoto(null)
  }

  React.useEffect(() => {
    const { url, options } = PHOTO.GET(photo.id)
    request(url, options)
  }, [photo, request])

  return (
    <div
      className={styles.modal}
      onClick={handleOutsideClick}
    >
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  )
}

export default FeedModal
