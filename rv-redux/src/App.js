import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CharacterDetail from "./components/CharacterDetail";
import CharacterList from "./components/CharacterList";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={CharacterList} />
        <Route path="/character/:id" component={CharacterDetail} />
        {/* Not found route */}
        <Route component={() => <h1>Not found</h1>} />
      </Switch>
    </Router>
  );
}

export default App;
