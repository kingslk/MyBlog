import React, { Component } from 'react';
import './connection.css';
export default class connection extends Component {
  constructor() {
    super();
    this.state = { arrowStatus: false, wordStatus: false, canvasStatus: false };
  }
  // 在该声明周期中调用绘制函数
  componentDidMount() {
    this.drawarrow();
  }
  componentDidUpdate() {
    this.drawman();
  }
  // 使用定时器改变state的状态
  componentWillMount() {
    setTimeout(() => {
      this.setState({ arrowStatus: !this.state.arrowStatus });
    }, 1000);
    setTimeout(() => {
      this.setState({ wordStatus: !this.state.wordStatus });
    }, 2000);
    setInterval(() => {
      this.setState({ canvasStatus: !this.state.canvasStatus });
    }, 1000);
  }

  // 绘制火柴人
  drawman() {
    const { canvasStatus } = this.state;
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    if (canvasStatus === false) {
      context.fillStyle = '#fff';
      context.fillRect(0, 0, 300, 300);

      context.beginPath();
      context.strokeStyle = '#c00';
      context.lineWidth = 3;
      context.arc(100, 50, 30, 0, Math.PI * 2, true);
      context.fill();
      context.stroke();

      context.beginPath();
      context.strokeStyle = '#c00';
      context.lineWidth = 3;
      context.arc(100, 50, 20, 0, Math.PI, false);
      context.fill();
      context.stroke();

      context.beginPath();
      context.strokeStyle = '#c00';
      context.lineWidth = 3;
      context.arc(100, 50, 20, 0, Math.PI, false);
      context.fill();
      context.stroke();

      context.beginPath();
      context.strokeStyle = '#c00';
      context.lineWidth = 3;
      context.arc(90, 45, 3, 0, Math.PI, true);
      context.fill();
      context.stroke();

      context.beginPath();
      context.strokeStyle = '#c00';
      context.lineWidth = 3;
      context.arc(110, 45, 3, 0, Math.PI, true);
      context.fill();
      context.stroke();
      context.beginPath();
      context.moveTo(100, 80);
      context.lineTo(100, 180);
      context.lineTo(75, 250);
      context.moveTo(100, 180);
      context.lineTo(125, 250);
      context.moveTo(100, 90);
      context.lineTo(75, 140);
      context.moveTo(100, 90);
      context.lineTo(125, 140);
      context.stroke();
      context.closePath();
    } else {
      context.fillStyle = '#fff';
      context.fillRect(0, 0, 300, 300);

      context.beginPath();
      context.strokeStyle = '#c00';
      context.lineWidth = 3;
      context.arc(100, 50, 30, 0, Math.PI * 2, true);
      context.fill();
      context.stroke();

      context.beginPath();
      context.strokeStyle = '#c00';
      context.lineWidth = 3;
      context.arc(100, 60, 10, 0, Math.PI * 2, false);
      context.fill();
      context.stroke();

      context.beginPath();
      context.strokeStyle = '#c00';
      context.lineWidth = 3;
      context.arc(90, 40, 3, 0, Math.PI * 2, true);
      context.fill();
      context.stroke();

      context.beginPath();
      context.strokeStyle = '#c00';
      context.lineWidth = 3;
      context.arc(110, 40, 3, 0, Math.PI * 2, true);
      context.fill();
      context.stroke();

      context.beginPath();

      context.fill();
      context.stroke();
      context.beginPath();
      context.moveTo(100, 80);
      context.lineTo(100, 180);
      context.moveTo(100, 180);
      context.lineTo(55, 230);
      context.moveTo(100, 180);
      context.lineTo(145, 230);
      context.moveTo(100, 110);
      context.lineTo(55, 70);
      context.moveTo(100, 110);
      context.lineTo(145, 70);
      context.stroke();
      context.closePath();
    }
  }
  // 绘制箭头
  drawarrow() {
    var canvas = document.getElementById('arrow');
    var context = canvas.getContext('2d');
    context.fillStyle = '#fff';
    context.fillRect(0, 0, 180, 150);

    context.beginPath();
    context.strokeStyle = '#c00';
    context.lineWidth = 6;
    context.moveTo(10, 120);
    context.lineTo(120, 40);
    context.moveTo(10, 120);
    context.lineTo(20, 60);
    context.moveTo(10, 120);
    context.lineTo(70, 125);
    context.stroke();
    context.closePath();
  }

  render() {
    const { arrowStatus, wordStatus } = this.state;
    return (
      <div style={{ width: '100%', margin: '20px auto' }}>
        <p className="introduction-title">联系我</p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '30px'
          }}
        >
          <canvas id="myCanvas" width={200} height={300} />
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              width: '300px'
            }}
          >
            <canvas
              id="arrow"
              width={180}
              height={150}
              // 监听页面状态的改变，切换css
              className={
                arrowStatus === true ? 'showarrow-after' : 'showarrow-before'
              }
            />
            <div
              // 监听页面状态的改变，切换css
              className={
                wordStatus === true ? 'showword-after' : 'showword-before'
              }
            >
              这是我
            </div>
          </div>
        </div>
      </div>
    );
  }
}
