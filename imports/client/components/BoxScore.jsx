import React, { Component } from 'react'
import ReactMixin from 'react-mixin'
import Match from '/imports/both/models/Match'
import TeamStat from './TeamStat'

@ReactMixin.decorate(ReactMeteorData)
export default class BoxScore extends Component {
  getMeteorData() {
    return { match: Match.findOne() }
  }

  render() {
    if (!this.data.match) {
      return false
    }
    const match = this.data.match
    const team1 = match.teams[0]
    const team2 = match.teams[1]
    console.log(team1)
    console.log(team2)
    return (
      <div>
        {match.name}
        {match.teams.map(team => <TeamStat key={team._id} team={team}/>)}
      </div>
    )
  }
}
