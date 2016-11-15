import React, { Component } from 'react'
import ReactMixin from 'react-mixin'
import Player from '/imports/both/models/Player'
import Team from '/imports/both/models/Team'
import PlayerComponent from './PlayerComponent'

@ReactMixin.decorate(ReactMeteorData)
export default class TeamComponent extends Component {
  getMeteorData() {
    return { players: Player.find({ team: this.props.team._id }).fetch() }
  }

  render() {
    const teamData = Team.findOne({ _id: this.props.team._id })
    const score = teamData.getScore()
    console.log('------')
    console.log(this.props.team)
    return (
      <div>
        <big> {teamData.name} </big>
        <br></br>
        Score:
        {score}
        <br></br>
         {this.data.players.map(player => <PlayerComponent selectPlayer={this.props.selectPlayer} key={player._id} player={player}/>)}
      </div>
    )
  }
}
