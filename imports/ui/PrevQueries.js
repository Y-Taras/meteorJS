import React, { Component, PropTypes } from 'react'
import { Meteor } from 'meteor/meteor'
import { Venues } from '../utils/Venues.js'
import { composeWithTracker } from 'react-komposer'

class PreviousQuery extends Component {
  removeQuery (id) {
    Meteor.call('querylist.remove', id)
  }
  renderQueriesItems () {
    return this.props.requests.map(item => {
      return (
        <tr key={item._id}>
          <td>
            <a
              className='removeButton'
              onClick={this.removeQuery.bind(this, item._id)}
            />
          </td>
          <td>{item.searchItem}</td>
          <td>{item.lat}</td>
          <td>{item.lng}</td>
          <td>{item.date.toLocaleString()}</td>
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
      </div>
    )
  }
}

PreviousQuery.propTypes = {
  requests: PropTypes.array
}

const composer = (props, onData) => {
  Meteor.subscribe('venues')
  const requests = Venues.find().fetch()
  onData(null, {
    requests
  })
}

export default composeWithTracker(composer)(PreviousQuery)
