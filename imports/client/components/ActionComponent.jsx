import React from 'react'
import Action from '/imports/both/models/Action'

export default class ActionComponent extends React.Component {
  handleSubmit(event) {
    event.preventDefault()
    const action = Action.find({ _id: this.props.action._id })
    console.log(this.props.action.points)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <button> {this.props.action.name} </button>
      </form>
    )
  }
}
