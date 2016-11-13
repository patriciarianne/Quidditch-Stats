import React, { Component } from 'react'

export default class Header extends Component {

  render() {
    return (
      <div className="ui fluid inverted menu">
        <a href='/BoxScore' className="item">
          <i className="trophy icon"></i>
          Box Score
        </a>
        <a href='/PlayByPlay' className="item">
          <i className="soccer icon"></i>
          Play-by-Play
        </a>
      </div>
    )
  }
}
