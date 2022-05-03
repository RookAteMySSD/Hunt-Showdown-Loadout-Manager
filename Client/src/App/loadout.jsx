import React, {useState, useEffect} from 'react'
import {ChooseItem} from './chooseItem.jsx'
import {Weapons, Tools, Consumables} from '../Data.js'
import {flexSetup, mainBox, InputContainer, ButtonContainer} from './styles.jsx'

export const Loadout = ({loadoutName, changeName, loadout, changeLoadout, save}) => {
  const [changeWeapon, updateChangeWeapon] = useState(false)

  const changeWep = (event) => {
    updateChangeWeapon([event.target.id, event.target.className])
  }

  return (
    <div style={mainBox}>
      <div style={flexSetup}>
        <div>
          <div style={flexSetup}>
            <InputContainer placeholder={loadoutName || 'Loadout Name'} onChange={(event) => {changeName(event.target.value)}}></InputContainer>
            <ButtonContainer onClick={save}>Submit</ButtonContainer>
          </div>
          <div style={flexSetup}>
            <img src={Weapons[loadout.firstWeapon].img}  className='Weapon' id='firstWeapon' onClick={changeWep}></img>
          </div>
          <div style={flexSetup}>
            <img src={Weapons[loadout.secondWeapon].img}  className='Weapon' id='secondWeapon' onClick={changeWep}></img>
          </div>
          <div style={flexSetup}>
            <img src={Tools[loadout.firstTool].img}  className='Tool' id='firstTool' onClick={changeWep}></img>
            <img src={Tools[loadout.secondTool].img} className='Tool' id='secondTool' onClick={changeWep}></img>
            <img src={Tools[loadout.thirdTool].img} className='Tool' id='thirdTool' onClick={changeWep}></img>
            <img src={Tools[loadout.fourthTool].img} className='Tool' id='fourthTool' onClick={changeWep}></img>
          </div>
          <div style={flexSetup}>
            <img src={Consumables[loadout.firstConsumable].img} className='Consumable' id='firstConsumable' onClick={changeWep}></img>
            <img src={Consumables[loadout.secondConsumable].img} className='Consumable' id='secondConsumable' onClick={changeWep}></img>
            <img src={Consumables[loadout.thirdConsumable].img} className='Consumable' id='thirdConsumable' onClick={changeWep}></img>
            <img src={Consumables[loadout.fourthConsumable].img} className='Consumable' id='fourthConsumable' onClick={changeWep}></img>
          </div>
        </div>
        <div>
          {changeWeapon ?
              <ChooseItem weapon={changeWeapon} loadout={loadout} changeLoadout={changeLoadout} ucw={updateChangeWeapon}/> : ''}
        </div>
      </div>
    </div>

  )
}