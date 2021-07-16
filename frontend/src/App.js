import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AddUser from '../src/components/AddUser';

function App() {
  return (
    <Router>
      <div>
        <h1>Welcome to Demo App</h1>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/adduser">
            <AddUser />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App
