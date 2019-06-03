import React, { Component } from 'react';
import ReactCanvasNest from 'react-canvas-nest';
import './nestjs.css';
class nestjs extends Component {
  constructor() {
    super();
    this.state = {
      follow: true
    };
  }
  render() {
    const { follow } = this.state;
    return (
      <div className="nestjs-before" style={{ position: 'fixed' }}>
        {/* 使用第三方库react-nestjs，实现网页背景 */}
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
