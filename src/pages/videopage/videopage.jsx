import React, { Component } from 'react';
import './videopage.css';
import TestVideo from '../../assets/test.mp4';
import ReactPlayer from 'react-player';
export default class videopage extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="video-container">
        <div style={{ width: '60%', zIndex: 2 }}>
          <h1 className="video-title">怒贺新春</h1>
          <div>
            <div className="video-content">3D版愤怒的小鸟</div>
            <div className="video-message">
              <span style={{ fontSize: '24px', fontWeight: 'bold' }}>
                2019.1.15
              </span>
              <span style={{ fontSize: '24px', fontWeight: 'bold' }}>3dsmax小学期作品</span>
            </div>
          </div>
          <ReactPlayer url={TestVideo} controls className="video-show" />
        </div>
      </div>
    );
  }
}
