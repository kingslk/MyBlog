import React, { Component } from 'react';
import { Modal, Tag, Avatar, Button, Tabs, Spin, Icon, Empty } from 'antd';
import './rebookmodel.css';
import ReBooksData from '../../pages/recommendation/rebooks/rebooksdata';
import RebboksModelData from './rebooksmodeldata';
const TabPane = Tabs.TabPane;
export default class ReBooksModel extends Component {
  constructor() {
    super();
    this.state = { bookid: null };
  }
  componentWillMount() {
    this.setState({
      bookid: this.props.id
    });
  }
  handleOk = e => {
    console.log(e);
  };

  handleCancel = e => {
    console.log('cancel');
    this.props.onCancel();
    // console.log(object)
  };

  render() {
    const { bookid } = this.state;
    const { booklist } = ReBooksData;
    const { bookintroductions } = RebboksModelData;
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
            {booklist.map((value, index) => {
              if (value.id === bookid) {
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
                        <Tag color="#f50">#f50</Tag>
                        <p className="modal-book-title">{value.booktitle}</p>
                      </div>
                      <p className="modal-book-introduction">
                        {value.bookintroduction}
                      </p>
                      <div className="model-book-author-container">
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
              }
              return null;
            })}
            <div>
              <Tabs defaultActiveKey="1">
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
                    {bookintroductions
                      .filter(value => value.id === bookid)
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
                      {bookintroductions
                        .filter(value => value.id === bookid)
                        .map((value, index) => {
                          return <p key={index}>{value.bookintroduction}</p>;
                        })}
                    </div>
                  </div>
                </TabPane>
                <TabPane tab="评论" key="3">
                  <Empty description="暂无评论" />
                </TabPane>
              </Tabs>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
