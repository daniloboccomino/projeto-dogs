import React from 'react'
import useFetch from '../../hooks/useFetch'
import { USER } from '../../api'
import Error from '../helper/Error'
import Loading from '../helper/Loading'
const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'))

const UserStats = () => {
  const { data, error, loading, request } = useFetch()

  React.useEffect(() => {
    async function getData() {
      const { url, options } = USER.STATS()
      await request(url, options)
    }
    getData()
  }, [request])

  return (
    (error && <Error error={error} />) ||
    (loading && <Loading />) ||
    (data && (
      <React.Suspense fallback={<></>}>
        <UserStatsGraphs data={data} />
      </React.Suspense>
    )) ||
    null
  )
}

export default UserStats
