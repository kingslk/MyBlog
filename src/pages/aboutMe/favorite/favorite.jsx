import React, { Component } from 'react';
import './favorite.css';
import { Popover, Tag } from 'antd';
export default class favorite extends Component {
  constructor() {
    super();
    this.state = {
      favorites: [
        '篮球',
        '健身',
        '代码',
        '单机游戏',
        'React.js',
        '想脱贫',
        '一个苦逼程序员'
      ],
      data: null,
      pageStatus: false
    };
  }
  allowdrop = e => {
    e.preventDefault();
    console.log('aaa');
  };
  drag = () => {
    var data = this.state.favorites;
    this.setState({
      data: data
    });
  };
  drop = e => {
    e.preventDefault();
    this.setState({
      pageStatus: !this.state.pageStatus
    });
  };
  render() {
    const { pageStatus } = this.state;
    return (
      <div style={{ width: '100%', margin: '20px auto' }}>
        <h1 className="introduction-title">我的爱好</h1>
        <div draggable="true" onDragStart={this.drag}>
          <Popover content={'拖拽有惊喜'} placement="top">
            <p className="favorite-introduction">
              Anything exists in this world. In addition to expect learning.
              <br />
              The real world that interests me,because it is plastic.
            </p>
          </Popover>
        </div>
        <div
          className="tag-container"
          onDrop={this.drop}
          onDragOver={this.allowdrop}
        >
          <Tag
            color="magenta"
            className={pageStatus === false ? 'tag-list' : 'tag-list tag-one'}
          >
            篮球
          </Tag>
          <Tag
            color="red"
            className={pageStatus === false ? 'tag-list' : 'tag-list tag-two'}
          >
            健身
          </Tag>
          <Tag
            color="volcano"
            className={pageStatus === false ? 'tag-list' : 'tag-list tag-three'}
          >
            代码
          </Tag>
          <Tag
            color="orange"
            className={pageStatus === false ? 'tag-list' : 'tag-list tag-four'}
          >
            单机游戏
          </Tag>
          <Tag
            color="gold"
            className={pageStatus === false ? 'tag-list' : 'tag-list tag-five'}
          >
            React.js
          </Tag>
          <Tag
            color="green"
            className={pageStatus === false ? 'tag-list' : 'tag-list tag-six'}
          >
            想脱贫
          </Tag>
          <Tag
            color="lime"
            className={pageStatus === false ? 'tag-list' : 'tag-list tag-seven'}
          >
            一个苦逼程序员
          </Tag>
        </div>
      </div>
    );
  }
}
