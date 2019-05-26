import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Main from './main';
import Article from '../article/article';
import Mine from '../../components/mine/mine';
import ArticleList from '../../components/articlelist/articlelist';
export default class MainIndex extends Component {
  render() {
    const {
      match: { url }
    } = this.props;
    const { history } = this.props;
    return (
      <div style={{ display: 'flex' }}>
        <Switch>
          <Route path={`${url}/main`} component={Main} />
          <Route path={`${url}/article/:articleid`} component={Article} />
          <Redirect from={`/`} to={`${url}/main`} />
        </Switch>
        <div style={{ display: 'flex', flexDirection: 'column', width: '31%' }}>
          <Mine />
          <ArticleList history={history} />
        </div>
      </div>
    );
  }
}
