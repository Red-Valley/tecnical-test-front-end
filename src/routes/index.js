import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Home } from "../templates/Home";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        {_routes.map(({ path, exact, component }) => (
          <Route exact={exact} path={path} component={component} />
        ))}
      </Switch>
    </Router>
  );
};

const _routes = [
  {
    path: "",
    exact: true,
    component: Home,
  },
  {
    path: "/character/:id",
    component: Home,
  },
];
