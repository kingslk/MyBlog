import React, { Component } from 'react';
import './article.css';
import ArticleData from './articledata';
// 导入解析MarkDown的第三方库
import remark from 'remark';
import remark2react from 'remark-react';
import { Breadcrumb, BackTop } from 'antd';
export default class Article extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { articlecontents } = ArticleData;
    const { articleid } = this.props.match.params;
    const {
      history: { push }
    } = this.props;
    return (
      <div
        style={{
          minHeight: '300px',
          width: '60%',
          margin: '80px auto',
          zIndex: 2
        }}
      >
        {/* filter处理数据，当主页传递的articleid与假数据中的articleid相同时进行map遍历，渲染数据 */}
        {articlecontents
          .filter(value => value.articleid === articleid)
          .map((value, index) => {
            return (
              <div key={value.articleid}>
                {/* 通过Antd的Breadcrumb面包屑显示用户当前位置 */}
                <Breadcrumb style={{ margin: '30px', fontSize: '20px' }}>
                  <Breadcrumb.Item>
                    <span
                      style={{ cursor: 'pointer' }}
                      onClick={() => push(`/`)}
                    >
                      Home
                    </span>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>{value.articlename}</Breadcrumb.Item>
                </Breadcrumb>
                <h1 className="article-title-show">
                  <BackTop>
                    <div className="ant-back-top-inner">UP</div>
                  </BackTop>
                  {value.articlename}
                </h1>
                <div className="article-message-show">
                  <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
                    {value.articledate}
                  </p>
                  <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
                    {value.articleclassification}
                  </p>
                </div>
                <div className="show-article" key={articleid}>
                  {
                    // 对MarkDown语法的解析
                    remark()
                      .use(remark2react)
                      .processSync(value.articlecontent).contents
                  }
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}
