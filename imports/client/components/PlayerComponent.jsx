import React from 'react'
import Player from '/imports/both/models/Player'

export default class PlayerComponent extends React.Component {
  handleSubmit(event) {
    event.preventDefault()
    const player = Player.find({ _id: this.props.player._id })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
      {this.props.player.name}
      {this.props.player.position}
      <br></br>
      <button className="circular ui icon button">
        {this.props.player.number}
      </button>
      <br></br>
      </form>
    )
  }
}
