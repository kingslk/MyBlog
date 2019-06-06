import React, { Component } from 'react';
import './mine.css';
import Head from '../../assets/head.jpg';
import { Icon, Popover, Typography, Tooltip, Modal, Spin } from 'antd';
import { Map, Marker, NavigationControl, InfoWindow } from 'react-bmap';

export default class Mine extends Component {
  constructor() {
    super();
    // 设定页面需要展示的state
    this.state = {
      visible: false,
      zhihu: '知乎',
      github: 'github',
      facebook: 'facebook',
      pageStatus: false
    };
  }
  componentWillMount() {
    // 调用百度地图api获取定位
    var BMap = window.BMap;
    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(
      function(r) {
        console.log(r.point);
        window.lat = r.point.lat;
        window.lng = r.point.lng;
      },
      { enableHighAccuracy: true }
    );
  }
  componentDidMount() {
    this.timerID = setInterval(() => {
      console.log(window.lat);
      if (window.lat !== undefined) {
        this.setState({
          pageStatus: !this.state.pageStatus
        });
        clearInterval(this.timerID);
      }
    }, 2000);
  }
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };
  render() {
    // 在页面中调用声明的state
    const { zhihu, github, facebook, pageStatus } = this.state;
    // 使用Antd的Text标签编写文字
    const { Text } = Typography;
    return (
      <div className="mine-container">
        <div className="head">
          <img alt="头像" src={Head} width={110} />
        </div>
        <div className="location">
          {/* 鼠标hover时显示Tooltip文字提示 */}
          <Popover content={<div>点击显示您的位置</div>}>
            <Icon
              type="environment"
              theme="filled"
              style={{ fontSize: '20px', zIndex: '1' }}
              onClick={this.showModal}
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
        <Modal
          title="您当前位置"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          {pageStatus === false ? (
            <div
              style={{
                margin: 'auto',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Spin tip="位置正在加载中……" />
            </div>
          ) : (
            <Map center={{ lng: window.lng, lat: window.lat }} zoom="12">
              <Marker position={{ lng: window.lng, lat: window.lat }} />
              <NavigationControl />
              <InfoWindow
                position={{ lng: window.lng, lat: window.lat }}
                text={` lng: ${window.lng}, lat: ${window.lat}`}
                title="当前位置经纬度"
              />
            </Map>
          )}
        </Modal>
      </div>
    );
  }
}
