import React, { Component } from 'react';
import ReactCanvasNest from 'react-canvas-nest';
import './nestjs.css';
class nestjs extends Component {
  constructor() {
    super();
    this.state = {
      follow: true
      // pageStatus: 'nochange'
    };
  }
  // componentDidMount() {
  //   window.addEventListener('scroll', this.handleScroll);
  // }
  // handleScroll = e => {
  //   let ctx = this;
  //   if (document.documentElement.scrollTop >= 100) {
  //     ctx.setState({
  //       pageStatus: 'change'
  //     });
  //   } else {
  //     ctx.setState({
  //       pageStatus: 'nochange'
  //     });
  //   }
  // };
  render() {
    const { follow } = this.state;
    return (
      <div className="nestjs-before" style={{ position: 'fixed' }}>
        <ReactCanvasNest
          className="canvasNest"
          config={{
            follow,
            lineColor: '0,0,205',
            count: 70,
            dist: 12000
          }}
        />
      </div>
    );
  }
}

export default nestjs;
