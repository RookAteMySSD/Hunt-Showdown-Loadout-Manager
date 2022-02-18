import react from 'react'
import styled from 'styled-components';

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

export const list = {
  padding: '5%',
  margin: '25%',
  marginTop: '10%'
}

export const InputContainer = styled.input`
  font-family: inherit;
  padding: 0.5vw 1vw;
  margin-right: 1.5vw;
  text-align: center;
  width: 10vw;
  background-color: #211e1e;
  color: #858585;
  &:hover {
    background-color: #7f1b1d;
    color: #211e1e;
  }`

export const ButtonContainer = styled.button`
  font-family: inherit;
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