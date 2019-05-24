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
      articlecontent: `# 还没写`
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
