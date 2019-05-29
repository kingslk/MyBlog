import React, { Component } from 'react';
import './antintroduction.css';
import MarkDownData from './antintroductiondata';
// 导入解析MarkDown的第三方库
import remark from 'remark';
import remark2react from 'remark-react';
import { BackTop } from 'antd';
export default class AntIntroduction extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          zIndex: '2',
          position: 'relative',
          width: '1000px',
          margin: '80px auto',
          padding: '10px'
        }}
      >
        <BackTop>
          <div className="ant-back-top-inner">UP</div>
        </BackTop>
        <div
          id="preview"
          style={{ zIndex: '2', margin: 'auto', width: '1000px' }}
        >
          {
            // 对MarkDown语法的解析
            remark()
              .use(remark2react)
              .processSync(MarkDownData).contents
          }
        </div>
      </div>
    );
  }
}
