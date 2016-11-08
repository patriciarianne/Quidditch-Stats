import { Meteor } from 'meteor/meteor'
import Player from '/imports/both/models/Player'
import Team from '/imports/both/models/Team'
import Action from '/imports/both/models/Action'
import Play from '/imports/both/models/Play'
import Match from '/imports/both/models/Match'

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish(null, selector =>
   Player.find(selector)
)

Meteor.publish(null, selector =>
   Team.find(selector)
)

Meteor.publish(null, selector =>
   Action.find(selector)
)

Meteor.publish(null, selector =>
   Match.find(selector)
)

Meteor.publish(null, selector =>
   Play.find(selector)
)
