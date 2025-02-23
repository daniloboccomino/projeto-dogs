import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { PHOTO } from '../../api'
import Error from '../helper/Error'
import Loading from '../helper/Loading'
import PhotoContent from './PhotoContent'
import Head from '../helper/Head'

const Photo = () => {
  const { id } = useParams()
  const { data, error, loading, request } = useFetch()

  React.useEffect(() => {
    const { url, options } = PHOTO.GET(id)
    request(url, options)
  }, [id, request])

  return error ? (
    <Error error={error} />
  ) : loading ? (
    <Loading />
  ) : data ? (
    <section className='container mainContainer'>
      <Head title={data.photo.title} />
      <PhotoContent
        data={data}
        single={true}
      />
    </section>
  ) : null
}

export default Photo
