import React, { Component } from 'react';
import Main from './main';
import Article from '../article/article';
import Mine from '../../components/mine/mine';
import ArticleList from '../../components/articlelist/articlelist';
import { Route, Switch, Redirect } from 'react-router-dom';
export default class MainIndex extends Component {
  render() {
    // 第二层路由需要先获取第一层路由的url才能进行跳转
    const {
      match: { url }
    } = this.props;
    const { history } = this.props;
    return (
      <div style={{ display: 'flex' }}>
        {/* 第二层路由合辑，可在文章列表与文章详情之间进行切换 */}
        <Switch>
          <Route path={`${url}/main`} component={Main} />
          {/* 路由传参，告诉组件打开是哪一篇文章 */}
          <Route path={`${url}/article/:articleid`} component={Article} />
          <Redirect from={`/`} to={`${url}/main`} />
        </Switch>
        <div style={{ display: 'flex', flexDirection: 'column', width: '31%' }}>
          <Mine />
          {/* 路由包裹之外的组件需要手动传递路由对象才能对页面的路由进行操作 */}
          <ArticleList history={history} />
        </div>
      </div>
    );
  }
}
