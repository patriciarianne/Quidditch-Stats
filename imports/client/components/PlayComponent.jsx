import React from 'react'
import Play from '/imports/both/models/Play'
import Player from '/imports/both/models/Player'

export default class PlayComponent extends React.Component {
  render() {
    const date = this.props.play.date.toLocaleString()
    return (
      <div>
         {this.props.play.name}
         {this.props.play.player}
         {date}
        <br></br>
      </div>
    )
  }
}
