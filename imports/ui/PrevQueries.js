import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'
import { Venues } from '../utils/Venues.js'
import { Tracker } from 'meteor/tracker'

class PreviousQuery extends Component {
  constructor () {
    super()
    this.state = {
      requests: []
    }
  }
  componentDidMount () {
    this.requestsTracker = Tracker.autorun(() => {
      Meteor.subscribe('venues')
      const requests = Venues.find().fetch()
      this.setState({ requests })
    })
  }
  componentWillUnmount () {
    this.requestsTracker.stop()
  }
  renderQueriesItems () {
    return this.state.requests.map(item => {
      return (
        <tr key={item._id}>
          <td>
            <a
              className='removeButton'
              onClick={() => {
                Meteor.call('querylist.remove', item._id)
              }}
            />
          </td>
          <td>{item.searchItem}</td>
          <td>{item.lat}</td>
          <td>{item.lng}</td>
          <td>{item.date}</td>
        </tr>
      )
    })
  }
  render () {
    return (
      <div>
        <table className='queries'>
          <tbody>
            {this.renderQueriesItems()}
          </tbody>
        </table>
        {console.log(this.state.requests)}
      </div>
    )
  }
}

export default PreviousQuery
