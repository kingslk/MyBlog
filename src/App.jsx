import React, { Component } from 'react';
import './App.css';
import WheelPlanting from './components/wheelplanting/wheelplanting';
import NavigationBar from './components/navigation/navigation';
import NestJs from './components/nestjs/nestjs';
import MainIndex from './pages/main/mainIndex';
import AntIntroduction from './pages/antintroduction/antintroduction';
import ReWebs from './pages/recommendation/rewebs/rewebs';
import ReBooks from './pages/recommendation/rebooks/rebooks';
import AboutMe from './pages/aboutMe/aboutMe';
import VideoPage from './pages/videopage/videopage';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

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
        {/* nestjs背景 */}
        <NestJs />
        {/* 轮播图 */}
        <WheelPlanting />
        <Router>
          {/* 导航栏 */}
          <NavigationBar />
          <div style={{ marginBottom: '10px' }}>
            {/* 第一层路由合集，包含导航栏可跳转的所有页面 */}
            <Switch>
              <Route path="/home" component={MainIndex} />
              <Route path="/antintroduction" component={AntIntroduction} />
              <Route path="/rewebs" component={ReWebs} />
              <Route path="/rebooks" component={ReBooks} />
              <Route path="/aboutMe" component={AboutMe} />
              <Route path="/video" component={VideoPage} />
              <Redirect from="/" to="/home" />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
