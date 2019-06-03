import React, { Component } from 'react';
import './mine.css';
import Head from '../../assets/head.jpg';
import { Icon, Tooltip, Typography } from 'antd';
// import Axios from 'axios';
export default class Mine extends Component {
  constructor() {
    super();
    // 设定页面需要展示的state
    this.state = {
      zhihu: '知乎',
      github: 'github',
      facebook: 'facebook',
      myLocation: null
    };
  }
  componentWillMount() {
    var BMap = window.BMap; //取出window中的BMap对象
    var myCity = new BMap.LocalCity();
    // let WeatherLists = {};
    myCity.get(result => {
      console.log(result); //城市名称
      this.setState({
        myLocation: result.name
      });
      // if (result.name) {
      //   /*通过当前位置城市信息获取天气*/
      //   Axios(
      //     {
      //       url:
      //         'https://free-api.heweather.com/v5/weather?key=19713447578c4afe8c12a351d46ea922'
      //     },
      //     { params: { city: '厦门' } }
      //   )
      //     .then(res => {
      //       console.log(res);
      //       WeatherLists = res.data.HeWeather5[0];
      //       console.log(WeatherLists);
      //     })
      //     .catch(err => {
      //       console.log(err);
      //     });
      // }
    });
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
