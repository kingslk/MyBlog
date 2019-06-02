import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HotArticle from '../hotarticle/hotarticle';
import Article from '../article/article';
// import Mine from '../../components/mine/mine';
// import ArticleList from '../../components/articlelist/articlelist';
export default class HotArticleIndex extends Component {
  render() {
    const {
      match: { url }
    } = this.props;
    return (
      <div style={{ zIndex: '-1' }}>
        <Switch>
          <Route path={`${url}/hotarticlelist`} component={HotArticle} />
          <Route path={`${url}/article`} component={Article} />
          <Redirect from={`/`} to={`${url}/hotarticlelist`} />
        </Switch>
      </div>
    );
  }
}
