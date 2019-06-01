import React, { Component } from 'react';
import './videopage.css';
import TestVideo from '../../assets/lotus.mp4';
import ReactPlayer from 'react-player';
export default class videopage extends Component {
  constructor() {
    super();
    this.state = {
      titleStatus: false,
      contentStatus: false,
      messageStatus: false
    };
  }
  componentWillMount() {
    setTimeout(() => {
      this.setState({ titleStatus: !this.state.titleStatus });
    }, 1000);
    setTimeout(
      () => this.setState({ contentStatus: !this.state.contentStatus }),
      1500
    );
    setTimeout(
      () => this.setState({ messageStatus: !this.state.messageStatus }),
      2000
    );
  }

  render() {
    const { titleStatus, contentStatus, messageStatus } = this.state;
    console.log(titleStatus);
    return (
      <div className="video-container">
        <div style={{ width: '60%', zIndex: 2 }}>
          <h1 className={titleStatus === false ? 'video-title' : 'show-title'}>
            ddd
          </h1>
          <div>
            <div
              className={
                contentStatus === false ? 'video-content' : 'show-content'
              }
            >
              ddddddddddddddddddddddddd
            </div>
            <div
              className={
                messageStatus === false ? 'video-message' : 'show-message'
              }
            >
              <span>2019.1.15</span>
              <span>3dsmax小学期作品</span>
            </div>
          </div>
          {/* <ReactPlayer url={(src = '../../assets/lotus.mp4')} controls /> */}
          {/* <ReactPlayer url={require('../../assets/lotus.mp4')} /> */}
          <video src={TestVideo} />
        </div>
      </div>
    );
  }
}
