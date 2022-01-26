import React, {useState, useEffect} from 'react'

export const Loadout = ({loadout, changeLoadout}) => {
  return (
    <div>
      <div className='Weapon'>
        {loadout.firstWeapon}
      </div>
      <div className='Weapon'>
        {loadout.secondWeapon}
      </div>
      <div className='Tool'>
        {loadout.firstTool}
      </div>
      <div className='Tool'>
        {loadout.secondTool}
      </div>
      <div className='Tool'>
        {loadout.thirdTool}
      </div>
      <div className='Tool'>
        {loadout.fourthTool}
      </div>
      <div className='Consumable'>
        {loadout.firstConsumable}
      </div>
      <div className='Consumable'>
        {loadout.secondConsumable}
      </div>
      <div className='Consumable'>
        {loadout.thirdConsumable}
      </div>
      <div className='Consumable'>
        {loadout.fourthConsumable}
      </div>
    </div>

  )
}