import React, {useState, useEffect} from 'react'
import {Login} from './login.jsx'
import {LoadoutList} from './loadoutList.jsx'
import {Loadout} from './loadout.jsx'

export const App = () => {
  const [name, updateName] = useState('ADMIN')
  console.warn('Change admin to null for demo build')
  const [loadout, changeLoadout] = useState(
    {
      firstWeapon: 'none',
      secondWeapon: 'none',
      firstTool: 'none',
      secondTool: 'none',
      thirdTool: 'none',
      fourthTool: 'none',
      firstConsumable: 'none',
      secondConsumable: 'none',
      thirdConsumable: 'none',
      fourthConsumable: 'none',
  })

  if (name === null) {
    return (
    <Login updateName={updateName}/>
    )
  } else {
    return (
      <div>
        <LoadoutList />
        <Loadout loadout={loadout} changeLoadout={changeLoadout}/>
      </div>
    )
  }
}