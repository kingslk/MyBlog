import React, { Component } from 'react';
import { Modal, Tag, Avatar, Button, Tabs } from 'antd';
import Book1 from '../../assets/books/book1.jpg';
import './rebookmodel.css';
const TabPane = Tabs.TabPane;
export default class ReBooksModel extends Component {
  constructor() {
    super();
    this.state = {};
  }
  handleOk = e => {
    console.log(e);
  };

  handleCancel = e => {
    console.log('cancel');
    this.props.onCancel();
  };

  render() {
    return (
      <div>
        <Modal
          visible={true}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
          width={800}
        >
          <div className="modal-book-container">
            <div className="model-book-imfomation">
              <img src={Book1} width={120} alt="书名" />
              <div style={{ marginLeft: '20px', marginBottom: '2px' }}>
                <div className="model-book-title-container">
                  <Tag color="#f50">#f50</Tag>
                  <p className="modal-book-title">你不知道的Chrome调试技巧</p>
                </div>
                <p className="modal-book-introduction">
                  熟练掌握Chrome调试技巧，直接提升工作效率
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
                  <p className="book-author">dendoink</p>
                  <p className="book-author-introduction">
                    Tomek Sułkowski ：Angular Tricity 联合创始人/ `Angular`…
                  </p>
                </div>
                <div className="modal-button-container">
                  <Button type="primary" size="large" block={true}>
                    购买￥0.01
                  </Button>
                  <Button type="dashed" size="large" block={true}>
                    试读
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <Tabs defaultActiveKey="1">
                <TabPane tab="目录" key="1">
                  <p>书籍目录</p>
                  <div
                    style={{ width: '99%', height: '1px', border: '1px solid' }}
                  />
                  <div>
                    <div>1</div>
                  </div>
                </TabPane>
                <TabPane tab="介绍" key="2">
                  Content of Tab Pane 2
                </TabPane>
                <TabPane tab="评论" key="3">
                  Content of Tab Pane 3
                </TabPane>
              </Tabs>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
