import React, { Component } from 'react'
import ReactMixin from 'react-mixin'
import Match from '/imports/both/models/Match'
import TeamComponent from './TeamComponent'

@ReactMixin.decorate(ReactMeteorData)
export default class Commentator extends Component {
  getMeteorData() {
    return { match: Match.findOne() }
  }
  // //
  // goalMade() {
  //   this.data.match.goalMade(player)
  // }
  //
  // goalMissed() {
  //   this.data.match.goalMissed(player)
  // }
  //
  // goalBlocked() {
  //   this.data.match.goalBlocked(player)
  // }
  //
  // releasesSnitch() {
  //   this.data.match.releasesSnitch()
  // }
  //
  // caughtSnitch() {
  //   this.data.match.caughtSnitch(player)
  // }
  // renderMatch() {
  //   if (!this.data.match) {
  //     return false
  //   }
  //   const match = this.data.match
  //   console.log(match)
  // }
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
        <TeamComponent key={team1._id} team={team1}/>
        <button className="ui inverted blue button">Goal Made</button>
        <button className="ui inverted blue button">Goal Missed</button>
        <button className="ui inverted red button">Goal Blocked</button>
        <button className="ui inverted yellow button">Snitch Appeared</button>
        <button className="ui inverted green button">Snitch Caught</button>
        <TeamComponent key={team2._id} team={team2}/>
      </div>
    )
  }
}
