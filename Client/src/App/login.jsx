import React, {useState, useEffect} from 'react'
import {Header, InputContainer, ButtonContainer} from './styles.jsx'

export const Login = ({updateName}) => {

  const submit = (event) => {
    event.preventDefault()
    updateName(event.target.name.value)
  }

  return (
    <div style={{textAlign: 'center'}}>
      <Header>Hunt Showdown Loadout Manager</Header>
      <form onSubmit={submit}>
        <InputContainer name='name' placeholder='Username'></InputContainer>
        <ButtonContainer>Submit</ButtonContainer>
      </form>
    </div>
  )
}