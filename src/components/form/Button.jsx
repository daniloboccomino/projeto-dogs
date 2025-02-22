import React from 'react'
import styles from './Button.module.css'

const Button = ({ children, disabled, ...props }) => {
  return (
    <button
      disabled={disabled}
      className={styles.button}
      {...props}
    >
      {disabled ? 'Carregando...' : children}
    </button>
  )
}

export default Button
