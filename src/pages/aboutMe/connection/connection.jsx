import React, { Component } from 'react';

export default class connection extends Component {
  // componentWillMount() {
  //   this.draw('canvas');
  // }
  draw(id) {
    var canvas = document.getElementById(id);
    var context = canvas.getContext('2d');
    context.fillStyle = 'yellow';
    context.fillRect(0, 0, 75, 75);
    context.fillStyle = 'green';
    context.fillRect(75, 0, 75, 75);
    context.fillStyle = 'blue';
    context.fillRect(0, 75, 75, 75);
    context.fillStyle = 'red';
    context.fillRect(75, 75, 75, 75);
    context.fillStyle = 'white';
    for (var i = 1; i <= 6; i++) {
      context.beginPath();
      context.globalAlpha = context.globalAlpha - 0.1;
      context.arc(75, 75, 2 * i * 6, 0, Math.PI * 2, true);
      context.fill();
    }
  }
  render() {
    return (
      <div style={{ width: '100%', margin: '20px auto' }}>
        <p className="introduction-title">联系我</p>
        <canvas id="canvas" />
      </div>
    );
  }
}
