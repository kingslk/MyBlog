import React, { Component } from 'react';
import { Input, Button } from 'antd';

export default class videopage extends Component {
  constructor() {
    super();
    this.state = {
      comment: '',
      comments: []
    };
  }
  onchange = e => {
    this.setState({
      comment: e.target.value
    });
  };
  onsubmit = () => {
    const { comment, comments } = this.state;
    comments.push(comment);
    console.log(this.state);
    this.setState({
      comments: comments
    });
    console.log(comments);
  };
  render() {
    return (
      <div style={{ margin: '80px auto', zIndex: 30, position: 'absolute' }}>
        <Input onChange={this.onchange} />
        <Button title="aaa" onClick={this.onsubmit} />
      </div>
    );
  }
}
