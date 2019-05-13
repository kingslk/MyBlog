import React, { Component } from 'react';
import { Layout } from 'antd';
import { Route, Switch, Redirect } from 'react-router-dom';
import './aboutMe.css';
import AboutMeNavigation from '../../components/aboutmenavigation/aboutmenavigation';
import Introduction from './introduction/introduction';
import Ability from './ability/ability';
import Favorite from './favorite/favorite';
import Connection from './connection/connection';
export default class AboutMe extends Component {
  render() {
    const { Sider } = Layout;
    const {
      match: { url },
      location
    } = this.props;
    return (
      <div className="aboutMe-container">
        <div className="aboutMe-flex">
          <div className="aboutMe-left">
            <div className="aboutMe-header-bg">
              <div className="aboutMe-header" />
            </div>
            <Sider className="nav-menu" width={120}>
              <AboutMeNavigation location={location} />
            </Sider>
          </div>
          <Switch>
            <Route path={`${url}/introduction`} component={Introduction} />
            <Route path={`${url}/favorite`} component={Favorite} />
            <Route path={`${url}/ability`} component={Ability} />
            <Route path={`${url}/connection`} component={Connection} />
            <Redirect from={`/`} to={`${url}/introduction`} />
          </Switch>
        </div>
      </div>
    );
  }
}
