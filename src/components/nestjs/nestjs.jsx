import React, { Component } from 'react';
import ReactCanvasNest from 'react-canvas-nest';

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
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: '300px',
          zIndex: '1'
        }}
      >
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
