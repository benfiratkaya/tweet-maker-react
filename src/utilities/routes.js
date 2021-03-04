import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ScrollToTop from "../components/ScrollToTop";

import Home from "../components/Home";
import NotFound from "../components/NotFound";

const Routes = () => (
  <Router>
    <ScrollToTop />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
