import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'
import Header from './Header'

export default class Login extends Component {
  handleSubmit(event) {
    event.preventDefault()
    const username = event.target.username.value
    const password = event.target.password.value

    Meteor.loginWithPassword(username, password, (error) => {
      if (error) {
        alert(error.reason)
      } else {
        location.href = '/commentator'
      }
    })
  }

  render() {
    return (
      <div className="ui centered grid">
        <div className="ui center aligned segment">
          <label>COMMENTATOR LOGIN</label>
          <form className="ui form" onSubmit={this.handleSubmit.bind(this)}>
            <div className="field">
              <label>Username:
              </label>
              <input type="text" name="username"/>
            </div>
            <div className="field">
              <label>Password:
              </label>
              <input type="password" name="password"/>
            </div>
            <button className="ui fluid blue button">
              Log in
            </button>
          </form>
        </div>
      </div>
    )
  }
}
