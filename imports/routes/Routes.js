import React, { PropTypes } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { composeWithTracker } from 'react-komposer'
import { Meteor } from 'meteor/meteor'

import Login from '../ui/Login'
import Landing from '../ui/Landing'
import NoMatch from '../ui/NoMatch'
import Public from '../ui/Public'
import Authenticated from '../ui/Authenticated'

const Routes = props => {
  return (
    <Router>
      <Switch>
        <Authenticated exact path='/' component={Landing} {...props} />
        <Public path='/login' component={Login} {...props} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  )
}

Routes.propTypes = {
  loggingIn: PropTypes.bool,
  authenticated: PropTypes.bool
}

const composer = (props, onData) => {
  const loggingIn = Meteor.loggingIn()
  onData(null, {
    loggingIn,
    authenticated: !loggingIn && !!Meteor.userId()
  })
}
export default composeWithTracker(composer)(Routes)
