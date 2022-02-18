import react from 'react'
import styled from 'styled-components';

export const popup_box = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1000,
  backgroundColor: 'rgba(0, 0, 0, 0.25)'
}

export const popup_data = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#2b2929',
  padding: '50px',
  zIndex: 1000,
  width: '50%'
}

export const flexSetup = {
  display: 'flex',
  justifyContent: 'center'
}

export const mainBox = {
  border: '3px solid #7f1b1d',
  padding: '5px',
  paddingLeft: '5%',
  paddingRight: '5%',
  margin: '5px',
  backgroundColor: '#211e1e',
  color: '#7f1b1d',
  flexGrow: 3,
}

export const listBox = {
  border: '3px solid #7f1b1d',
  padding: '5px',
  paddingLeft: '5%',
  paddingRight: '5%',
  margin: '5px',
  backgroundColor: '#211e1e',
  color: '#7f1b1d',
  flexGrow: 1
}

export const InputContainer = styled.input`
  font-family: 'Brygada 1918', serif;
  padding: 0.5vw 1vw;
  margin-right: 1.5vw;
  text-align: center;
  width: 10vw;
  background-color: #211e1e;
  color: #7f1b1d;
  &:hover {
    background-color: #7f1b1d;
    color: #211e1e;
  }`

  export const backroundImg = {
    zIndex: '-1',
    maxHeight: '100%',
    maxWidth: '100%',
    top: '0px',
    left: '0px',
    position: 'fixed'
  }