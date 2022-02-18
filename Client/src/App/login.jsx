import React, {useState, useEffect} from 'react'
import {backroundImg, InputContainer, ButtonContainer} from './styles.jsx'

export const Login = ({updateName}) => {

  const submit = (event) => {
    event.preventDefault()
    updateName(event.target.name.value)
  }
  const backroundArr = ['At gun point', 'Concept-Art-1',
   'Hunt_E3_2017_screenshot_fire_1080p', 'Hunt_E3_2017_screenshot_light_1080p', 'Hunt_E3_2017_screenshot_sniper_1080p',
   'Hunter becomes Hunted', 'Hunter in the fog', 'Hunters in the swamp', 'Hunters']
  const backround = `./img/Backround/${backroundArr[Math.floor(Math.random() * 9)]}.jpg`

  return (
    <div>
      <img src={backround} style={backroundImg}></img>
      <form onSubmit={submit}>
        <InputContainer name='name' placeholder='Username'></InputContainer>
        <ButtonContainer>Submit</ButtonContainer>
      </form>
    </div>
  )
}