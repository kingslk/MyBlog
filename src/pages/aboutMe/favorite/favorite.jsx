import React, { Component } from 'react';
import './favorite.css';
import { Popover } from 'antd';
export default class favorite extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: '20px auto' }}>
        <h1 className="introduction-title">我的爱好</h1>
        <Popover content={'拖拽有惊喜'} placement="bottom">
          <p className="favorite-introduction">
            Anything exists in this world. In addition to expect learning.
            <br />
            The real world that interests me,because it is plastic.
          </p>
        </Popover>
      </div>
    );
  }
}
