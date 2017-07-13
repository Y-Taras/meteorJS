import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'

class Login extends Component {
  clickHandle () {
    Meteor.loginWithGoogle(
      {
        requestPermissions: ['email']
      },
      function (error) {
        if (error) {
          console.log(error) // If there is any error, will get error here
        } else {
          console.log(Meteor.user()) // If there is successful login, you will get login details here
        }
      }
    )
  }
  render () {
    return (
      <div className='loginForm'>
        <p>To search venues using Foursquare API, please sign in:</p>
        <button className='myButton' onClick={this.clickHandle}>
          <img src='google-icon.png' alt='google-icon' />
          <span>&nbsp;Google&nbsp; </span>
        </button>
      </div>
    )
  }
}

export default Login
