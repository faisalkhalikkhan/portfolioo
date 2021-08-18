
import "./App.css";


import LandingPage from "./Components/LandingPage/LandingPage";

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Components/Home/Home'


function App() {

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/home" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
