import React from "react";
import { Route } from "react-router-dom";

export default React.memo(function PrivateRoute({
  component: Component,
  ...rest
}) {
  return (
    <Route {...rest} render={(props) => <Component {...rest} {...props} />} />
  );
});
