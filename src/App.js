import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Screens
import Home from './screen/Home'
import SinglePage from './screen/SinglePage'

const App = () => {
	return (
    <Router>
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/detail' component={SinglePage}></Route>
    </Switch>
  </Router>
	)
}

export default App
