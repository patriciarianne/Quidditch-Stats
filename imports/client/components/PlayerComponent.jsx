import React from 'react'
import Player from '/imports/both/models/Player'

export default class PlayerComponent extends React.Component {
  select() {
    this.props.selectPlayer(this.props.player)
  }

  render() {
    return (
      <div>
      {this.props.player.name}
      {this.props.player.position}
      <br></br>
      <button onClick={this.select.bind(this)} className="circular ui icon button">
        {this.props.player.number}
      </button>
      <br></br>
      </div>
    )
  }
}
