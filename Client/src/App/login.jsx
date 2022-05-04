import React, {useState, useEffect} from 'react'
import './styles.css'

export const Login = ({updateName}) => {

  const submit = (event) => {
    event.preventDefault()
    updateName(event.target.name.value)
  }

  return (
    <div style={{textAlign: 'center'}}>
      <h1 className='header'>Hunt Showdown Loadout Manager</h1>
      <form onSubmit={submit}>
        <input className='inputContainer' name='name' placeholder='Username'></input>
        <button className='buttonContainer'>Submit</button>
      </form>
    </div>
  )
}