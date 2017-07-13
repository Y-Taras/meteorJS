import { Meteor } from 'meteor/meteor'
import { ServiceConfiguration } from 'meteor/service-configuration'
import '../imports/utils/Venues'
import '../imports/startup/simple-schema-configuration.js'

Meteor.startup(() => {
  // code to run on server at startup
  ServiceConfiguration.configurations.upsert(
    { service: 'google' },
    {
      $set: {
        clientId: '664901449582-0je18ihps9op40vu634pgfbialrreps1.apps.googleusercontent.com',
        loginStyle: 'popup',
        secret: 'dYghQPB3iS7b7cmNhd8Lj4Uv'
      }
    }
  )
})
