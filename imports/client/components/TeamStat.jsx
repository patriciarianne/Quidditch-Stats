import React, { Component } from 'react'
import ReactMixin from 'react-mixin'
import { Meteor } from 'meteor/meteor'
import Player from '/imports/both/models/Player'
import Team from '/imports/both/models/Team'
import PlayerStat from './PlayerStat'

@ReactMixin.decorate(ReactMeteorData)
export default class TeamStat extends Component {
  constructor(props) {
    super(props)
    this.getMeteorData = this.getMeteorData.bind(this)
  }

  getMeteorData() {
    Meteor.subscribe('players')
    Meteor.subscribe('teams')
    return {
      players: Player.find({ team: this.props.team._id }).fetch(),
      team: Team.findOne({ _id: this.props.team._id }),
    }
  }

  render() {
    if (!this.data.team) {
      return false
    }

    return (
      <div>
        <div className="ui huge label">{this.data.team.name} : {this.data.team.getPlayers().getScore()}</div>
        <table className="ui unstackable table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Goals Made</th>
              <th>Goals Missed</th>
              <th>Goals Blocked</th>
              <th>Has Snitch Caught</th>
            </tr>
          </thead>
          <tbody>
              {this.data.players.map(player => <PlayerStat key={player._id} player={player}/>)}
          </tbody>
        </table>
      </div>
    )
  }
}
