import React from 'react'
import PropTypes from 'prop-types'
import  { useField } from '../hooks/index'

const LoginForm = (props) => {
  const username = useField('text')
  const password = useField('password')

  const handleLoginEvent = (event) => {
    event.preventDefault()
    username.reset()
    password.reset()
    props.handleLogin(username.input.value, password.input.value)
  }

  return(
    <form onSubmit={handleLoginEvent}>
      <div>
        username:
        <input  {...username.input} />
      </div>
      <div>
        password:
        <input  {...password.input} />
      </div>
      <button type="submit">login</button>
    </form>
  )
}

export default LoginForm