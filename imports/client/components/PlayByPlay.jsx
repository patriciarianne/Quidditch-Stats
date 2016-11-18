import React, { Component } from 'react'
import ReactMixin from 'react-mixin'
import { Meteor } from 'meteor/meteor'
import Match from '/imports/both/models/Match'
import PlayData from './PlayData'
import Header from './Header'

@ReactMixin.decorate(ReactMeteorData)
export default class PlayByPlay extends Component {
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
        <div class="ui centered grid">
          <div className="ui massive label">
            PLAY-BY-PLAY
          </div>

          <table className="ui striped table">
            <tbody>
              {this.data.match.plays.map(play => <PlayData key={play._id} play={play}/>)}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
