import React from 'react'
import Match from '/imports/both/models/Match'

export default class MatchComponent extends React.Component {
  select() {
    const match = Match.find({ _id: this.props.match._id })
  }

  render() {
    return (
      <div>
      {/* <a onClick={this.select.bind(this)}>*/}
      <a href='/commentator'>
      {this.props.match.name}
       </a>
      </div>
    )
  }
}
