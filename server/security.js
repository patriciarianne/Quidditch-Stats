import Player from '/imports/both/models/Player'
import Team from '/imports/both/models/Team'
import Play from '/imports/both/models/Play'
import Match from '/imports/both/models/Match'

Player.collection.allow({
  insert: (userId, doc) => userId,
  update: (userId, doc) => userId,
})

Team.collection.allow({
  insert: (userId, doc) => userId,
  update: (userId, doc) => userId,
})

Play.collection.allow({
  insert: (userId, doc) => userId,
  update: (userId, doc) => userId,
})

Match.collection.allow({
  insert: (userId, doc) => userId,
  update: (userId, doc) => userId,
})

Meteor.users.allow({
  insert: (userId, doc) => userId,
  update: (userId, doc) => userId,
})
