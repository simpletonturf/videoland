import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import landing from "./components/landing/landing";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={landing}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
