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
      <div>
        <button className='myButton' onClick={this.clickHandle}>Sign in with Google</button>
      </div>
    )
  }
}

export default Login
