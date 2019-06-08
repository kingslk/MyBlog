import React, { Component } from 'react';
import { Button, Timeline, Popover, Icon, Tooltip, message } from 'antd';
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
      showWeiXin: [false, false, false, false, false],
      showQQ: [false, false, false, false, false],
      showWeibo: [false, false, false, false, false],
      articleList: null
    };
  }
  componentWillMount() {
    const { articleList } = MainData;
    this.setState({
      articleList: articleList
    });
  }
  // 点金不同的分享按钮，分别弹出文章各自的分享，真正达到效果需要后台
  showShare = num => {
    var showWeiXin = this.state.showWeiXin;
    var showQQ = this.state.showQQ;
    var showWeibo = this.state.showWeibo;
    if (showWeiXin[num] === false) {
      showWeiXin[num] = true;
    } else {
      showWeiXin[num] = false;
    }
    if (showQQ[num] === false) {
      showQQ[num] = true;
    } else {
      showQQ[num] = false;
    }
    if (showWeibo[num] === false) {
      showWeibo[num] = true;
    } else {
      showWeibo[num] = false;
    }
    this.setState({
      showWeiXin: showWeiXin,
      showQQ: showQQ,
      showWeibo: showWeibo
    });
  };
  err = () => {
    message.error('需要后台');
  };
  render() {
    const { showWeiXin, showQQ, showWeibo, articleList } = this.state;
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
                    <div>
                      <Link to={`article/article${index + 1}`}>
                        <Tooltip title="点击查看详情" placement="rightTop">
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
                      <p style={{ marginLeft: '18px', paddingTop: '10px' }}>
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
                        <div
                          className={
                            showWeiXin[index] === false
                              ? 'share-by-weixin'
                              : 'share-by-weixin-after'
                          }
                          onClick={this.err}
                        >
                          <img src={WeiXin} width={30} alt="微信" />
                        </div>
                        <div
                          className={
                            showQQ[index] === false
                              ? 'share-by-qq'
                              : 'share-by-qq-after'
                          }
                          onClick={this.err}
                        >
                          <img src={QQ} width={30} alt="qq" />
                        </div>
                        <div
                          className={
                            showWeibo[index] === false
                              ? 'share-by-weibo'
                              : 'share-by-weibo-after'
                          }
                          onClick={this.err}
                        >
                          <img src={WeiBo} width={30} alt="weibo" />
                        </div>
                        <Button
                          type="dashed"
                          onClick={() => this.showShare(index)}
                        >
                          分享本文
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
