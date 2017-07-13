import React, { PropTypes } from "react";
import { Route, Redirect } from "react-router-dom";

const Public = ({ component, loggingIn, authenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (loggingIn) return <div />;
        return !authenticated
          ? React.createElement(component, {
              ...props,
              loggingIn,
              authenticated
            })
          : <Redirect to="/" />;
      }}
    />
  );
};

Public.propTypes = {
  loggingIn: PropTypes.bool,
  authenticated: PropTypes.bool,
  component: PropTypes.func
};

export default Public;
