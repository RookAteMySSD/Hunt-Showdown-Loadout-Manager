import React, {useState, useEffect} from 'react'
import {Login} from './login.jsx'
import {LoadoutList} from './loadoutList.jsx'
import {Loadout} from './loadout.jsx'
import {flexSetup} from './styles.jsx'

export const App = () => {
  const [name, updateName] = useState('ADMIN')
  console.warn('Change admin to null for demo build')

  if (name === null) {
    return (
    <Login updateName={updateName}/>
    )
  } else {
    return (
      <div style={flexSetup}>
        <LoadoutList />
        <Loadout name={name}/>
      </div>
    )
  }
}