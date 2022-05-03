import React, {useState, useEffect} from 'react'
import {Weapons, Tools, Consumables} from '../Data.js'

export const Item = ({item, weapon, loadout, changeLoadout, ucw}) => {
  const change = () => {
    const newLoadout = loadout
    newLoadout[weapon[0]] = item
    changeLoadout(newLoadout)
    ucw(false)
  }

  if (weapon[1] === 'Weapon') {
    return (
      <div>
        <img src={Weapons[item].img} onClick={change}></img>
      </div>
    )
  } if (weapon[1] === 'Tool') {
    return (
      <div>
        <img src={Tools[item].img} onClick={change}></img>
      </div>
    )
  } if (weapon[1] === 'Consumable') {
    return (
      <div>
        <img src={Consumables[item].img} onClick={change}></img>
      </div>
    )
  }
}