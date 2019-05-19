import React, { Component } from 'react';
import { Upload, Icon, message, Tooltip } from 'antd';
import FirstHead from '../../../assets/books/book1.jpg';
import './introduction.css';

export default class introduction extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      imageUrl: FirstHead
    };
  }
  getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
      message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
  }
  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl: imageUrl,
          loading: false
        })
      );
    }
  };
  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const imageUrl = this.state.imageUrl;
    return (
      <div style={{ margin: '30px auto', position: 'relative' }}>
        <h1 className="introduction-title">个人简历</h1>

        <table border="1px" style={{ width: '700px', minHeight: '500px' }}>
          <tbody>
            <tr>
              <td style={{ width: '10%' }}>姓名</td>
              <td style={{ width: '15%' }}>王海涛</td>
              <td style={{ width: '10%' }}>出生日期</td>
              <td style={{ width: '15%' }}>1998.07</td>
              <td style={{ width: '10%' }}>性别</td>
              <td style={{ width: '10%' }}>男</td>
              <td rowSpan="4" style={{ width: '30%' }}>
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  beforeUpload={this.beforeUpload}
                  onChange={this.handleChange}
                >
                  {imageUrl ? (
                    <Tooltip title="点击切换头像">
                      <img
                        src={imageUrl}
                        alt="avatar"
                        style={{ width: '100%' }}
                      />
                    </Tooltip>
                  ) : (
                    uploadButton
                  )}
                </Upload>
              </td>
            </tr>
            <tr>
              <td>学历</td>
              <td>本科</td>
              <td>专业</td>
              <td>软件工程</td>
              <td>名族</td>
              <td>汉</td>
            </tr>
            <tr>
              <td>学校</td>
              <td>厦门理工学院</td>
              <td>政治面貌</td>
              <td>平民</td>
              <td>联系方式</td>
              <td>123456789</td>
            </tr>
            <tr>
              <td>籍贯</td>
              <td>福建</td>
              <td>邮箱</td>
              <td>1031344682@qq.com</td>
              <td colSpan="2" style={{ border: '0px' }} />
            </tr>
            <tr>
              <td>主修课程</td>
              <td colSpan="6">
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'start',
                    margin: '0 200px'
                  }}
                >
                  <div>交互设计与实践</div>
                  <div>移动应用开发与实践</div>
                  <div>游戏引擎设计与应用</div>
                  <div>虚拟空间设计</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>技能证书</td>
              <td colSpan="6">
                <ul>
                  <li>CET4</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>项目经历</td>
              <td colSpan="6">
                <ul>
                  <li>JSP个人博客</li>
                  <li>Python数据分析</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
