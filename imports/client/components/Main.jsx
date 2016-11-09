import React, { Component } from 'react'
// import ReactMixin from 'react-mixin'
//
// @ReactMixin.decorate(ReactMeteorData)
export default class Main extends Component {
  //
  // getMeteorData() {
  //   return { actions: Action.find().fetch() }
  // }


  render() {
    return (
      <div className="container">
        <header>
          <h1>Ligue-de-Quidditch!</h1>
        </header>
        <body>
          {/* {this.data.actions.map((action) => {
           return <ActionComponent key={action._id} action={action}/>
          })}*/}
        </body>
      </div>
    )
  }
}
