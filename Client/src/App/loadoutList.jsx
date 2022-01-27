import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {flexSetup, listBox} from './styles.jsx'

export const LoadoutList = ({name}) => {
  const [loadouts, updateLoadouts] = useState([])

  useEffect(() => {
    axios.get('/Loadouts', {params: {name}})
      .then((response) => {updateLoadouts(response.data)})
      .catch((error) => {console.log(error)})
  })

  return (
    <div style={listBox}>
      {loadouts.map((loadout) => <div>{loadout.loadoutName}</div>)}
    </div>
  )
}