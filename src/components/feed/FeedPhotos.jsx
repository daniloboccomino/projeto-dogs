import React from 'react'
import styles from './FeedPhotos.module.css'
import FeedPhotosItem from './FeedPhotosItem'
import useFetch from '../../hooks/useFetch'
import { PHOTOS_GET } from '../../api'
import Error from '../helper/Error'
import Loading from '../helper/Loading'

const FeedPhotos = ({ setModalPhoto }) => {
  const { data, error, loading, request } = useFetch()

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 })
      const { response, json } = await request(url, options)
    }
    fetchPhotos()
  }, [request])

  return error ? (
    <Error error={error} />
  ) : loading ? (
    <Loading />
  ) : data ? (
    <ul className={styles.feed + ' animeLeft'}>
      {data.map(photo => (
        <FeedPhotosItem
          key={photo.id}
          photo={photo}
          setModalPhoto={setModalPhoto}
        />
      ))}
    </ul>
  ) : null
}

export default FeedPhotos
