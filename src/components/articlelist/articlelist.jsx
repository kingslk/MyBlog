import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Timeline } from 'antd';
import './articlelist.css';
import ArticleListeData from './articlelistdata';
export default class ArticleList extends Component {
  render() {
    const Panel = Collapse.Panel;
    const { finalProjects, primarySchool } = ArticleListeData;
    return (
      <div style={{ marginTop: '10px', marginLeft: '12px' }}>
        <Collapse bordered={false} defaultActiveKey={['1']}>
          <Panel header="期末项目" key="1">
            <div className="articlelist">
              <Timeline>
                {finalProjects.map((value, index) => {
                  return (
                    <Timeline.Item key={index}>
                      <Link to="article" style={{ color: 'red' }}>
                        {`${value.finalprojectname}${value.finalprojectdate}`}
                      </Link>
                    </Timeline.Item>
                  );
                })}
              </Timeline>
            </div>
          </Panel>
          <Panel header="小学期作品" key="2">
            <div className="articlelist">
              <Timeline>
                {primarySchool.map((value, index) => {
                  return (
                    <Timeline.Item key={index}>
                      <Link to="article" style={{ color: 'red' }}>
                        {`${value.primaryschoolname}${value.primaryschooldate}`}
                      </Link>
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
