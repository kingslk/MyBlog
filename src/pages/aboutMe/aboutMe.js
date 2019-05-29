import React, { Component } from 'react';
import Head from '../../assets/head.jpg';
import AboutMeNavigation from '../../components/aboutmenavigation/aboutmenavigation';
import Introduction from './introduction/introduction';
import Ability from './ability/ability';
import Favorite from './favorite/favorite';
import Connection from './connection/connection';
import './aboutMe.css';
import { Layout } from 'antd';
import { Route, Switch, Redirect } from 'react-router-dom';
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
              <div className="aboutMe-header">
                <img src={Head} alt="头像" width={75} />
              </div>
            </div>
            <Sider className="nav-menu" width={120}>
              {/* 传递location对象给侧边导航 */}
              <AboutMeNavigation location={location} />
            </Sider>
          </div>
          {/* 关于我页面二级路由 */}
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
