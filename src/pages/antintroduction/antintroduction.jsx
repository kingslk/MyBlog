import React, { Component } from 'react';
import remark from 'remark';
import remark2react from 'remark-react';
import './antintroduction.css';
export default class AntIntroduction extends Component {
  constructor() {
    super();
    this.state = {
      text: '# <center style="color:red">居中</center>'
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    console.log(e.target.value);
    this.setState({ text: e.target.value });
  }
  render() {
    return (
      <div
        style={{
          zIndex: '2',
          position: 'relative',
          width: '1000px',
          margin: '10px auto',
          border: '1px solid'
        }}
      >
        <textarea value={this.state.text} onChange={this.onChange} />
        <div
          id="preview"
          style={{ zIndex: '2', margin: 'auto', width: '1000px' }}
        >
          {
            remark()
              .use(remark2react)
              .processSync(this.state.text).contents
          }
        </div>
      </div>
    );
  }
}
