import { Meteor } from 'meteor/meteor'
import loadSeeds from '/imports/server/GameSeeds'
import Match from '/imports/both/models/Match'

Meteor.startup(() => {
  if (Match.find().count() === 0) {
    loadSeeds()
  }
})
