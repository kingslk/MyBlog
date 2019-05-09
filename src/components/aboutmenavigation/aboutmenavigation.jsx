import React, { Component } from 'react';
import { Icon, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import './aboutmenavigation.css';

export default class AboutMeNavigation extends Component {
  render() {
    const {
      location: { pathname }
    } = this.props;
    return (
      <div>
        <Link
          to="introduction"
          className={
            pathname.split('/')[2] === 'introduction'
              ? 'nav-item nav-action'
              : 'nav-item'
          }
        >
          <Tooltip title="个人简历" placement="rightTop">
            <Icon className="aboutMe-icon" type="snippets" />
          </Tooltip>
        </Link>
        <Link
          to="favorite"
          className={
            pathname.split('/')[2] === 'favorite'
              ? 'nav-item nav-action'
              : 'nav-item'
          }
        >
          <Tooltip title="我的爱好" placement="rightTop">
            <Icon className="aboutMe-icon" type="book" />
          </Tooltip>
        </Link>
        <Link
          to="ability"
          className={
            pathname.split('/')[2] === 'ability'
              ? 'nav-item nav-action'
              : 'nav-item'
          }
        >
          <Tooltip title="个人能力" placement="rightTop">
            <Icon className="aboutMe-icon" type="bar-chart" />
          </Tooltip>
        </Link>
        <Link
          to="connection"
          className={
            pathname.split('/')[2] === 'connection'
              ? 'nav-item nav-action'
              : 'nav-item'
          }
        >
          <Tooltip title="联系我" placement="rightTop">
            <Icon className="aboutMe-icon" type="laptop" />
          </Tooltip>
        </Link>
      </div>
    );
  }
}
