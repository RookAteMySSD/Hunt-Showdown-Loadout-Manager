import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Login} from './login.jsx'
import {LoadoutList} from './loadoutList.jsx'
import {Loadout} from './loadout.jsx'
import {flexSetup, backroundImg} from './styles.jsx'

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

  const backroundArr = ['At gun point', 'Concept-Art-1',
  'Hunt_E3_2017_screenshot_fire_1080p', 'Hunt_E3_2017_screenshot_light_1080p', 'Hunt_E3_2017_screenshot_sniper_1080p',
  'Hunter becomes Hunted', 'Hunter in the fog', 'Hunters in the swamp', 'Hunters']
  const [imageNum, setImageNum] = useState(0)
  useEffect(() => {
    const newNum = Math.floor(Math.random() * 9)
    setImageNum(newNum)
  }, [])
  const background = `./img/Backround/${backroundArr[imageNum]}.jpg`


  if (name === null) {
    return (
    <div>
      <img src={background} style={backroundImg}></img>
      <Login updateName={updateName}/>
    </div>
    )
  } else {
    return (
      <div style={flexSetup}>
        <img src={background} style={backroundImg}></img>
        <LoadoutList name={name} changeLoadout={changeLoadout} changeName={changeName}/>
        <Loadout loadoutName={loadoutName} changeName={changeName} loadout={loadout} changeLoadout={changeLoadout} save={save}/>
      </div>
    )
  }
}