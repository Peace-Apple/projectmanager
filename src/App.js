import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { User } from './components/User';
import NotFound from './components/NotFound';
import { AddProject } from './components/AddProject';
import { Projects } from './components/Projects';

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/user" component={User} />
            <Route path="/addproject" component={AddProject} />
            <Route path="/projects" component={Projects} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
