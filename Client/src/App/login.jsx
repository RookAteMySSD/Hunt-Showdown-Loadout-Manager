import React, {useState, useEffect} from 'react'
import {Header, InputContainer, ButtonContainer} from './styles.jsx'
import './styles.css'

export const Login = ({updateName}) => {

  const submit = (event) => {
    event.preventDefault()
    updateName(event.target.name.value)
  }

  return (
    <div style={{textAlign: 'center'}}>
      <h1 className='Header'>Hunt Showdown Loadout Manager</h1>
      <form onSubmit={submit}>
        <InputContainer name='name' placeholder='Username'></InputContainer>
        <ButtonContainer>Submit</ButtonContainer>
      </form>
    </div>
  )
}