import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Header extends Component {
  render() {
    return (
      <div className="ui fluid inverted menu">
        <Link to='/commentator' className="item">
          <i className="users icon"></i>
          Commentator
        </Link>
        <Link to='/boxscore' className="item">
          <i className="trophy icon"></i>
          Box Score
        </Link>
        <Link to='/playbyplay' className="item">
          <i className="soccer icon"></i>
          Play-by-Play
        </Link>
      </div>
    )
  }
}
