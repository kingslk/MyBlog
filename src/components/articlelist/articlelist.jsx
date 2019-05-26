import React, { Component } from 'react';
import { Collapse, Timeline } from 'antd';
import './articlelist.css';
import ArticleListeData from './articlelistdata';
export default class ArticleList extends Component {
  render() {
    const Panel = Collapse.Panel;
    const { finalProjects, technicalArticles } = ArticleListeData;
    const { history } = this.props;
    return (
      <div
        style={{
          marginTop: '10px',
          marginLeft: '12px'
        }}
      >
        <Collapse bordered={false} defaultActiveKey={['1']}>
          <Panel header="期末项目" key="1">
            <div className="articlelist">
              <Timeline>
                {finalProjects.map((value, index) => {
                  return (
                    <Timeline.Item key={index}>
                      <span
                        className="span-a"
                        onClick={() =>
                          history.push(`/home/article/${value.articleid}`)
                        }
                      >
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                          }}
                        >
                          <div>{value.finalprojectname}</div>
                          <div>{value.finalprojectdate}</div>
                        </div>
                      </span>
                    </Timeline.Item>
                  );
                })}
              </Timeline>
            </div>
          </Panel>
          <Panel header="技术文章" key="2">
            <div className="articlelist">
              <Timeline>
                {technicalArticles.map((value, index) => {
                  return (
                    <Timeline.Item key={index}>
                      <span
                        className="span-a"
                        onClick={() =>
                          history.push(`/home/article/${value.articleid}`)
                        }
                      >
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                          }}
                        >
                          <div>{value.technicalArticlesName}</div>
                          <div>{value.technicalArticlesdate}</div>
                        </div>
                      </span>
                    </Timeline.Item>
                  );
                })}
              </Timeline>
            </div>
          </Panel>
        </Collapse>
      </div>
    );
  }
}
