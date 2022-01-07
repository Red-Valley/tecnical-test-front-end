import { Route, Switch } from "react-router-dom";
import Characterdetails from "./Characterdetails";
import Characters from "./Characters";
import Header from "./Header";

function Appcontainer() {
  return (
    <div className="container border">
      <Header/>
      <Switch>
        <Route exact path="/">
          <Characters />
        </Route>
        <Route path="/characters">
          <Characters />
        </Route>
        <Route path="/character/:id">
          <Characterdetails />
        </Route>
      </Switch>
      
    </div>
  );
}

export default Appcontainer;
