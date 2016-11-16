import React from 'react'
import Match from '/imports/both/models/Match'

export default class MatchComponent extends React.Component {
  select() {
    const match = Match.find({ _id: this.props.match._id })
  }

  render() {
    let matchEnded = ''
    if (this.props.match.gameEnded) {
      matchEnded = '--- [MATCH ENDED]'
    }
    return (
      <div>
      {/* <a onClick={this.select.bind(this)}>*/}
      <a href='/commentator'>
      {this.props.match.name}
       </a>
       {matchEnded}
      </div>
    )
  }
}
