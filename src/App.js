import React from 'react';
import rk from './assets/rk.jpeg'
import banner from './components/assets/banner.png'
import car from './assets/c1.jpeg'
import cars from './assets/c2.jpeg'
import fridge from './assets/c3.jpeg'
import machine from './assets/c4.jpeg'
import web from './assets/webshop.svg'
import gro from './assets/webgrocery.svg'


import { Carousel,Input ,Button, Card, Row} from 'antd';
 function App() {
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  
  return (
    <div className="App">
    <div class="container"      >
      <div class="row" >
        <div class="col-md-6">
      <img src={banner}  width={600}  />
      
        </div>
        <div class="col-md-6">
          <img src={rk}/>
      <h1 class="text-dark text-center ff"> Rk ELECTRONICS</h1><p class="text-center text-secondary">Home and Office</p>
      </div>
      <div class="col-md-8">
        
      <h1 class="ff2 text-primary" >Online Shopping India  Buy mobiles, laptops, cameras, books, watches, apparel, shoes and e-Gift Cards</h1>
      
      </div>
      <div class="col-md-4">
      <img src={web} style={{width:320}}/>
      </div>
      <div class="col-md-4">
        <img src={gro}style={{width:320}}/>
      </div>
      <div class="col-md-8">
        <h1 class="ff1 text-warning">Super fast delivery guaranteed with assured quality check of your items. Grocery shopping made easier! Buy daily essentials from your home</h1>
      </div>
      <h1 class="ff text-center text-success">PING US</h1>
      <div class="col-md-12 ">
      <div className="site-card-border-less-wrapper">
        <Row justify='center' >
    <Card hoverable title="Enquire now" bordered={false} style={{ width: 600,backgroundColor:'#00474f' }}>
    <Input.Group compact>
      <Input style={{ width: 'calc(100% - 200px)' }} defaultValue="feel free to type " />
      <Button type="primary">SEND</Button>
    </Input.Group>
    </Card>
    </Row>
  </div>
     
    
      </div>
          <div class="col-md-12 mt-3">
          <Carousel autoplay>
    <div>
      <h3 style={contentStyle}><img src={car}style={{width:950 ,height:160}}/></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src={cars}style={{width:950 ,height:160}}/></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src={fridge}style={{width:950 ,height:160}}/></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src={machine} style={{width:950 ,height:160}}/></h3>
    </div>
  </Carousel>      
          </div>
         
      </div>

    </div>

    </div>
  );
}

export default App;
