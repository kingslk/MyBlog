import React, { Component } from 'react';
import { Anchor } from 'antd';
import ReBooksData from './rebooksdata';
import './rebooks.css';
import { Avatar, Tag } from 'antd';
export default class ReBooks extends Component {
  constructor() {
    super();
    this.state = {
      pageStatus: 'nochange'
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
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
  render() {
    const { booklist } = ReBooksData;
    const { Link } = Anchor;
    const { pageStatus } = this.state.pageStatus;
    return (
      <div
        className={
          pageStatus === 'change'
            ? 'rebooks-container'
            : 'rebooks-container-change'
        }
      >
        <div className="book-list">
          {booklist.map((value, index) => {
            return (
              <div
                className="book-item"
                id={`book${index}`}
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
                    <p className="book-title">{value.booktitle}</p>
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
        </div>
        <div className="re-mine-container">
          <Anchor affix={false}>
            <Link href="#book0" title="Basic demo" />
            <Link href="#book1" title="Static demo" />
            <Link href="#book2" title="API">
              <Link href="#book3" title="Anchor Props" />
              <Link href="#book4" title="Link Props" />
            </Link>
          </Anchor>
        </div>
      </div>
    );
  }
}
