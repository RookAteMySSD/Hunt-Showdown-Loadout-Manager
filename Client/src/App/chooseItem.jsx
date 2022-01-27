import React, {useState, useEffect} from 'react'
import {Item} from './item.jsx'
import {Weapons, Tools, Consumables} from '../Data.js'

export const ChooseItem = ({weapon, type, loadout, changeLoadout, ucw}) => {
  const lists = {
    Weapon: Object.keys(Weapons),
    Tool: Object.keys(Tools),
    Consumable: Object.keys(Consumables)
  }

  return (
    <div>
      {weapon}
      <div>
        {lists[type].map((item) => <Item item={item} weapon={weapon} loadout={loadout} changeLoadout={changeLoadout} ucw={ucw}/>)}
      </div>
    </div>
  )
}