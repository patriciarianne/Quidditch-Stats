import React, { Component } from 'react'
import ReactMixin from 'react-mixin'
import { Meteor } from 'meteor/meteor'
import Match from '/imports/both/models/Match'
import TeamComponent from './TeamComponent'
import PlayerComponent from './PlayerComponent'
import Header from './Header'
import PlayByPlay from './PlayByPlay'

@ReactMixin.decorate(ReactMeteorData)
export default class Commentator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPlayer: 'no current player',
    }
  }

  getMeteorData() {
    Meteor.subscribe('matches')
    return { match: Match.findOne({ name: 'Ravenclaw VS Hufflepuff' }) }
  }

  selectPlayer(player) {
    this.setState({ currentPlayer: player });
  }

  goalMade() {
    this.data.match.goalMade(this.state.currentPlayer)
    this.data.match.save()
  }

  goalMissed() {
    this.data.match.goalMissed(this.state.currentPlayer)
    this.data.match.save()
  }

  goalBlocked() {
    this.data.match.goalBlocked(this.state.currentPlayer)
    this.data.match.save()
  }

  releasesSnitch() {
    this.data.match.releasesSnitch()
    this.data.match.save()
  }

  caughtSnitch() {
    this.data.match.caughtSnitch(this.state.currentPlayer)
    this.data.match.save()
  }

  render() {
    if (!this.data.match) {
      return false
    }
    const match = this.data.match
    const team1 = match.teams[0]
    const team2 = match.teams[1]

    let matchEnded = ''
    if (match.gameEnded) {
      matchEnded = '<< MATCH ENDED >>'
    }
    console.log(match)
    console.log(this.state.currentPlayer)
    return (
      <div>
      <Header />
        <div className="ui one column centered grid">
          <big>{matchEnded}</big>
          <div className="column">
            <div className="ui massive label">
              {match.name}
            </div>
          </div>

          <button onClick={this.goalMade.bind(this)} className="ui inverted blue button">Goal Made</button>
          <button onClick={this.goalMissed.bind(this)} className="ui inverted blue button">Goal Missed</button>
          <button onClick={this.goalBlocked.bind(this)} className="ui inverted red button">Goal Blocked</button>
          <button onClick={this.releasesSnitch.bind(this)} className="ui inverted yellow button">Snitch Appeared</button>
          <button onClick={this.caughtSnitch.bind(this)} className="ui inverted green button">Snitch Caught</button>

          <div className="four column centered row">
            <div className="column"><TeamComponent selectPlayer={this.selectPlayer.bind(this)} key={team1._id} team={team1}/></div>
            <div className="column"><TeamComponent selectPlayer={this.selectPlayer.bind(this)} key={team2._id} team={team2}/></div>
          </div>
        </div>
      </div>
    )
  }
}
