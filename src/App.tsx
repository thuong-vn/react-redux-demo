import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from 'pages/home';
import About from 'pages/about';
import Layout from "./components/Layout";

function App() {
  return <Router>
    <Layout>
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/about"} exact component={About} />
      </Switch>
    </Layout>
  </Router>
}

export default App;
