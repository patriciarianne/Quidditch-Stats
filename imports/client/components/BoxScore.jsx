import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'
import ReactMixin from 'react-mixin'
import Match from '/imports/both/models/Match'
import TeamStat from './TeamStat'
import Header from './Header'

@ReactMixin.decorate(ReactMeteorData)
export default class BoxScore extends Component {
  getMeteorData() {
    Meteor.subscribe('matches')
    return { match: Match.findOne() }
  }

  render() {
    if (!this.data.match) {
      return false
    }

    return (
      <div>
        <Header/>
        <div className="ui one column centered grid">
          {this.data.match.teams.map(team => <TeamStat key={team._id} team={team}/>)}
        </div>
      </div>
    )
  }
}
