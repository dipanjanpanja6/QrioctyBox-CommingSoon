import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import About from './component/About';
import Home from './component/landing'
import AppBar from './component/AppBar';
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (<>
    <Router>
      <AppBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />

        <Route exact render={() => <Redirect to='/' />} />
      </Switch>
    </Router>
    <ToastContainer /></>
  );
}

export default App;
