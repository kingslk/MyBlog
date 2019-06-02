import React, { Component } from 'react';
import './rebooks.css';
import ReBooksData from './rebooksdata';
import Code from '../../../assets/code.jpg';
import Pen from '../../../assets/pen.png';
import Mail from '../../../assets/mail.png';
import Welfare from '../../../assets/welfare.png';
import ReBooksModel from '../../../components/rebooksmodel/rebooksmodel';
import { Link } from 'react-router-dom';
import { Avatar, Tag, message } from 'antd';
export default class ReBooks extends Component {
  constructor() {
    super();
    this.state = {
      pageStatus: 'nochange',
      visible: false,
      id: 1
    };
  }
  // 设置监听器监听页面滚动事件
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  // 设置监听函数，通过监听页面高度的变化，改变state的状态
  handleScroll = e => {
    let ctx = this;
    if (document.documentElement.scrollTop >= 100) {
      ctx.setState({
        pageStatus: 'change'
      });
    } else {
      ctx.setState({
        pageStatus: 'nochange'
      });
    }
  };
  // 弹出全局提示的函数
  error = () => {
    message.error('功能还未开发');
  };
  // 打开模态窗的函数
  showModal = index => {
    this.setState({
      visible: !this.state.visible,
      id: `${index + 1}`
    });
    // console.log(this.state.id);
  };
  // 关闭模态窗的函数
  handleCancel = () => {
    this.setState({
      visible: !this.state.visible
    });
  };
  render() {
    const { booklist } = ReBooksData;
    const { pageStatus, id } = this.state;
    return (
      <div className="rebooks-container">
        <div className="book-list">
          {/* 通过map进行遍历，渲染推荐的小册 */}
          {booklist.map((value, index) => {
            return (
              <div
                className="book-item"
                id={`book${index}`}
                key={`book${index}`}
              >
                <img
                  className="book-img"
                  width={120}
                  src={`${value.bookimg}`}
                  alt=""
                />
                <div className="book-imfomation">
                  <div className="book-title-container">
                    <Tag color="#f50">预售</Tag>
                    {/* 打开模态窗，并传递index告诉组件打开的是哪个模态窗 */}
                    <Link onClick={() => this.showModal(index)}>
                      <p className="book-title">{value.booktitle}</p>
                    </Link>
                  </div>
                  <p className="book-introduction">{value.bookintroduction}</p>
                  <div className="book-author-container">
                    <Avatar
                      style={{
                        backgroundColor: '#7265e6',
                        verticalAlign: 'middle'
                      }}
                      size="large"
                    >
                      U
                    </Avatar>
                    <p className="book-author">{value.bookauthor}</p>
                    <p className="book-author-introduction">
                      {value.bookauthorintroduction}
                    </p>
                  </div>
                  <div className="book-content-container">
                    <p className="book-price">{value.bookprice}</p>
                    <p className="book-buyer">{value.bookbuyer}</p>
                  </div>
                </div>
              </div>
            );
          })}
          <div>
            {/* 渲染模态窗组件，传递模态窗打开状态visible、模态窗关闭函数handleCancel及书本id */}
            <ReBooksModel
              visible={this.state.visible}
              id={id}
              onCancel={this.handleCancel}
            />
          </div>
        </div>
        <div
          className={
            pageStatus === 'nochange' ? 'some-message' : 'some-message-after'
          }
        >
          <div className="introduction-reason">
            <p className="introduction-reason-title">Blog小册推荐是什么？</p>
            <p style={{ margin: '0 20px' }}>
              一个小篇幅、高浓度、成体系、有收益的技术学习平台
            </p>
            <div className="div-line" />
            <p>关注公众号领取优惠码</p>
            <img src={Code} alt="二维码" style={{ marginBottom: '10px' }} />
          </div>
          <div className="rebooks-message-container">
            <Link
              onClick={this.error}
              style={{ borderRight: '1px solid' }}
              className="do-somethings"
            >
              <img src={Pen} width={70} alt="笔" />
              <p>成为作者</p>
            </Link>

            <Link onClick={this.error} className="do-somethings">
              <img src={Mail} width={70} alt="信封" />
              <p>建议反馈</p>
            </Link>
          </div>
          <img src={Welfare} alt="奖品" style={{ marginTop: '10px' }} />
        </div>
      </div>
    );
  }
}
