import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import { renderRoutes } from '../imports/client/routings'

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('render-main'))
})
