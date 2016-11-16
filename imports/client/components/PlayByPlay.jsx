import React, { Component } from 'react'
import ReactMixin from 'react-mixin'
import Match from '/imports/both/models/Match'
import Play from '/imports/both/models/Play'
import PlayComponent from './PlayComponent'
import Header from './Header'

@ReactMixin.decorate(ReactMeteorData)
export default class PlayByPlay extends Component {
  getMeteorData() {
    return { match: Match.findOne({ name: 'Ravenclaw VS Hufflepuff' }) }
  }

  render() {
    if (!this.data.match) {
      return false
    }
    const plays = Play.find({ match: this.data.match._id })

    return (
      <div>
      <Header />
        PLAY-BY-PLAY
        <table className="ui striped table">
          <tbody>
            {plays.map(play => <PlayComponent key={play._id} play={play}/>)}
          </tbody>
        </table>
      </div>
    )
  }
}
