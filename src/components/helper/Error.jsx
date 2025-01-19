import React from 'react'

const Error = ({ error }) => {
  return !error ? null : (
    <p style={{ color: '#f31', margin: '1rem 0' }}>{error}</p>
  )
}

export default Error
