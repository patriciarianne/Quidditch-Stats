import React, { Component } from 'react'

export default class Header extends Component {

  render() {
    return (
      <div className="ui fluid inverted menu">
        <a href='/commentator' className="item">
          <i className="users icon"></i>
          Commentator
        </a>
        <a href='/boxscore' className="item">
          <i className="trophy icon"></i>
          Box Score
        </a>
        <a href='/playbyplay' className="item">
          <i className="soccer icon"></i>
          Play-by-Play
        </a>
      </div>
    )
  }
}
