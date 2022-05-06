import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './styles.css'

export const LoadoutList = ({name, changeLoadout, changeName}) => {
  const [loadouts, updateLoadouts] = useState([])

  useEffect(() => {
    axios.get('/Loadouts', {params: {name}})
      .then((response) => {updateLoadouts(response.data)})
      .catch((error) => {console.log(error)})
  }, [])

  const loadoutSelect = (event) => {
    changeName(event.target.id)
    axios.get(`/Loadouts/${event.target.id}`, {params: {name}})
      .then((response) => {changeLoadout(response.data)})
      .catch((error) => {console.log(error)})
  }

  return (
    <div id='listBox'>
      {loadouts.map((loadout) => <div id={loadout.loadoutName} onClick={loadoutSelect}>{loadout.loadoutName}</div>)}
    </div>
  )
}