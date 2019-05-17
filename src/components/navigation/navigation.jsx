import React, { Component } from 'react';
import { Menu, notification } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import './navigation.css';

const SubMenu = Menu.SubMenu;
class navigation extends Component {
  constructor() {
    super();
    this.state = {
      current: 'main',
      pageStatus: 'nochange'
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  handleClick = e => {
    this.setState({
      current: e.key
    });
  };
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
    const { pageStatus } = this.state;
    const openNotificationWithIcon = type => {
      notification[type]({
        message: '警告',
        description: '更多功能敬请期待'
      });
    };
    return (
      <div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
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
            onClick={() => openNotificationWithIcon('info')}
          >
            更多
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
export default withRouter(navigation);
