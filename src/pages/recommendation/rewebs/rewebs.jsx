import React, { Component } from 'react';
import './rewebs.css';
import ReWebsData from './rewebsdata';
export default class ReWebs extends Component {
  render() {
    const { weblist } = ReWebsData;
    return (
      <div className="rewebs-container">
        <p
          style={{
            fontSize: '36px',
            fontWeight: 'bold',
            margin: '30px 0',
            marginLeft: '20px',
            textShadow: '8px 3px 10px #00000054'
          }}
        >
          全部推荐
        </p>
        <div
          style={{
            width: '99%',
            height: '1px',
            border: '1px solid',
            margin: '20px'
          }}
        />
        <div className="allrewebs-container">
          {weblist.map((value, index) => {
            return (
              <div className="rewebs-item" key={index}>
                <img
                  src={value.webImage}
                  alt="w3c"
                  width={120}
                  height={120}
                  className="web-image"
                />
                <div className="web-name-introduction">
                  <a
                    href={`${value.webLinkTo}`}
                    target="_Blank"
                    rel="noopener noreferrer"
                    className="web-name"
                  >
                    {value.webName}
                  </a>
                  <p className="web-introduction">
                    &emsp;{value.webIntroduction}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <p
          style={{
            fontSize: '36px',
            fontWeight: 'bold',
            margin: '30px 0',
            marginLeft: '20px',
            textShadow: '8px 3px 10px #00000054'
          }}
        >
          常用网页
        </p>
        <div
          style={{
            width: '99%',
            height: '1px',
            border: '1px solid',
            margin: '20px'
          }}
        />
        <div className="allrewebs-container">
          {weblist.map((value, index) => {
            if (value.useful === true) {
              return (
                <div className="rewebs-item" key={index}>
                  <img
                    src={value.webImage}
                    alt="w3c"
                    width={120}
                    height={120}
                    className="web-image"
                  />
                  <div className="web-name-introduction">
                    <a
                      href={`${value.webLinkTo}`}
                      target="_Blank"
                      rel="noopener noreferrer"
                      className="web-name"
                    >
                      {value.webName}
                    </a>
                    <p className="web-introduction">
                      &emsp;{value.webIntroduction}
                    </p>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  }
}
