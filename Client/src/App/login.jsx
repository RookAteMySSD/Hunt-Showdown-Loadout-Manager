import React, {useState, useEffect} from 'react'

export const Login = ({updateName}) => {

  const submit = (event) => {
    event.preventDefault()
    updateName(event.target.name.value)
  }

  return (
    <form onSubmit={submit}>
      <label>Username:</label>
      <input name='name'></input>
      <button>Submit</button>
    </form>
  )
}