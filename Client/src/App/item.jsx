import React, {useState, useEffect} from 'react'
import {Weapons, Tools, Consumables} from '../Data.js'

export const Item = ({item, weapon, loadout, changeLoadout, type, ucw}) => {
  const change = () => {
    const newLoadout = loadout
    newLoadout[weapon] = item
    changeLoadout(newLoadout)
    ucw(false)
  }

  if (type === 'Weapon') {
    return (
      <div>
        <img src={Weapons[item].img} onClick={change}></img>
      </div>
    )
  } if (type === 'Tool') {
    return (
      <div>
        <img src={Tools[item].img} onClick={change}></img>
      </div>
    )
  } if (type === 'Consumable') {
    return (
      <div>
        <img src={Consumables[item].img} onClick={change}></img>
      </div>
    )
  }
}