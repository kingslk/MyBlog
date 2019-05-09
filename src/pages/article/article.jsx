import React, { Component } from 'react';
import { Button } from 'antd';
export default class Article extends Component {
  render() {
    const {
      history: { push }
    } = this.props;
    return (
      <div
        style={{
          minHeight: '300px',
          minWidth: '1000px',
          margin: '30px auto',
          border: '1px solid'
        }}
      >
        文章详情
        <Button onClick={() => push(`main`)} type="primary">
          aaaaaa
        </Button>
      </div>
    );
  }
}
