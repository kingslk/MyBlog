> react-router 是做 SPA(不是你想的 SPA)时，控制不同的 url 渲染不同的组件的 js 库。用 react-router 可以方便开发，不需要手动维护 url 和组件的对应关系。开发时用 react-router-dom，react-router-dom 里面的组件是对 react-router 组件的封装。

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
- 两个子类里有一个\_push 方法，用来改变 url，都是用的 history.pushState 方法。

# Redirect

- Redirect 跳转到某个路由，不渲染组件
- 通过 history.createHref 获得 path，history.push 跳转过去

# withRouter

- withRouter 实际是一个高阶组件，即一个函数返回一个组件。返回的组件外层是 Route，Route 的 children 属性里渲染接收到的组件。

# 总结

> react-router、react-router-dom 的 api 还有很多，像 Redirect 和 withRouter 还有的许多 api。本文的组件只能跑通 react-router-dom 里的 example。源码要复杂的多，通过学习源码，并自己实现相应的功能，可以对 react 及 react-router 有更深的理解，学到许多编程思想，数据结构很重要，像源码中 Router 里的 ChildContext 的数据解构，子组件多次用到里面的方法或属性，方便复用。
