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
      <div className="antintroduction-container">
        <BackTop>
          <div className="ant-back-top-inner">UP</div>
        </BackTop>
        <div>
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
