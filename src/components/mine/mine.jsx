import React, { Component } from 'react';
import './mine.css';
import { Icon, Tooltip, Typography } from 'antd';
import Head from '../../assets/head.jpg';
export default class Mine extends Component {
  constructor() {
    super();
    this.state = {
      zhihu: '知乎',
      github: 'github',
      facebook: 'facebook',
      myLocation: '福建省厦门市集美区厦门理工学院'
    };
  }
  render() {
    const { zhihu, github, facebook, myLocation } = this.state;
    const { Text } = Typography;
    return (
      <div className="mine-container">
        <div className="head">
          <img alt="头像" src={Head} width={110} />
        </div>

        <div className="location">
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
          <Text className="text-container">文章：10</Text>
          <Text className="text-container">浏览量：999</Text>
        </div>
        <div className="my-link">
          <Tooltip title={zhihu}>
            <Icon type="zhihu" className="icon-link" />
          </Tooltip>
          <Tooltip title={github}>
            <Icon type="github" className="icon-link" />
          </Tooltip>
          <Tooltip title={facebook}>
            <Icon type="facebook" className="icon-link" />
          </Tooltip>
        </div>
      </div>
    );
  }
}
