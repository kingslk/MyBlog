# <center>Ant Design</center>

[Ant Design](https://ant.design) 是一个致力于提升「用户」和「设计者」使用体验，提高「研发者」开发效率的企业中后台设计体系

---

- 项目目录

```javascript
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
│   └── recommendation
│          ├──rebook
│          └──rewebs
├──App.css
├──App.jsx
└──index.js
```

---

- ## 项目技术运用

  - ### Menu 导航菜单

    - 代码示例

      ```javascript
      import { Menu, Icon } from 'antd';
      const SubMenu = Menu.SubMenu;
      const MenuItemGroup = Menu.ItemGroup;
      class App extends React.Component {
        state = {
          current: 'mail'
        };

        handleClick = e => {
          console.log('click ', e);
          this.setState({
            current: e.key
          });
        };

        render() {
          return (
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
            >
              <Menu.Item key="mail">
                <Icon type="mail" />
                Navigation One</Icon>
              </Menu.Item>
            </Menu>
          );
        }
      }
      ```

      - 图片

    - ### Carousel 走马灯

      - 代码示例

      ```javascript
      import { Carousel } from 'antd';
      function onChange(a, b, c) {
        console.log(a, b, c);
      }
      ReactDOM.render(
        <Carousel afterChange={onChange}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>
      );
      ```

      - 图片

    - ### Collapse 折叠面板

      - 代码示例

      ```javascript
      import { Collapse } from 'antd';
      const Panel = Collapse.Panel;
      const text = (
        <p style={{ paddingLeft: 24 }}>
          A dog is a type of domesticated animal. Known for its loyalty and
          faithfulness, it can be found as a welcome guest in many households
          across the world.
        </p>
      );
      ReactDOM.render(
        <Collapse bordered={false} defaultActiveKey={['1']}>
          <Panel header="This is panel header 1" key="1">
            {text}
          </Panel>
          <Panel header="This is panel header 2" key="2">
            {text}
          </Panel>
          <Panel header="This is panel header 3" key="3">
            {text}
          </Panel>
        </Collapse>
      );
      ```
      - 图片
    - ### 
