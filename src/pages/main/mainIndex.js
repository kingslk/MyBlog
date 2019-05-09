import React, { Component } from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Main from './main';
import Article from '../article/article';
import Mine from '../../components/mine/mine';
import ArticleList from '../../components/articlelist/articlelist';
export default class MainIndex extends Component {
  render() {
    const {
      match: { url }
    } = this.props;
    return (
      <div style={{ display: 'flex' }}>
        <Switch>
          <Route path={`${url}/main`} component={Main} />
          <Route path={`${url}/article`} component={Article} />
          <Redirect from={`/`} to={`${url}/main`} />
        </Switch>
        <div style={{ display: 'flex', flexDirection: 'column', width: '31%' }}>
          <Mine />
          <ArticleList />
        </div>
      </div>
    );
  }
}
