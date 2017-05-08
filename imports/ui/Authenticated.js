import React, { PropTypes } from 'react'
import { Route, Redirect } from 'react-router-dom'

const Authenticated = ({ logginIn, authenticated, component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (logginIn) return <div />
        return authenticated
          ? React.createElement(component, {
            ...props,
            logginIn,
            authenticated
          })
          : <Redirect to='/login' />
      }}
    />
  )
}

Authenticated.propTypes = {
  logginIn: PropTypes.bool,
  authenticated: PropTypes.bool,
  component: PropTypes.func
}

export default Authenticated
