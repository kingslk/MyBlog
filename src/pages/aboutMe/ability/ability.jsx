import React, { Component } from 'react';
import AbilityData from './abilitydata';
import './ability.css';
import { Progress, Statistic, Card, Row, Col, Icon } from 'antd';
export default class ability extends Component {
  render() {
    const { abilityList } = AbilityData;
    const { pStyle } = AbilityData;
    return (
      <div className="ability-container">
        <p className="ability-title">能力分析</p>
        {abilityList.map((value, index) => {
          return (
            <div key={index}>
              <p style={pStyle}>{`${value.abilityname}`}</p>
              <Progress
                strokeColor={{ from: value.from, to: value.to }}
                percent={`${value.percent}`}
                status="active"
              />
            </div>
          );
        })}
        <p className="ability-title">近期学习情况</p>
        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Row gutter={16}>
            <Col span={12}>
              <Card>
                <Statistic
                  title="React-Native"
                  value={25.25}
                  precision={2}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<Icon type="arrow-up" />}
                  suffix="%"
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card>
                <Statistic
                  title="Java"
                  value={5.6}
                  precision={2}
                  valueStyle={{ color: '#cf1322' }}
                  prefix={<Icon type="arrow-down" />}
                  suffix="%"
                />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
