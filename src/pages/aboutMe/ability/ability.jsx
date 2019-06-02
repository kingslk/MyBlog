import React, { Component } from 'react';
import './ability.css';
import AbilityData from './abilitydata';
import { Progress, Statistic, Card, Row, Col, Icon } from 'antd';
export default class ability extends Component {
  render() {
    const { abilityList } = AbilityData;
    const { pStyle } = AbilityData;
    return (
      <div className="ability-container">
        <p className="ability-title">能力分析</p>
        {/* 通过map遍历假数据并使用Progress进度条显示能力分析 */}
        {abilityList.map((value, index) => {
          return (
            <div key={index} className="progress-container">
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
        <div className="statistic-container">
          <Row gutter={16}>
            <Col span={12}>
              <Card>
                {/* 通过Statistic统计数值显示近期学期情况 */}
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
