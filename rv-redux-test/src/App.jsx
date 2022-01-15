import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import NotFound from "./pages/NotFound";
import { CharacterDetail } from "./pages/CharacterDetail";

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/character/:id" component={CharacterDetail} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
