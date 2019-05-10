import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import WheelPlanting from './components/wheelplanting/wheelplanting';
import NavigationBar from './components/navigation/navigation';
import NestJs from './components/nestjs/nestjs';
import MainIndex from './pages/main/mainIndex';
import AntIntroduction from './pages/antintroduction/antintroduction';
import ReWebs from './pages/recommendation/rewebs/rewebs';
import ReBooks from './pages/recommendation/rebooks/rebooks';
import AboutMe from './pages/aboutMe/aboutMe';

class App extends Component {
  constructor() {
    super();
    this.state = {
      current: 'main'
    };
  }
  render() {
    return (
      <div className="App">
        <NestJs />
        <WheelPlanting />
        <Router>
          <NavigationBar />
          <div style={{ marginBottom: '10px' }}>
            <Switch>
              <Route path="/home" component={MainIndex} />
              <Route path="/antintroduction" component={AntIntroduction} />
              <Route path="/rewebs" component={ReWebs} />
              <Route path="/rebooks" component={ReBooks} />
              <Route path="/aboutMe" component={AboutMe} />
              <Redirect from="/" to="/home" />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
