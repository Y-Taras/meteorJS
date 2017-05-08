import { Meteor } from 'meteor/meteor'
import React from 'react'
import ReactDOM from 'react-dom'

import Routes from '../imports/routes/Routes.js'
import '../imports/startup/simple-schema-configuration.js'

Meteor.startup(() => {
  ReactDOM.render(<Routes />, document.getElementById('app'))
})
