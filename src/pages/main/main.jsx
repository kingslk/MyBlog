import React, { Component } from 'react';
import { Button, Timeline, Popover, Icon, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import './main.css';
import MainData from './maindata';
export default class Main extends Component {
  render() {
    const { articleList } = MainData;
    return (
      <div className="main-container">
        <Timeline
          style={{ margin: '50px', lineHeight: '200px' }}
          pending={true}
        >
          {articleList.map((value, index) => {
            return (
              <Timeline.Item key={index}>
                <Popover
                  placement="right"
                  content={
                    <div style={{ width: '900px' }}>
                      <Link to="article">
                        <Tooltip title="点我查看详情" placement="rightTop">
                          <label className="article-name">
                            {value.articletitle}
                          </label>
                        </Tooltip>
                      </Link>
                      <div style={{ display: 'flex', marginTop: '10px' }}>
                        <div className="article-editing-time">
                          <Icon type="calendar" className="icon-container" />
                          <p className="time-container">{value.articledate}</p>
                        </div>
                        <div className="article-editing-time">
                          <Icon type="read" className="icon-container" />
                          <p className="time-container">
                            {value.articleclassification}
                          </p>
                        </div>
                      </div>
                      <p style={{ marginLeft: '18px', paddingTop: '20px' }}>
                        {value.articleintroduction}
                      </p>
                      <hr />
                      <Button style={{ marginLeft: '680px' }}>分享按钮</Button>
                    </div>
                  }
                  visible={true}
                  overlayStyle={{ backgroundColor: 'rgba(255,255,255,0)' }}
                >
                  <Button
                    style={{
                      marginLeft: '-68px',
                      visibility: 'hidden'
                    }}
                  >
                    Right
                  </Button>
                </Popover>
              </Timeline.Item>
            );
          })}
        </Timeline>
      </div>
    );
  }
}
