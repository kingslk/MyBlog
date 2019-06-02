import React, { Component } from 'react';
import './mine.css';
import Head from '../../assets/head.jpg';
import { Icon, Tooltip, Typography } from 'antd';
export default class Mine extends Component {
  constructor() {
    super();
    // 设定页面需要展示的state
    this.state = {
      zhihu: '知乎',
      github: 'github',
      facebook: 'facebook',
      myLocation: '福建省厦门市集美区厦门理工学院'
    };
  }
  render() {
    // 在页面中调用声明的state
    const { zhihu, github, facebook, myLocation } = this.state;
    // 使用Antd的Text标签编写文字
    const { Text } = Typography;
    return (
      <div className="mine-container">
        <div className="head">
          <img alt="头像" src={Head} width={110} />
        </div>
        <div className="location">
          {/* 鼠标hover时显示Tooltip文字提示 */}
          <Tooltip title={myLocation}>
            <Icon
              type="environment"
              theme="filled"
              style={{ fontSize: '20px', zIndex: '1' }}
            />
          </Tooltip>
          <Text>Xiamen</Text>
        </div>
        <div className="personalized-signature">
          <p className="personalized-signature-p">
            这里好空啊，不如写一个个性签名吧
          </p>
          <p
            className="personalized-signature-p"
            style={{ textAlign: 'right' }}
          >
            ——————不知道写什么啊
          </p>
        </div>
        <div style={{ display: 'flex', height: '60px' }}>
          <Text className="text-container">文章：5</Text>
          <Text className="text-container">浏览量：999</Text>
        </div>
        <div className="my-link">
          {/* 鼠标hover时显示Toolitip文字提示*/}
          <Tooltip title={zhihu}>
            <Icon
              type="zhihu"
              className="icon-link"
              onClick={() => window.open('https://www.zhihu.com/')}
            />
          </Tooltip>
          <Tooltip title={github}>
            <Icon
              type="github"
              className="icon-link"
              onClick={() => window.open('https://github.com/kingslk')}
            />
          </Tooltip>
          <Tooltip title={facebook}>
            <Icon
              type="facebook"
              className="icon-link"
              onClick={() => window.open('www.facebook.com')}
            />
          </Tooltip>
        </div>
      </div>
    );
  }
}
