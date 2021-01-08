import React from "react";
import { Route } from "react-router-dom";

export default React.memo(function PublicRoute({
  component: Component,
  ...rest
}) {
  return (
    <Route {...rest} render={(props) => <Component {...rest} {...props} />} />
  );
});
