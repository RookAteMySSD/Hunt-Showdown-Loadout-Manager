import React, {useState, useEffect} from 'react'

export const Item = ({item, weapon, loadout, changeLoadout, ucw}) => {
  const change = () => {
    const newLoadout = loadout
    newLoadout[weapon] = item
    changeLoadout(newLoadout)
    ucw(false)
  }

  return (
    <div onClick={change}>{item}</div>
  )
}