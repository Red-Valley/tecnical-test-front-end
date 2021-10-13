import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Home } from "../templates/Home";
import { ViewCharacter } from "../templates/ViewCharacter";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        {_routes.map(({ path, exact, component }, index) => (
          <Route key={index} exact={exact} path={path} component={component} />
        ))}
      </Switch>
    </Router>
  );
};

const _routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    exact: false,
    path: "/character/:id",
    component: ViewCharacter,
  },
];
