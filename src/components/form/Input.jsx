import React from 'react'
import styles from './Input.module.css'

const Input = ({
  id,
  label,
  type = 'text',
  value,
  placeholder,
  onChange,
  onBlur,
  error,
}) => {
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
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        className={styles.input}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}

export default Input
