import React, { Component } from 'react';
import './mine.css';
import Head from '../../assets/head.jpg';
import { Icon, Popover, Typography, Tooltip } from 'antd';
// import Axios from 'axios';
export default class Mine extends Component {
  constructor() {
    super();
    // 设定页面需要展示的state
    this.state = {
      zhihu: '知乎',
      github: 'github',
      facebook: 'facebook'
    };
  }
  componentWillMount() {
    // 地图功能未实现
    // const { BMap } = window;
    // var map = new BMap.Map('allmap'); // 创建Map实例
    // map.centerAndZoom(new BMap.Point(116.404, 39.915), 11); // 初始化地图,设置中心点坐标和地图级别
    // var p1 = new BMap.Point(116.301934, 39.977552);
    // var p2 = new BMap.Point(116.508328, 39.919141);
    // var driving = new BMap.DrivingRoute(map, {
    //   renderOptions: { map: map, autoViewport: true }
    // });
    // driving.search(p1, p2);
  }
  render() {
    // 在页面中调用声明的state
    const { zhihu, github, facebook } = this.state;
    // 使用Antd的Text标签编写文字
    const { Text } = Typography;
    return (
      <div className="mine-container">
        <div className="head">
          <img alt="头像" src={Head} width={110} />
        </div>
        <div className="location">
          {/* 鼠标hover时显示Tooltip文字提示 */}
          <Popover
            content={<div id="allmap">福建省厦门市集美区厦门理工学院</div>}
          >
            <Icon
              type="environment"
              theme="filled"
              style={{ fontSize: '20px', zIndex: '1' }}
            />
          </Popover>
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
