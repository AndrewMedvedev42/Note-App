import React from "react";
// import {NavigationBar} from "./components/navigation-bar"
import {MainPage} from "./pages/MainPage"
import {DetalView} from "./pages/DetalView"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "../src/styles/css/index.css";

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/detal-view">
            <DetalView />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App