import React from 'react'
import styles from './Input.module.css'

const Input = ({ id, label, type = 'text' }) => {
  return (
    <div className={styles.wrapper}>
      <label
        htmlFor={id}
        className={styles.label}
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        className={styles.input}
      />
      <p className={styles.error}>error</p>
    </div>
  )
}

export default Input
