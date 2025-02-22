import React from 'react'
import styles from './Feed.module.css'
import FeedModal from './FeedModal'
import FeedPhotos from './FeedPhotos'
import PropTypes from 'prop-types'

const Feed = ({ user = 0 }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null)
  const [pages, setPages] = React.useState([1])
  const [infinite, setInfinite] = React.useState(true)

  React.useEffect(() => {
    let wait = false
    function infiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY
        const height = document.body.offsetHeight - window.innerHeight
        if (scroll > height * 0.75 && !wait) {
          setPages(pages => [...pages, pages.length + 1])
          wait = true
          setTimeout(() => (wait = false), 500)
        }
      }
    }
    window.addEventListener('scroll', infiniteScroll)
    window.addEventListener('wheel', infiniteScroll)
    return () => {
      window.removeEventListener('scroll', infiniteScroll)
      window.removeEventListener('wheel', infiniteScroll)
    }
  }, [infinite])

  return (
    <>
      {modalPhoto && (
        <FeedModal
          photo={modalPhoto}
          setModalPhoto={setModalPhoto}
        />
      )}
      <ul className={styles.feed + ' animeLeft'}>
        {pages.map(page => (
          <FeedPhotos
            key={page}
            page={page}
            user={user}
            setInfinite={setInfinite}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    </>
  )
}

Feed.prototype = {
  user: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}

export default Feed
