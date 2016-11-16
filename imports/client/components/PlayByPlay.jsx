import React, { Component } from 'react'
import ReactMixin from 'react-mixin'
import { Meteor } from 'meteor/meteor'
import Match from '/imports/both/models/Match'
import Play from '/imports/both/models/Play'
import PlayComponent from './PlayComponent'
import Header from './Header'

@ReactMixin.decorate(ReactMeteorData)
export default class PlayByPlay extends Component {
  getMeteorData() {
    Meteor.subscribe('matches')
    Meteor.subscribe('plays')
    return { match: Match.findOne({ name: 'Ravenclaw VS Hufflepuff' }) }
  }

  render() {
    if (!this.data.match) {
      return false
    }
    const plays = Play.find({ match: this.data.match._id })

    return (
      <div>
        <Header/>
        <div className="ui massive label">
          PLAY-BY-PLAY
        </div>

        <table className="ui striped table">
          <tbody>
            {plays.map(play => <PlayComponent key={play._id} play={play}/>)}
          </tbody>
        </table>
      </div>
    )
  }
}
