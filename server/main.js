import { Meteor } from 'meteor/meteor'
import Player from '/imports/both/models/Player'
import Team from '/imports/both/models/Team'
import Play from '/imports/both/models/Play'
import Match from '/imports/both/models/Match'

Meteor.startup(() => {
})

Meteor.publish('players', selector =>
   Player.find({}),
)

Meteor.publish('teams', selector =>
   Team.find({}),
)

Meteor.publish('matches', selector =>
   Match.find({}),
)

Meteor.publish('plays', selector =>
   Play.find({}),
)
