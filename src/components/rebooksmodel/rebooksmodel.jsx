import React, { Component } from 'react';
import './rebookmodel.css';
import {
  Modal,
  Tag,
  Avatar,
  Button,
  Tabs,
  Spin,
  Icon,
  Empty,
  Input,
  Tooltip,
  message,
  Divider
} from 'antd';
import ReBooksData from '../../pages/recommendation/rebooks/rebooksdata';
import RebboksModelData from './rebooksmodeldata';
// 使用Antd的Tabs标签页前的必要声明
const TabPane = Tabs.TabPane;
export default class ReBooksModel extends Component {
  constructor() {
    super();
    this.state = {
      comment: '',
      comments: []
    };
  }
  componentWillMount() {
    if (localStorage.getItem(`comments${this.props.id}`) !== null) {
      console.log(JSON.parse(localStorage.getItem(`comments${this.props.id}`)));
      this.setState({
        comments: JSON.parse(localStorage.getItem(`comments${this.props.id}`))
      });
    }
  }
  // 由于componentWillMount只会执行一次，所以当传递的props发生变化时需要使用改方法再次加载数据
  componentWillReceiveProps(nextProps) {
    this.setState({
      comments:
        JSON.parse(localStorage.getItem(`comments${nextProps.id}`)) || []
    });
  }
  handleOk = e => {
    console.log(e);
  };
  // 接收上一个页面传递的关闭Model的方法
  handleCancel = e => {
    this.props.onCancel();
    console.log(`book${this.props.id}`);
    this.setState({
      comments: []
    });
  };
  onchange = e => {
    this.setState({
      comment: e.target.value
    });
  };
  onsubmit = () => {
    const { comment, comments } = this.state;
    console.log(this.state);
    comments.push(comment);
    if (comment !== '') {
      this.setState({
        comments: comments,
        comment: ''
      });
      localStorage.setItem(
        `comments${this.props.id}`,
        JSON.stringify(comments)
      );
    } else {
      message.error('你还未输入评论');
    }
  };
  render() {
    const { booklist } = ReBooksData;
    const { bookintroductions } = RebboksModelData;
    const { comments } = this.state;
    return (
      <div>
        <Modal
          visible={this.props.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
          width={800}
        >
          <div className="modal-book-container">
            {/* 通过map遍历假数据，当假数据中的id与上一个页面传递过来的id相同时，展示数据 */}
            {booklist
              .filter(value => value.id === `book${this.props.id}`)
              .map((value, index) => {
                return (
                  <div className="model-book-imfomation" key={index}>
                    <img
                      src={value.bookimg}
                      width={120}
                      alt="书名"
                      kye={index}
                    />
                    <div style={{ marginLeft: '20px', marginBottom: '2px' }}>
                      <div className="model-book-title-container">
                        <Tag color="#f50">预售</Tag>
                        <p className="modal-book-title">{value.booktitle}</p>
                      </div>
                      <p className="modal-book-introduction">
                        {value.bookintroduction}
                      </p>
                      <div className="model-book-author-container">
                        {/* 使用Antd的Avatar头像组件 */}
                        <Avatar
                          style={{
                            backgroundColor: '#7265e6',
                            verticalAlign: 'middle'
                          }}
                        >
                          U
                        </Avatar>
                        <p className="book-author">{value.bookauthor}</p>
                        <p className="book-author-introduction">
                          {value.bookauthorintroduction}
                        </p>
                      </div>
                      <div className="modal-button-container">
                        <Button type="primary" size="large" block={true}>
                          {`购买${value.bookprice}`}
                        </Button>
                        <Button type="dashed" size="large" block={true}>
                          试读
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            <div>
              <Tabs defaultActiveKey="1">
                {/* TabPane为标签页的分栏 */}
                <TabPane tab="目录" key="1">
                  <p style={{ fontSize: '20px', marginLeft: '10px' }}>
                    书籍目录
                  </p>
                  <div
                    style={{
                      width: '99%',
                      height: '1px',
                      border: '1px solid',
                      margin: '20px 0'
                    }}
                  />
                  <div>
                    {/* 通过filter处理假数据中的数组，id与上一个页面传递过来的id相同，再进行map遍历 */}
                    {bookintroductions
                      .filter(value => value.id === `book${this.props.id}`)
                      .map((value, index) => {
                        return (
                          <div key={index}>
                            {value.bookcatalogues.map((item, itemIndex) => (
                              <div className="book-catalogue" key={itemIndex}>
                                <div
                                  style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                  }}
                                >
                                  <div className="catalogue-num">{`${itemIndex +
                                    1}`}</div>
                                  <div className="catalogue-line" />
                                </div>
                                <div
                                  style={{
                                    marginLeft: '20px',
                                    marginTop: '6px'
                                  }}
                                >
                                  <p className="catalogue-title">
                                    {item.catalogues}
                                  </p>
                                  <div className="catalogue-message">
                                    <p>{`时长：${item.readertime}`}</p>
                                    <p>{`${item.learntime}次阅读`}</p>
                                    <p>0条评论</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        );
                      })}
                    <div style={{ marginLeft: '18px', marginTop: '10px' }}>
                      {/* 时间轴下方的旋转图标 */}
                      <Spin
                        indicator={
                          <Icon type="loading" style={{ fontSize: 24 }} spin />
                        }
                      />
                      <p>查看更多请购买</p>
                    </div>
                  </div>
                </TabPane>
                <TabPane tab="介绍" key="2">
                  <div>
                    <div>
                      <p style={{ fontSize: '20px', marginLeft: '10px' }}>
                        小册介绍
                      </p>
                      <div
                        style={{
                          width: '99%',
                          height: '1px',
                          border: '1px solid',
                          margin: '20px 0'
                        }}
                      />
                      {/* 通过filter处理假数据中的数组，id与上一个页面传递过来的id相同，再进行map遍历 */}
                      {bookintroductions
                        .filter(value => value.id === `book${this.props.id}`)
                        .map((value, index) => {
                          return <p key={index}>{value.bookintroduction}</p>;
                        })}
                    </div>
                  </div>
                </TabPane>
                <TabPane tab="评论" key="3">
                  {/* 使用Antd的Empty空状态标签，当没有评论时进行显示 */}
                  {comments.length !== 0 ? (
                    comments.map((value, index) => {
                      return (
                        <div>
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              margin: '5px 20px'
                            }}
                          >
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'space-around',
                                alignItems: 'center',
                                width: '20%'
                              }}
                            >
                              <Avatar
                                style={{
                                  backgroundColor: '#7265e6',
                                  verticalAlign: 'middle'
                                }}
                              >
                                U
                              </Avatar>
                              <div
                                style={{ fontSize: '20px', fontWeight: 'bold' }}
                              >
                                用户U
                              </div>
                            </div>
                            <div key={index} style={{ fontSize: '18px' }}>
                              {value}
                            </div>
                          </div>
                          <Divider />
                        </div>
                      );
                    })
                  ) : (
                    <Empty description="暂无评论" />
                  )}

                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Tooltip
                      trigger={['focus']}
                      title={'请输入评论'}
                      placement="topLeft"
                      overlayClassName="numeric-input"
                    >
                      <Input
                        onChange={this.onchange}
                        placeholder="请输入你的评论"
                        maxLength={25}
                        value={this.state.comment}
                        style={{ width: '56%' }}
                      />
                    </Tooltip>

                    <Button onClick={this.onsubmit} type="primary">
                      提交
                    </Button>
                  </div>
                </TabPane>
              </Tabs>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
