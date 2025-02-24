import React from 'react'
import styles from './PhotoContent.module.css'
import { Link } from 'react-router-dom'
import PhotoComments from './PhotoComments'
import { UserContext } from '../../UserContext'
import PhotoDelete from './PhotoDelete'
import Image from '../helper/Image'

const PhotoContent = ({ data, single }) => {
  const user = React.useContext(UserContext)
  const { photo, comments } = data

  return (
    <div className={`${styles.photo} ${single ? styles.single : ''}`}>
      <div className={styles.img}>
        <Image
          alt={photo.title}
          src={photo.src}
        />
      </div>
      <div className={styles.datails}>
        <div>
          <p className={styles.author}>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
            <span className={styles.views}>{photo.acessos}</span>
          </p>
          <h1 className='title'>
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.idade}</li>
            <li>{photo.peso} kg</li>
          </ul>
        </div>
      </div>
      <PhotoComments
        id={photo.id}
        comments={comments}
      />
    </div>
  )
}

export default PhotoContent
