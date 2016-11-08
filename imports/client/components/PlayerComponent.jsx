import React from 'react'
import Player from '/imports/both/models/Player'

export default class Players extends React.Component {
  handleSubmit(event) {
    const player = Player.findOne({ _id: this.props.player._id })
  }

  render() {
    return (
      <tr>
        <td>{this.props.player.playerNumber}</td>
      </tr>
    )
  }
}
