const mongoose = require('mongoose');

const loadoutschema = new mongoose.Schema({
  name: String,
  loadoutName: String,
  firstWeapon: String,
  secondWeapon: String,
  firstTool: String,
  secondTool: String,
  thirdTool: String,
  fourthTool: String,
  firstConsumable: String,
  secondConsumable: String,
  thirdConsumable: String,
  fourthConsumable: String
})

const Loadout = mongoose.model('Loadout', loadoutschema);
module.exports = Loadout