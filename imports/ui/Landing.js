import React, { Component } from 'react'
import { _ } from 'lodash'
import FaSpinner from 'react-icons/lib/fa/spinner'

import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

import PrevQueries from './PrevQueries.js'
import Map from './Map.js'
import CsvExport from './CSV.js'
import SearchResult from './SearchResult.js'
import fetchFourSquareApi from '../utils/api.js'

class Landing extends Component {
  constructor () {
    super()
    this.state = {
      markers: []
    }
    this.handleMapLoad = this.handleMapLoad.bind(this)
    this.onLogout = this.onLogout.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onLogout () {
    Accounts.logout()
  }

  handleMapLoad (map) {
    this._map = map
  }

  handleSubmit (e) {
    e.preventDefault()
    const searchItem = this.textInput.value.trim()
    if (!searchItem) {
      return
    }
    var center = {
      lat: this._map.getCenter().lat(),
      lng: this._map.getCenter().lng()
    }
    fetchFourSquareApi(searchItem, center).then(venues => {
      this.setState(function () {
        return { markers: venues }
      })

      Meteor.call(
        'querylist.insert',
        venues,
        searchItem,
        center.lat,
        center.lng
      )
    })

    this.textInput.value = ''
  }

  render () {
    var styles = { textDecoration: 'underline' }
    return (
      <div>
        <button className='myButton' onClick={this.onLogout}>LogOut</button>
        <div style={styles}>{Meteor.user().profile.name}</div>
        <PrevQueries />
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            autoFocus
            placeholder='Search..'
            ref={input => {
              this.textInput = input
            }}
          />
        </form>
        <Map
          loadingElement={
            <div style={{ height: `200px` }}>
              <FaSpinner
                style={{
                  display: `block`,
                  width: `80px`,
                  height: `80px`,
                  margin: `150px auto`,
                  animation: `fa-spin 2s infinite linear`
                }}
              />
            </div>
          }
          googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyByH0c5bxYDZ48BLQ401BBsm4DppG6QNkQ'
          containerElement={<div style={{ height: `354px` }} />}
          mapElement={<div style={{ height: `350px` }} />}
          onMapLoad={this.handleMapLoad}
          onMapClick={_.noop}
          markers={this.state.markers}
          onMarkerRightClick={_.noop}
        />
        <CsvExport venue={this.state.markers} />
        <SearchResult venue={this.state.markers} />
      </div>
    )
  }
}
export default Landing
