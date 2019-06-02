import React, { Component } from 'react';
import { Tooltip, Icon, Button, Divider } from 'antd';

import { Link } from 'react-router-dom';
import Fire from '../../components/fire/fire';
import './hotarticle.css';
import HotArticleData from './hotarticledata';
export default class HotArticle extends Component {
  render() {
    const { hotarticleList } = HotArticleData;
    return (
      <div className="hotarticle-list">
        {hotarticleList.map((value, index) => {
          return (
            <div key={index}>
              <div className="hot-article">
                <div>
                  <Link to="article" key={`title${index}`}>
                    <Tooltip title="快点进来" placement="rightTop">
                      <label
                        className="hotarticle-name"
                        style={{ zIndex: '1', position: 'relative' }}
                      >
                        {value.hotarticletitle}
                      </label>
                    </Tooltip>
                  </Link>

                  <div
                    style={{
                      display: 'flex',
                      marginTop: '4px',
                      marginLeft: '36px'
                    }}
                  >
                    <div className="hotarticle-message">
                      <Icon type="calendar" className="icon-container" />
                      <p style={{ fontSize: '18px', marginTop: '-2px' }}>
                        {value.hotarticledate}
                      </p>
                    </div>
                    <div className="hotarticle-message">
                      <Icon type="read" className="icon-container" />
                      <p style={{ fontSize: '18px', marginTop: '-2px' }}>
                        {value.hotarticleclassification}
                      </p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <p style={{ marginLeft: '48px' }}>
                      {value.hotarticleintroduction}
                    </p>
                    <Button style={{ marginLeft: '680px' }}>分享按钮</Button>
                  </div>
                </div>
                <div style={{ paddingTop: '100px' }}>
                  <Fire />
                  <p className="hot-number">{value.hotarticlenumber}</p>
                </div>
              </div>
              <Divider
                style={{ margin: 'auto', padding: '0 30px' }}
                orientation={`${value.direction}`}
              >
                With Text
              </Divider>
            </div>
          );
        })}
      </div>
    );
  }
}
