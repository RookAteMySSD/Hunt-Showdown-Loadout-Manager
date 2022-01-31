import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Login} from './login.jsx'
import {LoadoutList} from './loadoutList.jsx'
import {Loadout} from './loadout.jsx'
import {flexSetup} from './styles.jsx'

export const App = () => {
  const [name, updateName] = useState(null)
  const [loadoutName, changeName] = useState('')
  const [loadout, changeLoadout] = useState({
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

  const save = () => {
    axios.post(`/Loadouts/${loadoutName}`, {
      name,
      firstWeapon: loadout.firstWeapon,
      secondWeapon: loadout.secondWeapon,
      firstTool: loadout.firstTool,
      secondTool: loadout.secondTool,
      thirdTool: loadout.thirdTool,
      fourthTool: loadout.fourthTool,
      firstConsumable: loadout.firstConsumable,
      secondConsumable: loadout.secondConsumable,
      thirdConsumable: loadout.thirdConsumable,
      fourthConsumable: loadout.fourthConsumable,
    })
      .then((response) => {console.log('Updated')})
      .catch((error) => {console.log(error)})
  }

  if (name === null) {
    return (
    <Login updateName={updateName}/>
    )
  } else {
    return (
      <div style={flexSetup}>
        <LoadoutList name={name} changeLoadout={changeLoadout} changeName={changeName}/>
        <Loadout loadoutName={loadoutName} changeName={changeName} loadout={loadout} changeLoadout={changeLoadout} save={save}/>
      </div>
    )
  }
}