import React, {useState, useEffect} from 'react'
import {Item} from './item.jsx'
import {Weapons, Tools, Consumables} from '../Data.js'
import {list} from './styles.jsx'

export const ChooseItem = ({weapon, type, loadout, changeLoadout, ucw}) => {
  const lists = {
    Weapon: Object.keys(Weapons),
    Tool: Object.keys(Tools),
    Consumable: Object.keys(Consumables)
  }

  return (
    <div style={list}>
        {lists[type].map((item) => <Item item={item} weapon={weapon} loadout={loadout} changeLoadout={changeLoadout} type={type} ucw={ucw}/>)}
    </div>
  )
}