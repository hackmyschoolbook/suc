import React from 'react'

import logo from '../components/assets/logo.jpeg'
import { Outlet } from "react-router-dom";


import { Layout, Menu} from 'antd';
import {Link} from 'react-router-dom';
const { Header, Content } = Layout;


function Index() {
    return (
      
  <Layout >
    
    <Header width={10}  style={{  width: '100%' ,backgroundColor:'white'  }}>
    <Menu mode="horizontal" >
        <Menu.Item key="1">  <Link to="/">Home</Link></Menu.Item>
        <Menu.Item key="2"> <Link to="/products">Products</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/about">About us</Link></Menu.Item>
        <Menu.Item><img src={logo} className="logo" alt="logo" style={{marginLeft:0,width:100,height:60,overflow:"hidden"}} />         </Menu.Item>
        
      </Menu>           
     
      
       
     
    </Header>
    <Content>
<Outlet/>
    </Content>
     
    {/*<Content style={{marginTop:100}} >
      <Row >
        <Col span={12}>
          <img src={left} width={400}/>
        </Col>
  
        <Col span={12}>

          <h1>Purchase !!!
          </h1>
         
        </Col>
  
        

      </Row>

    </Content> */}
    
  </Layout>
            

    )
}

export default Index
