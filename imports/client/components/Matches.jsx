import React, { Component } from 'react'
import ReactMixin from 'react-mixin'
import { Meteor } from 'meteor/meteor'
import Match from '/imports/both/models/Match'
import MatchComponent from './MatchComponent'

@ReactMixin.decorate(ReactMeteorData)
export default class Matches extends Component {
  getMeteorData() {
    Meteor.subscribe('matches')
    return { matches: Match.find().fetch() }
  }

  render() {
    return (
      <div>
      MATCHES
        {this.data.matches.map(match => <MatchComponent key={match._id} match={match}/>)}
      </div>
    )
  }
}
