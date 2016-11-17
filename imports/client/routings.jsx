import React from 'react';
import { Router, Route, browserHistory } from 'react-router'
import Commentator from './components/Commentator'
import BoxScore from './components/BoxScore'
import PlayByPlay from './components/PlayByPlay'
// import Matches from './components/Matches'
import Main from './components/Main'

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={Main}> </Route>
    <Route path='/commentator' component={Commentator}> </Route>
    <Route path='/boxscore' component={BoxScore}> </Route>
    <Route path='/playbyplay' component={PlayByPlay}> </Route>
  </Router>
)
