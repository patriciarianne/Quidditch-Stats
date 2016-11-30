import React, { Component } from 'react'
import ReactMixin from 'react-mixin'
import { Meteor } from 'meteor/meteor'
import Player from '/imports/both/models/Player'
import Team from '/imports/both/models/Team'
import PlayerButton from './PlayerButton'

@ReactMixin.decorate(ReactMeteorData)
export default class TeamData extends Component {
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
        <div className="ui huge basic label">{this.data.team.name} : {this.data.team.getPlayers().getScore()}</div>
         {this.data.players.map(player =>
           <PlayerButton selectPlayer={this.props.selectPlayer} key={player._id} player={player}/>)}
      </div>
    )
  }
}
