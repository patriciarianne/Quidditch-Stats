import React, { Component } from 'react'

import Player from '/imports/both/models/Player'
import Action from '/imports/both/models/Action'
import Team from '/imports/both/models/Team'
import ActionComponent from './ActionComponent'
import ReactMixin from 'react-mixin'

@ReactMixin.decorate(ReactMeteorData)
export default class Main extends Component {

  getMeteorData() {
    return { actions: Action.find().fetch() }
  }


  render() {
    const players = Player.find().fetch()
    return (
      <div className="container">
        <header>
          <h1>Ligue-de-Quidditch!</h1>
        </header>
        <body>
          {this.data.actions.map((action) => {
           return <ActionComponent key={action._id} action={action}/>
          })}
        </body>
      </div>
    )
  }
}
