import React from 'react'

export default class PlayerStat extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.player.name} </td>
        <td> {this.props.player.position} </td>
        <td> {this.props.player.goalsMade} </td>
        <td> {this.props.player.goalsMissed} </td>
        <td> {this.props.player.goalsBlocked} </td>
        <td> {this.props.player.hasCaughtSnitch.toString()} </td>
      </tr>
    )
  }
}
