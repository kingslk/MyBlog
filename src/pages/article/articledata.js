const articledata = {
  articlecontents: [
    {
      articleid: 'article1',
      articlename: 'Python——一个简单的可视化数据分析',
      articledate: '2018.12.17',
      articleclassification: '期末项目',
      articlecontent: `# 技术分析
- 数据来源：随机生成
- 数据总量：1000
- 运行环境：Python 3.6

---

## 引用所需要的 python 库

\`\`\`python
import csv
import time
import random
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import matplotlib as mpl
\`\`\`

---

## 解决中文乱码

\`\`\`python
mpl.rcParams['font.sans-serif'] = ['SimHei']
mpl.rcParams['axes.unicode_minus'] = False

\`\`\`

---

## 创建 csv 并数据写入 csv

- ![](https://raw.githubusercontent.com/kingslk/MyBlog/master/src/assets/python/writerow.png)

---

## 读取 csv 中的数据

- ![](https://raw.githubusercontent.com/kingslk/MyBlog/master/src/assets/python/read.png)

---

## 绘制折线图（**BrokenLine**）

- ![](https://raw.githubusercontent.com/kingslk/MyBlog/master/src/assets/python/brokenline.png)

---

## 绘制柱状图（**Columnar**）

- ![](https://raw.githubusercontent.com/kingslk/MyBlog/master/src/assets/python/columnar.png)

---

## 统计涨幅最大的两个月份写入 Text

- ![](https://raw.githubusercontent.com/kingslk/MyBlog/master/src/assets/python/text.png)

---

## 统计四个季度的营业额分布情况（**Pie**）

- ![](https://raw.githubusercontent.com/kingslk/MyBlog/master/src/assets/python/pie.png)

---

# 数据分析

- 每种商品每天的销量统计

  ![](https://raw.githubusercontent.com/kingslk/MyBlog/master/src/assets/python/showbrokenline.png)
- 每种商品每月的销售额

  ![](https://raw.githubusercontent.com/kingslk/MyBlog/master/src/assets/python/showcolumnar.png)
- 每种商品每个季度的销售额

  ![](https://raw.githubusercontent.com/kingslk/MyBlog/master/src/assets/python/showpie.png)
`
    },
    {
      articleid: 'article2',
      articlename: 'JSP——以MVC模式制作简单的个人博客',
      articledate: '2018.12.15',
      articleclassification: '期末项目',
      articlecontent: `# 开发步骤

- 设计数据库并编写实体类
- 设计需要的 servlet，并配置
- 数据库连接
- 编写界面

---

## 步骤一

- 首先我们要知道自己要做的是什么，根据要做的内容，找出对应的关系和练习，来设计数据库
  这个项目我一共用了四个实体：用户，板块，话题，回复。
  再接着就是对这些类在 java 中进行编写实体类

## 步骤二

- 接下来就是 servlet
  servlet 的配置需要 web.xml 文件，这个文件。这个文件主要是由 servlet-name，servlet-class，url-pattern 这三个组成， name 可自定义，主要用于将 url 和 java 文件连接；url 指向 jsp 界面访问的路径；class 指对应的 java 文件。

\`\`\`java
<servlet>
<servlet-name>delTopic </servlet-name>
<servlet-class>com.Servlet.delTopic </servlet-class>
</servlet>
<servlet-mapping>
<servlet-name>delTopic </servlet-name>
<url-pattern>/delTopic </url-pattern>
</servlet-mapping>
\`\`\`

- 接下来就是 servlet 的类编写。这边的类是和 servlet-class 中对应。这个类文件里面主要写的是 get 和 post 的方法。
  如果是 IDEA 可以直接生成 get 和 post 的方法，如果用的不是 IDEA 的话，可以参考下面的代码

\`\`\`java
public class Servlet extends HttpServlet {
@Override
protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

}

@Override
protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
  // 设置响应内容类型
}
}
\`\`\`

- 然后我们只要在 jsp 界面，通过请求方式访问/url-pattern 中的参数就可以完成 servlet 的连接

---

## 步骤三

- 连接数据库我用的是 JDBC，在我的项目中，我把 JDBC 的连接方法封装成一个类 Conn，这个类中写上了对数据库进行相关增删改查的方法。(PS：这里需要会 sql 语句进行对数据库操作)
  然后在 servlet 文件中，声明 Conn 这个类，并调用其中的方法即可。

\`\`\`java
public class Conn {
private Connection conn = null;
/**lianJie*/
private Statement stmt = null;
/**shenmin*/
private ResultSet rs = null;
/**jieguo*/

String DriverName="sun.jdbc.obdc.JbdcObdcDriver";
private String DBURL = "jdbc:mysql://localhost:3306/bbs?useUnicode=true&characterEncoding=utf-8";
private String DBUSER = "root";
private String DBPASSWORD = "123456";

public Conn() throws ClassNotFoundException, SQLException {
Class.forName("com.mysql.jdbc.Driver");
conn = DriverManager.getConnection(this.DBURL,this.DBUSER,this.DBPASSWORD);
stmt=conn.createStatement();
// 实例化Statement对象

}


/**
 * 执行查询操作：select
 **/
public ResultSet executeQuery(String sql) {
try {
  rs = stmt.executeQuery(sql);
} catch (SQLException ex) {
System.err.println(ex.getMessage());
}
return rs;
}


/**
 * 执行更新操作：insert、update、delete
 * */
private int executeUpdate(String sql) {
int result = 0;
try {

stmt = conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,
  ResultSet.CONCUR_READ_ONLY);
result = stmt.executeUpdate(sql);
} catch (SQLException ex) {
System.out.println(ex);
}
  return result;
}


/**
 * 关闭数据库连接
 * */
private void close() {
try {
  if (rs != null) {
rs.close();
}
} catch (Exception e) {
  e.printStackTrace(System.err);
}
try {
  if (stmt != null) {
stmt.close();
}
} catch (Exception e) {
  e.printStackTrace(System.err);
}
try {
  if (conn != null) {
conn.close();
  }
} catch (Exception e) {
  e.printStackTrace(System.err);
}
}

public User login(String uName,String uPass){
try{
  User user =new User();
  String strSql = "select * from t_user where uName = ?";
  PreparedStatement ps = conn.prepareStatement(strSql);
  ps.setString(1, uName);
  ResultSet rs =  ps.executeQuery();
  String pass = null;
  while (rs.next()){
pass = rs.getString(1);
assert false;
user.setuId(rs.getInt("uId"));
user.setGender(rs.getString("gender"));
user.setHead(rs.getString("head"));
user.setRegTime(rs.getString("regTime"));
user.setuPass(rs.getString("uPass"));
user.setuName(rs.getString("uName"));
}

return user;

}catch(Exception e){
  System.out.println(e);
  return null;
}finally {
{
this.close();
}
}
}
  }

\`\`\`

---

## 步骤四

- 接下来啊，就剩下视图层的界面了，这里和前端 HTML，CSS 比较挂钩。

- 调用 servlet，无非就是请求。这边介绍两种。
  一种是表单的提交，通过 form 表单的 action 属性指向一个 servelt 的 url，即可完成请求。
  第二种是通过 a 标签的 herf 进行跳转，也是将 servelt 的 url 赋值给 herf 即可完成请求。
- 除了这些请求跳转之外还有：
  javascript 的 window.location.herf 属性跳转
  respone 的重定向请求
  resquet 的转发请求

\`\`\`java
//herf
a href="login.jsp">登陆 /a>
//form
form method="post" action="do_upload.jsp" enctype="multipart/form-data">
//JavaScript
window.location.href='getBoardInfo'
//request
request.getRequestDispatcher("index.jsp").forward(request,response);
//response
response.sendRedirect("getBoardInfo")
\`\`\`

>通过以上步骤你就成完成一个简单的基于JSP的博客搭建`
    },
    {
      articleid: 'article3',
      articlename: 'React-Native学习指导',
      articledate: '2018.5.22',
      articleclassification: '技术文章',
      articlecontent: `# 目录

- 教程

  - React Native
  - React.js
  - ES6

- 开源 APP
- 组件
- 工具
- 资源网站

---

# 教程

## **React Native**

- React-Native 入门指南

  https://github.com/vczero/react-native-lesson

- react-native 官方 api 文档

  https://facebook.github.io/react-native/docs/getting-started.html

- React Native 布局篇

  https://segmentfault.com/a/1190000002658374

* React Native: Android 的打包
  https://www.liaohuqiu.net/cn/posts/react-native-android-package/

## **React.js**

- react.js 中文文档

  https://reactjs.cn/

- react.js 快速入门教程 - 阮一峰

  https://www.ruanyifeng.com/blog/2015/03/react.html

---

## **ES6**

- ECMAScript6 入门

  https://es6.ruanyifeng.com/

---

# 开源 APP

> 研究源码也是一个很好的学习方式

- 官方演示 App

  https://github.com/facebook/react-native/tree/master/Examples

- react-native-todo

  https://github.com/joemaddalone/react-native-todo

- 模仿天猫首页的 app

  https://github.com/hugohua/react-native-demo

- 知乎专栏 app

  https://github.com/LeezQ/react-native-zhihu-app

# 组件

> 由于已经有较好的组件库网站，这里就不做总结。可以直接查看如下网站，过后可能精选一部分优质组件出来

- React-native 组件库

  https://react.parts/

- React Native Modules

  https://reactnativemodules.com/

---

# 工具

- react-native-snippets（**代码提示**）

  https://github.com/Shrugs/react-native-snippets

- react-native-babel（**使用 ES6+**）

  https://github.com/roman01la/react-native-babel

# 资源网站

- React-native 官网

  https://facebook.github.io/react-native/

- React-China 社区

  https://react-china.org/

- React Native 中文社区

  https://bbs.react-native.cn/
`
    },
    {
      articleid: 'article4',
      articlename: 'CSS-Flex——适应性更强的布局',
      articledate: '2018.5.22',
      articleclassification: '技术文章',
      articlecontent: `#### 前言
---
一切都始于这样一个问题：怎样通过 CSS 简单而优雅的实现水平、垂直同时居中。

然而当我开始接触到float属性时候，不由自主的感觉眼前一亮，让布局变得可以自主化。但是很快又失望了，因为发现，他只有left，right的属性，并没有我们想要的center。想要居中，还是得结合的display和text-align或者margin等属性来设置。

于是后面我接触到了flex布局，让我体会到了通过 1 个属性就能优雅的实现子元素居中或均匀分布，甚至可以随着窗口缩放自动适应。
所以我今天要重点介绍的flex 布局。

---

#### flex 基本概念
使用 flex 布局首先要设置父容器 \`\`\`display: flex\`\`\`，然后再设置 \`\`\`justify-content: center\`\`\` 实现水平居中，最后设置 \`\`\`align-items: center\`\`\` 实现垂直居中。

\`\`\`css
#dad {
display: flex;
justify-content: center;
align-items: center
}
\`\`\`

就是这么简单，大功告成哈哈。等等，好像哪里不对，\`\`\`justify-content\`\`\` 和 \`\`\`align-items\`\`\` 是啥？现在我就来介绍介绍。

==justify-content== 属性用于定义如何沿着主轴方向排列子容器。

他有五个属性值：
* flex-start：起始端对齐
* flex-end：末尾段对齐
* center：居中对齐
* space-around：子容器沿主轴均匀分布，位于首尾两端的子容器到父容器的距离是子容器间距的一半。
* space-between：子容器沿主轴均匀分布，位于首尾两端的子容器与父容器相切。


==align-items==
属性用于定义如何沿着交叉轴方向分配子容器的间距。

它也有五个属性值：
* flex-start：起始端对齐
* flex-end：末尾段对齐
* center：居中对齐
* baseline：基线对齐，这里的 baseline 默认是指首行文字，即 first baseline，所有子容器向基线对齐，交叉轴起点到元素基线距离最大的子容器将会与交叉轴起始端相切以确定基线。
* stretch：子容器沿交叉轴方向的尺寸拉伸至与父容器一致。

#### 总结
这三个属性值已经可以为大家解决不少的布局问题，这个也是flex的基础属性值。

对于flex还有很多属性值在这里没有相关介绍，如果大家有兴趣的话可以去看看*阮一峰*先生的网络日志[Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)`
    },
    {
      articleid: 'article5',
      articlename: 'React-Router了解一下',
      articledate: '2018.5.22',
      articleclassification: '技术文章',
      articlecontent: `> react-router 是做 SPA(不是你想的 SPA)时，控制不同的 url 渲染不同的组件的 js 库。用 react-router 可以方便开发，不需要手动维护 url 和组件的对应关系。开发时用 react-router-dom，react-router-dom 里面的组件是对 react-router 组件的封装。

# SPA 的原理

单页应用的原理用两种，一种是通过 hash 的变化，改变页面，另一种是通过 url 的变化改变页面。

- hash

* window.location.hash='xxx' 改变hash

  window.addEventListener('hashchange',fun) 监听 hash 的改变

* url

* history.pushState(obj,title,'/url') 改变url

  window.addEventListener('popstate',fun) 当浏览器向前向后时，触发该事件。

# React-Router-dom 的核心组件

- Router 
  * Router 是一个外层，最后 render 的是它的子组件，不渲染具体业务组件。
  分为 HashRouter(通过改变 hash)、BrowserRouter(通过改变 url)、MemoryRouter
  Router 负责选取哪种方式作为单页应用的方案 hash 或 browser 或其他的，把 HashRouter 换成 BrowserRouter，代码可以继续运行。
  Router 的 props 中有一个 history 的对象，history 是对 window.history 的封装，history 的负责管理与浏览器历史记录的交互和哪种方式的单页应用。history 会作为 childContext 里的一个属性传下去。

* Route

    * 负责渲染具体的业务组件，负责匹配url和对应的组件

  有三种渲染的组件的方式：component(对应的组件)、render(是一个函数，函数里渲染组件)、children(无论哪种路由都会渲染)

- Switch

  - 匹配到一个 Route 子组件就返回不再继续匹配其他组件。

* Link

  - 跳转路由时的组件，调用 history.push 把改变 url。

# history

- history 是管理与浏览器历史记录的交互，和用哪种方式实现单页应用。这里实现了一个简单的 history
- MyHistory 是父类，HashHistory、BrowserHistory 是两个子类。
- HashHistory 和 BrowserHistory 实例的 loaction 属性是相同的，所以 updateLocation 是子类方法。location 的 pathname 在 HashHistory 是 hash 的#后面的值，在 BrowserHistory 是 window.location.pathname。
- 两个子类里有一个_push 方法，用来改变 url，都是用的 history.pushState 方法。

# Redirect

- Redirect 跳转到某个路由，不渲染组件
- 通过 history.createHref 获得 path，history.push 跳转过去

# withRouter

- withRouter 实际是一个高阶组件，即一个函数返回一个组件。返回的组件外层是 Route，Route 的 children 属性里渲染接收到的组件。

# 总结

> react-router、react-router-dom 的 api 还有很多，像 Redirect 和 withRouter 还有的许多 api。本文的组件只能跑通 react-router-dom 里的 example。源码要复杂的多，通过学习源码，并自己实现相应的功能，可以对 react 及 react-router 有更深的理解，学到许多编程思想，数据结构很重要，像源码中 Router 里的 ChildContext 的数据解构，子组件多次用到里面的方法或属性，方便复用。
`
    }
  ]
};
export default articledata;
