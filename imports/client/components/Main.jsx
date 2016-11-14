import React, { Component } from 'react'

// import Match from '/imports/both/models/Match'
// import Team from '/imports/both/models/Team'
// import Player from '/imports/both/models/Player'
// import ReactMixin from 'react-mixin'
import Header from './Header'
import Commentator from './Commentator'
import PlayByPlay from './PlayByPlay'
import BoxScore from './BoxScore'

// @ReactMixin.decorate(ReactMeteorData)
export default class Main extends Component {
  //
  // getMeteorData() {
  //   return { players: Player.find().fetch() }
  // }

  render() {
    return (
      <div className="container">
      <Header />
      <Commentator/>
      <PlayByPlay />
      <BoxScore />
      </div>
    )
  }
}
