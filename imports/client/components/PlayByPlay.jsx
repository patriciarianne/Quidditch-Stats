import React, { Component } from 'react'
import ReactMixin from 'react-mixin'
import { Meteor } from 'meteor/meteor'
import Match from '/imports/both/models/Match'
import PlayComponent from './PlayComponent'
import Header from './Header'

@ReactMixin.decorate(ReactMeteorData)
export default class PlayByPlay extends Component {

  getMeteorData() {
    Meteor.subscribe('matches')
    return {
      match: Match.findOne({ name: 'Ravenclaw VS Hufflepuff' }),
    }
  }

  render() {
    if (!this.data.match) {
      return false
    }

    console.log('PLAYS')
    console.log(this.data.match.plays)
    return (
      <div>
        <Header/>
        <div className="ui massive label">
          PLAY-BY-PLAY
        </div>

        <table className="ui striped table">
          <tbody>
             {this.data.match.plays.map(play => <PlayComponent key={play._id} play={play}/>)}
          </tbody>
        </table>
      </div>
    )
  }
}
