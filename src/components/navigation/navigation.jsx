import React, { Component } from 'react';
import './navigation.css';
import { Link, withRouter } from 'react-router-dom';
import { Menu, notification } from 'antd';
// 直接使用Antd的导航栏组件
const SubMenu = Menu.SubMenu;
class navigation extends Component {
  constructor() {
    super();
    this.state = {
      current: 'main',
      pageStatus: 'nochange'
    };
  }
  // 设置监听器监听页面滚动事件
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  // 改变导航栏状态
  handleClick = e => {
    this.setState({
      current: e.key
    });
  };
  // 设置监听函数，通过监听页面高度的变化，改变state的状态
  handleScroll = e => {
    let ctx = this;
    if (document.documentElement.scrollTop >= 80) {
      ctx.setState({
        pageStatus: 'change'
      });
    } else {
      ctx.setState({
        pageStatus: 'nochange'
      });
    }
  };
  openNotificationWithIcon = type => {
    notification[type]({
      message: '警告',
      description: '更多功能敬请期待'
    });
  };
  render() {
    const { pageStatus } = this.state;
    // 使用Antd的Notification通知提示框显示页面的全局警告信息
    return (
      <div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
          // 通过三目运算符判断经过监听器改变的state，实现组件class的替换
          className={
            pageStatus === 'nochange'
              ? 'ant-menu-horizontal'
              : 'ant-menu-horizontal-after'
          }
        >
          <Menu.Item key="main">
            <Link to="/home">首页</Link>
          </Menu.Item>

          <SubMenu title={<span className="recommendation">相关推荐</span>}>
            <Menu.Item key="re-webs">
              <Link to="/rewebs">网站推荐</Link>
            </Menu.Item>
            <Menu.Item key="re-books">
              <Link to="/rebooks">书籍推荐</Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="antintroduction">
            <Link to="/antintroduction">项目简介</Link>
          </Menu.Item>
          <Menu.Item key="about-me">
            <Link to="/aboutMe">关于我</Link>
          </Menu.Item>
          <Menu.Item
            key="more"
            // 打开通知提醒框
            onClick={() => this.openNotificationWithIcon('info')}
          >
            更多
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
// 暴露为withRouter的组件才能进行路由跳转并包含history对象，方便对组件内部的操作
export default withRouter(navigation);
