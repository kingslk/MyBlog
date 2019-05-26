import React, { Component } from 'react';
import remark from 'remark';
import remark2react from 'remark-react';
import { Breadcrumb } from 'antd';
import ArticleData from './articledata';
import './article.css';
export default class Article extends Component {
  constructor() {
    super();
    this.state = {
      articleid: null
    };
  }
  componentWillMount() {
    this.setState({
      articleid: this.props.match.params.articleid
    });
  }
  render() {
    const { articlecontents } = ArticleData;
    const { articleid } = this.state;
    const {
      history: { push }
    } = this.props;
    return (
      <div
        style={{
          minHeight: '300px',
          Width: '800px',
          margin: '80px auto',
          zIndex: 2
        }}
      >
        {articlecontents
          .filter(value => value.articleid === articleid)
          .map((value, index) => {
            return (
              <div key={value.articleid}>
                <Breadcrumb style={{ margin: '30px', fontSize: '20px' }}>
                  <Breadcrumb.Item>
                    <span style={{cursor:'pointer'}} onClick={() => push(`/`)}>Home</span>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>{value.articlename}</Breadcrumb.Item>
                </Breadcrumb>
                <h1 style={{ textAlign: 'center' }}>{value.articlename}</h1>
                <div
                  style={{ display: 'flex', justifyContent: 'space-around' }}
                >
                  <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
                    {value.articledate}
                  </p>
                  <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
                    {value.articleclassification}
                  </p>
                </div>
                <div style={{ margin: 'auto' }} key={articleid}>
                  {
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
