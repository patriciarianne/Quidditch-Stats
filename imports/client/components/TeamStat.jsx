import React, { Component } from 'react'
import ReactMixin from 'react-mixin'
import Player from '/imports/both/models/Player'
import Team from '/imports/both/models/Team'
import PlayerStat from './PlayerStat'

@ReactMixin.decorate(ReactMeteorData)
export default class TeamStat extends Component {
  getMeteorData() {
    return {
      players: Player.find({ team: this.props.team._id }).fetch(),
    }
  }

  render() {
    const teamData = Team.findOne({ _id: this.props.team._id })
    const score = teamData.getScore()
    return (
      <div>
        {teamData.name}
        Score: {score}
        <br></br>

        <table className="ui fixed table">
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
