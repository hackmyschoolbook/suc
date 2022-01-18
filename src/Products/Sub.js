import React from 'react'
import { Menu } from 'antd';
import { NodeCollapseOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Link,Outlet } from 'react-router-dom';

const { SubMenu } = Menu;
function Sub() {
    return (
        <div>
            
      <Menu theme={'dark'} mode="horizontal">
        <Menu.Item key="mail" icon={<NodeCollapseOutlined />}>
          <Link to="/products/electronics">Electronics</Link>
        </Menu.Item>
        <Menu.Item key="app" icon={<AppstoreOutlined />}>
        <Link to="/products/fashion">Fashion</Link>
        </Menu.Item>
        
        <Menu.Item key="alipay">
        <Link to="/products/grocery">Grocery</Link>
        </Menu.Item>

        <Menu.Item key="ali">
        <Link to="/products/appliances">Home Appliances</Link>
        </Menu.Item>
      </Menu>
      <Outlet/>
</div>
    )
}

export default Sub
