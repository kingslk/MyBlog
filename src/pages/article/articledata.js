const articledata = {
  articlecontents: [
    {
      articleid: 'article1',
      articlename: 'Python期末项目',
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
      articlename: 'JSP期末项目',
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
    }
  ]
};
export default articledata;
