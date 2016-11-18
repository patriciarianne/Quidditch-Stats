import React from 'react'

export default class PlayerButton extends React.Component {
  select() {
    this.props.selectPlayer(this.props.player)
  }

  render() {
    return (
      <div>
        {this.props.player.position}
        <button onClick={this.select.bind(this)} className="circular ui icon button">
          {this.props.player.number}
        </button>
      </div>
    )
  }
}
