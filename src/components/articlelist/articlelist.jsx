import React, { Component } from 'react';
import './articlelist.css';
import ArticleListeData from './articlelistdata';
import { Collapse, Timeline } from 'antd';
import { Link } from 'react-router-dom';
export default class ArticleList extends Component {
  render() {
    // 引用Antd卷展栏时必须声明后再使用
    const Panel = Collapse.Panel;
    // 获取假数据内的信息
    const { finalProjects, technicalArticles } = ArticleListeData;
    // 接收mainIndex.js传递过来的history对象
    const { history } = this.props;
    return (
      <div
        className='articlelist-container'
      >
        <Collapse bordered={false} defaultActiveKey={['1']}>
          <Panel header="期末项目" key="1">
            <div className="articlelist">
              {/* 通过map遍历假数据完成时间轴内的内容展示 */}
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
              {/* 通过map遍历假数据完成时间轴内的内容展示 */}
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

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            zIndex: 2,
            position: 'relative',
            minHeight: '100px'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'flex-end'
            }}
          >
            <div
              style={{ height: '1px', width: '100px', border: '1px solid' }}
            />
            <div
              style={{ height: '1px', width: '80px', border: '1px solid' }}
            />
            <div
              style={{ height: '1px', width: '60px', border: '1px solid' }}
            />
          </div>
          <Link to="/video" className="project">
            <div>小学期作品</div>
          </Link>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'flex-start'
            }}
          >
            <div
              style={{ height: '1px', width: '100px', border: '1px solid' }}
            />
            <div
              style={{ height: '1px', width: '80px', border: '1px solid' }}
            />
            <div
              style={{ height: '1px', width: '60px', border: '1px solid' }}
            />
          </div>
        </div>
      </div>
    );
  }
}
