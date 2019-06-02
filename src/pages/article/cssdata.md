#### 前言
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

对于flex还有很多属性值在这里没有相关介绍，如果大家有兴趣的话可以去看看*阮一峰*先生的网络日志[Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)