import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'

import Main from '../imports/client/components/Main.jsx'

Meteor.startup(() => {
  render(<Main />, document.getElementById('render-main'))
})
