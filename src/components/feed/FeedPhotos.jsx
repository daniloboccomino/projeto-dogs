import React from 'react'
import FeedPhotosItem from './FeedPhotosItem'
import useFetch from '../../hooks/useFetch'
import { PHOTOS_GET } from '../../api'
import Error from '../helper/Error'
import Loading from '../helper/Loading'

const FeedPhotos = ({ page, user, setInfinite, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch()

  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 6
      const { url, options } = PHOTOS_GET({ page, total, user })
      const { response, json } = await request(url, options)
      if (response && response.ok && json.length < total) setInfinite(false)
    }
    fetchPhotos()
  }, [page, user, request, setInfinite])

  return error ? (
    <Error error={error} />
  ) : loading ? (
    <Loading />
  ) : data ? (
    <>
      {data.map(photo => (
        <FeedPhotosItem
          key={photo.id}
          photo={photo}
          setModalPhoto={setModalPhoto}
        />
      ))}
    </>
  ) : null
}

export default FeedPhotos
