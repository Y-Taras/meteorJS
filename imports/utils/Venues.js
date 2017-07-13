import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import SimpleSchema from 'simpl-schema'

export const Venues = new Mongo.Collection('venues')

if (Meteor.isServer) {
  Meteor.publish('venues', function () {
    return Venues.find({ userId: this.userId })
  })
}

Meteor.methods({
  'querylist.insert' (venues, searchItem, lat, lng) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized')
    }

    new SimpleSchema({
      searchItem: {
        type: String,
        label: 'Your query string'
      }
    }).validate({ searchItem })

    Venues.insert({
      venues,
      searchItem,
      lat,
      lng,
      userId: Meteor.userId(),
      date: new Date()
    })
  },
  'querylist.remove' (id) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized')
    }
    Venues.remove({
      _id: id
    })
  }
})
