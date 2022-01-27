const express = require('express')
const path = require('path')
const db = require('../Database')
const Loadout = require('../Database/LoadoutDB.js')

const app = express()
const port = 3000
const Public = path.join(__dirname, '../Client/Public')

app.use(express.static(Public))
app.use(express.json())

app.get('/Loadouts', (req, res) => {
  Loadout.find({name: req.query.name}, 'loadoutName')
    .then((response) => res.send(response))
    .catch((error) => {console.log(error)})
})
app.get('/Loadouts/:loadout', (req, res) => {
  Loadout.findOne({name: req.query.name, loadoutName: req.params.loadout})
    .then((response) => {res.send(response)})
    .catch((error) => {console.log(error)})
})
app.post('/Loadouts/:loadout', (req, res) => {
  Loadout.findOneAndUpdate({name: req.body.name, loadoutName: req.params.loadout}, {
    name: req.body.name,
    loadoutName: req.params.loadout,
    firstWeapon: req.body.firstWeapon,
    secondWeapon: req.body.secondWeapon,
    firstTool: req.body.firstTool,
    secondTool: req.body.secondTool,
    thirdTool: req.body.thirdTool,
    fourthTool: req.body.fourthTool,
    firstConsumable: req.body.firstConsumable,
    secondConsumable: req.body.secondConsumable,
    thirdConsumable: req.body.thirdConsumable,
    fourthConsumable: req.body.fourthConsumable}, {upsert: true})
      .then(() => {res.sendStatus(201)})
      .catch((error) => {console.log(error)})
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})