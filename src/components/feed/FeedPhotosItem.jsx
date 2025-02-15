import React from 'react'
import styles from './FeedPhotosItem.module.css'
import Image from '../helper/Image'

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo)
  }

  return (
    <li
      className={styles.photo + ' animeLeft'}
      onClick={handleClick}
    >
      <Image
        alt={photo.title}
        src={photo.src}
      />
      <span className={styles.views}>{photo.acessos}</span>
    </li>
  )
}

export default FeedPhotosItem
