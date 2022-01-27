import React, {useState, useEffect} from 'react'
import {ChooseItem} from './chooseItem.jsx'
import {popup_box, popup_data} from './styles.jsx'
import {Weapons, Tools, Consumables} from '../Data.js'
import {flexSetup, mainBox, InputContainer} from './styles.jsx'

export const Loadout = ({name}) => {
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
  const [changeWeapon, updateChangeWeapon] = useState(false)
  const [type, updateType] = useState(null)

  const changeWep = (event) => {
    updateType(event.target.className)
    updateChangeWeapon(event.target.id)
  }

  return (
    <div style={mainBox}>
      <div>
        {changeWeapon ?
        <div style={popup_box}>
          <div style={popup_data}>
            <ChooseItem weapon={changeWeapon} type={type} loadout={loadout} changeLoadout={changeLoadout} ucw={updateChangeWeapon}/>
          </div>
        </div> : ''}
      </div>
      <div>
        <InputContainer placeholder='Loadout Name' onChange={(event) => {changeName(event.target.value)}}></InputContainer>
      </div>
      <div>
        <img src={Weapons[loadout.firstWeapon].img}  className='Weapon' id='firstWeapon' onClick={changeWep}></img>
        <img src={Weapons[loadout.secondWeapon].img}  className='Weapon' id='secondWeapon' onClick={changeWep}></img>
      </div>
      <div>
        <img src={Tools[loadout.firstTool].img}  className='Tool' id='firstTool' onClick={changeWep}></img>
        <img src={Tools[loadout.secondTool].img} className='Tool' id='secondTool' onClick={changeWep}></img>
        <img src={Tools[loadout.thirdTool].img} className='Tool' id='thirdTool' onClick={changeWep}></img>
        <img src={Tools[loadout.fourthTool].img} className='Tool' id='fourthTool' onClick={changeWep}></img>
      </div>
      <div>
        <img src={Consumables[loadout.firstConsumable].img} className='Consumable' id='firstConsumable' onClick={changeWep}></img>
        <img src={Consumables[loadout.secondConsumable].img} className='Consumable' id='secondConsumable' onClick={changeWep}></img>
        <img src={Consumables[loadout.thirdConsumable].img} className='Consumable' id='thirdConsumable' onClick={changeWep}></img>
        <img src={Consumables[loadout.fourthConsumable].img} className='Consumable' id='fourthConsumable' onClick={changeWep}></img>
      </div>
    </div>

  )
}