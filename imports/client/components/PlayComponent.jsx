import React from 'react'
import Play from '/imports/both/models/Play'
import Player from '/imports/both/models/Player'

export default class PlayComponent extends React.Component {
  render() {
    const date = this.props.play.date.toLocaleString()
    return (
      <tr>
        <td>{this.props.play.name}</td>
        <td>{this.props.play.player}</td>
        <td>{date}</td>
      </tr>
    )
  }
}
