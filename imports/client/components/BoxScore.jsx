import React, { Component } from 'react'
import ReactMixin from 'react-mixin'
import Match from '/imports/both/models/Match'
import TeamStat from './TeamStat'

@ReactMixin.decorate(ReactMeteorData)
export default class BoxScore extends Component {
  getMeteorData() {
    return { match: Match.findOne({ name: 'Slytherin VS Gryffindor' }) }
  }

  render() {
    if (!this.data.match) {
      return false
    }
    const match = this.data.match
    return (
      <div>
        {match.name}
        {match.teams.map(team => <TeamStat key={team._id} team={team}/>)}
      </div>
    )
  }
}
