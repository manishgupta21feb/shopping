import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/scss/index.scss";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import allRoutes from "./routes";
import PrivateRoute from "./elements/PrivateRoute/PrivateRoute";
import PublicRoute from "./elements/PublicRoute/PublicRoute";
import Layout from "./elements/Layout/Layout";

function App() {
  return (
    <Router>
        <Layout>
          <Switch>
            {allRoutes.map((route, i) =>
              route.private ? (
                <PrivateRoute key={i} {...route} path={`${route.path}`} />
              ) : (
                <PublicRoute key={i} {...route} path={`${route.path}`} />
              )
            )}
          </Switch>
        </Layout>
    </Router>
  );
}

export default App;
