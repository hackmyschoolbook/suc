import { Card, Col, Menu, Row } from 'antd'
import Meta from 'antd/lib/card/Meta'
import  {Outlet} from 'react-router-dom'
import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Content, Header } from 'antd/lib/layout/layout'
import React from 'react'

const { SubMenu } = Menu;

function Products() {
    const menu = (
        <Menu>
          <Menu.ItemGroup title="Home Appliances">
            <Menu.Item>Mobiles</Menu.Item>
            <Menu.Item>Television</Menu.Item>
          </Menu.ItemGroup>
          <SubMenu title="PCs and Laps">
            <Menu.Item>Laptops</Menu.Item>
            <Menu.Item>personal computer</Menu.Item>
          </SubMenu>
          <SubMenu title="disabled sub menu" disabled>
            <Menu.Item>5d menu item</Menu.Item>
            <Menu.Item>6th menu item</Menu.Item>
          </SubMenu>
        </Menu>
      );
    return (
        <div>
            
            <nav class="navbar navbar-expand-lg navbar-light bg-warning" style={{width:"100%", overflow: "hidden"}}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">RK</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li class="nav-item">
          <a class="nav-link" href="/products/fashion">Fashion</a>
        </li>
        <li class="nav-item">
        <Dropdown overlay={menu}>
 
<a class="nav-link active text-primary " href="/products/electronics" >Electronics <DownOutlined /> </a>
</Dropdown>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/products/appliances">Home Appliances</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/products/grocery">Grocery</a>
        </li>
        
        
        
        
      </ul>
      
    </div>
  </div>
</nav>

        </div>
    )   
}

export default Products
