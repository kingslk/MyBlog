import React, { Component } from 'react';
import './wheelplanting.css';
import One from '../../assets/one.png';
import Two from '../../assets/two.png';
import Three from '../../assets/three.png';
import Four from '../../assets/four.png';
import Side1 from '../../assets/biankuang1.png';
import Side2 from '../../assets/biankuang2.png';
import { Carousel } from 'antd';
export default class wheelplanting extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          position: 'relative',
          width: '100%'
        }}
      >
        <img src={Side1} className="side1" alt="" />
        <div style={{ margin: '0 -126px', width: '84%' }}>
          {/* 使用Antd的Carousel走马灯组件，实现页面中的轮播图效果 */}
          <Carousel autoplay className="ant-carousel">
            <div>
              <img src={One} alt="" className="carousel-img" />
            </div>
            <div>
              <img src={Two} alt="" className="carousel-img" />
            </div>
            <div>
              <img src={Three} alt="" className="carousel-img" />
            </div>
            <div>
              <img src={Four} alt="" className="carousel-img" />
            </div>
          </Carousel>
        </div>
        <img src={Side2} className="side2" alt="" />
        <div className="my-blog">MyBlog</div>
      </div>
    );
  }
}
