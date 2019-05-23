const antintroductiondata = `# <center>MyBlog 项目说明</center>

[Ant Design](https://ant.design) **是一个致力于提升「用户」和「设计者」使用体验，提高「研发者」开发效率的企业中后台设计体系**

---

[React](https://react.docschina.org/) **声明式、组件化、一次学习，随处编写**

---

[React-router-dom](https://reacttraining.com/react-router/)**React Router 是一个基于 React 之上的强大路由库，它可以让你向应用中快速地添加视图和数据流，同时保持页面与 URL 间的同步。**

- 项目目录

\`\`\`javascript
MyBlog
├── assest
│   └── 各种图片资源
├── components
│   ├── aboutmenavigation
│   ├── articlelist
│   ├── bookintroduction
│   ├── mine
│   ├── navigation
│   ├── nestjs
│   ├── webintroduction
│   └── wheelplanting
├── pages
│   ├── aboutMe
│   │   ├──ability
│   │   ├──connection
│   │   ├──favorite
│   │   └──introduction
│   ├── antintroduction
│   ├── article
│   ├── videopage
│   ├── main
│   └── recommendation
│          ├──rebook
│          └──rewebs
├──App.css
├──App.jsx
└──index.js
\`\`\`

---

- ## 项目技术运用

  - ### Menu 导航菜单

    - ![](https://raw.githubusercontent.com/kingslk/MyBlog/master/src/assets/antd/Menu.png)

      - 通过**Menu**导航结合**React-Route-Dom**实现页面不刷新的跳转功能，从而体现 React 作为**单页应用**的特点

  - ### Carousel 走马灯

    - ![](https://raw.githubusercontent.com/kingslk/MyBlog/master/src/assets/antd/carousel.png)

      - 使用走马灯实现页面中轮播图的效果

  - ### Collapse 折叠面板、TimeLine 时间轴

    - ![](https://raw.githubusercontent.com/kingslk/MyBlog/master/src/assets/antd/Timeline.png)

      - **Collapse**与**TimeLine**结合，实现文章分类组件

  - ### Upload 上传

    - ![](https://raw.githubusercontent.com/kingslk/MyBlog/master/src/assets/antd/Upload.png)

      - 上传功能结合**本地缓存**，实现个人简历中头像上传功能

  - ### Popover 气泡卡片

    - ![](https://raw.githubusercontent.com/kingslk/MyBlog/master/src/assets/antd/Popover.png)

      - 将文章标题、概要内容、日期、分类等放入**气泡卡片**中，使页面更加美观

  - ### Tooltip 文字提示

    - ![](https://raw.githubusercontent.com/kingslk/MyBlog/master/src/assets/antd/Tooltip.png)

      - 通过**hover**事件出发文字提示，提示用户操作

  - ### Tag 标签

    - ![](https://raw.githubusercontent.com/kingslk/MyBlog/master/src/assets/antd/Tag.png)

      - 使用颜色丰富的标签展现个人爱好

  - ### Model 对话框

    - ![](https://raw.githubusercontent.com/kingslk/MyBlog/master/src/assets/antd/Modal.png)

      - 通过弹窗显示**推荐内容**的详细信息

  - ### Notification 通知提示框

    - ![](https://raw.githubusercontent.com/kingslk/MyBlog/master/src/assets/antd/Notification.png)

      - 实现用户点击导航菜单的更多按钮时，提示功能正在开发

  - ### Progress 进度条

    - ![](https://raw.githubusercontent.com/kingslk/MyBlog/master/src/assets/antd/Progress.png)

      - 用**可视化**的方式，展示自己的个人能力分布

  - ### Statistic 统计数值

    - ![](https://raw.githubusercontent.com/kingslk/MyBlog/master/src/assets/antd/Statistic.png)

      - 通过**数值统计**展示近期的学习情况
`;
export default antintroductiondata;
