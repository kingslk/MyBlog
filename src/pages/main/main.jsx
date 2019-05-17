import React, { Component } from 'react';
import { Button, Timeline, Popover, Icon, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import './main.css';
import MainData from './maindata';
import WeiXin from '../../assets/share/weixin.png';
import QQ from '../../assets/share/qq.png';
import WeiBo from '../../assets/share/weibo.png';
export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      showWeiXin: false,
      showQQ: false,
      showWeibo: false
    };
  }
  showShare = () => {
    console.log(this.state.show);
    this.setState({
      show: !this.state.show
    });
  };
  render() {
    const { articleList } = MainData;
    const { showWeiXin } = this.state;
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
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          width: '400px',
                          marginLeft: '400px'
                        }}
                      >
                        <img
                          src={WeiXin}
                          width={30}
                          className={
                            showWeiXin === false
                              ? 'share-by-weixin'
                              : 'share-by-weixin-after'
                          }
                        />
                        <img src={QQ} width={30} />
                        <img src={WeiBo} width={30} />
                        <Button type="dashed" onClick={this.showShare}>
                          分享按钮
                        </Button>
                      </div>
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
