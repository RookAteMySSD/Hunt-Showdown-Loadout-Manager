import React, {useState, useEffect} from 'react'
import {Login} from './login.jsx'
import {LoadoutList} from './loadoutList.jsx'
import {Loadout} from './loadout.jsx'

export const App = () => {
  const [name, updateName] = useState('ADMIN')
  console.warn('Change admin to null for demo build')
  const [loadout, changeLoadout] = useState(
    {
      firstWeapon: 'None',
      secondWeapon: 'None',
      firstTool: 'None',
      secondTool: 'None',
      thirdTool: 'None',
      fourthTool: 'None',
      firstConsumable: 'None',
      secondConsumable: 'None',
      thirdConsumable: 'None',
      fourthConsumable: 'None',
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