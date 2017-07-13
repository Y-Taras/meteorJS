import React, { PropTypes } from "react";
import { Route, Redirect } from "react-router-dom";

const Authenticated = ({ component, logginIn, authenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (logginIn) return <div />;
        return authenticated
          ? React.createElement(component, {
              ...props,
              loggingIn,
              authenticated
            })
          : <Redirect to="/login" />;
      }}
    />
  );
};

Authenticated.propTypes = {
  logginIn: PropTypes.bool,
  authenticated: PropTypes.bool,
  component: PropTypes.func
};

export default Authenticated;
