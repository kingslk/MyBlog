import React, { Component } from 'react';
import './aboutmenavigation.css';
import { Link } from 'react-router-dom';
import { Icon, Tooltip } from 'antd';

export default class AboutMeNavigation extends Component {
  render() {
    // 获取浏览器url
    const {
      location: { pathname }
    } = this.props;
    return (
      <div>
        {/* 使用三目运算符判断url，从而改变Link变器的css样式 */}
        <Link
          to="introduction"
          className={
            pathname.split('/')[2] === 'introduction'
              ? 'nav-item nav-action'
              : 'nav-item'
          }
        >
          {/* 鼠标hover时显示title内的内容 */}
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
