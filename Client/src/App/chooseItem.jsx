import React, {useState, useEffect} from 'react'
import {Item} from './item.jsx'
import {Weapons, Tools, Consumables} from '../Data.js'

export const ChooseItem = ({weapon, type}) => {
  const lists = {
    Weapon: Object.keys(Weapons),
    Tool: Object.keys(Tools),
    Consumable: Object.keys(Consumables)
  }

  return (
    <div>
      {weapon}
      {type}
      {lists[type]}
      <Item />
    </div>
  )
}