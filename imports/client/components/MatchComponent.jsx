import React from 'react'
import Match from '/imports/both/models/Match'
import { Link } from 'meteor/meteor'

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
      <Link to='/commentator'>
      {this.props.match.name}
       </Link>
       {matchEnded}
      </div>
    )
  }
}
