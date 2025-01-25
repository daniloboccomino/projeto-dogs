import React from 'react'

export const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Email inválido',
  },
  password: {
    regex: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)(?=.*?\W).{8,}$/,
    message:
      'A senha precisa ter no mínimo 8 caracteres, com no mínimo 1 caracter maiúsculo, 1 caracter minúsculo, 1 dígito e 1 caracter especial',
  },
  number: {
    regex: /^\d+$/,
    message: 'Apenas números',
  },
}

const useForm = (required = false, type) => {
  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState(null)

  function validate(value) {
    if (!required) return true
    if (value.length === 0) {
      setError('Preencha um valor')
      return false
    } else if (type && !type.regex.test(value)) {
      setError(type.message)
      return false
    } else {
      setError(null)
      return true
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value)
    setValue(target.value)
  }

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
  }
}

export default useForm
