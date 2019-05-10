import React, { Component } from 'react';
import remark from 'remark';
import remark2react from 'remark-react';
import './antintroduction.css';
export default class AntIntroduction extends Component {
  constructor() {
    super();
    this.state = {
      text: '  ``````'
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({ text: e.target.value });
  }
  render() {
    return (
      <div
        style={{
          zIndex: '2',
          position: 'relative',
          width: '1000px',
          margin: 'auto'
        }}
      >
        <textarea value={this.state.text} onChange={this.onChange} />
        <div id="preview" style={{ zIndex: '2', margin: 'auto' }}>
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
