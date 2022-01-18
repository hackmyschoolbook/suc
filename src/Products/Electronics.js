import { Card, Rate, Tag,Badge, Button } from 'antd'
import Meta from 'antd/lib/card/Meta'
import React from 'react'
import set from './assets/set.jpeg'
import lap from './assets/lap.jpeg'
import mobile from './assets/mobile.jpeg'
import watch from './assets/watch.jpeg'
import speaker from './assets/speaker.jpeg'
import tv from './assets/tv.jpeg'
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
function Electronics() {
 
    const [show, setShow] = React.useState(true);
   
    return (
        <div style={{ }}>
         

<Tag color="blue" class="card-title">Electronics</Tag>
   <div class="row m-5">
      
       <div class="col-md-4">
        
<Card title="" style={{height:340}} hoverable class="w-100">
      
        
          <Badge.Ribbon style={{marginLeft:100}} text="Best Seller">  <img style={{width:100,height:100}} src={speaker} alt="example"/>                
            <Meta title="boAt Aavante Bar 1550 120 W Bluetooth Soundbar" />
         <Badge
        className="site-badge-count-109"
        count={show ? 4: 0}
        style={{ backgroundColor: '#52c41a' }}
        />
            <Rate disabled defaultValue={4} />   
            <p>Power Output(RMS): 120 W
        Power Source: External
        Wireless music streaming via Bluetooth
        Multiple connectivity (HDMI port, an AUX input, Remote and a USB port)</p>
        <Button  style={{backgroundColor:'orange'}}>Add to cart</Button> <Button  style={{backgroundColor:'orange'}}>Shop now</Button>  
        </Badge.Ribbon>   
        
    
    </Card>
    </div>
    <div class="col-md-4">
       <Card style={{height:340}}   hoverable>
   
    <Badge.Ribbon style={{marginLeft:100}} text="Best Seller">  <img style={{width:160,height:100}} src={tv} alt="example"/>                
   <Meta title="OnePlus Y Series 100 cm (40 inch) Full HD LED Smart Android TV " /> <Badge
        className=""
        count={show ? 5: 0}
        style={{ backgroundColor: '#52c41a' }}
      />
   <Rate disabled defaultValue={100} />   
    <p>Supported Apps: Netflix|Prime Video|Disney+Hotstar|Youtube
Operating System: Android (Google Assistant & Chromecast in-built)

</p>
<Button  style={{backgroundColor:'orange'}}>Add to cart</Button> <Button  style={{backgroundColor:'orange'}}>Shop now</Button>  
        </Badge.Ribbon>   

   
</Card>
</div>
<div class="col-md-4"    >
    <Card  hoverable style={{height:340}}>

   <Badge.Ribbon style={{marginLeft:100}} text="Best Seller">  <img style={{width:100,height:100}} src={set} alt="example"/>                
   <Meta title="JBL T450BT Extra Bass Bluetooth Headset" /> <Badge
        className="site-badge-count-109"
        count={show ? 4: 0}
        style={{ backgroundColor: '#52c41a' }}
      />
   <Rate disabled defaultValue={4.5} />   
    <p>With Mic: <br/>
Bluetooth version: 4 <br/>
Wireless range: 8 m<br/>
Battery life: 11 hrs | Charging time: 2 hrs<br/>
</p>
<Button  style={{backgroundColor:'orange'}}>Add to cart</Button> <Button  style={{backgroundColor:'orange'}}>Shop now</Button>  
</Badge.Ribbon>       
</Card>
</div>
<div class="col-md-4">
 <Card   hoverable style={{height:340}}>
   
    <Badge.Ribbon style={{marginLeft:100}} text="Best Seller">  <img style={{width:100,height:100}} src={lap} alt="example"/>                
   <Meta title="Acer Aspire 7 Core i5 10th Gen " /> <Badge
        className="site-badge-count-109"
        count={show ? 4: 0}
        style={{ backgroundColor: '#52c41a' }}
      />
   <Rate disabled defaultValue={4.5} />   
    <p>NVIDIA GeForce GTX 1650<br/>
    Light Laptop without Optical Disk Drive<br/>
Pre-installed Genuine Windows 10 OS
</p>
<Button  style={{backgroundColor:'orange'}}>Add to cart</Button> <Button  style={{backgroundColor:'orange'}}>Shop now</Button>  
</Badge.Ribbon>   
   
    </Card>
    </div>
    <div class="col-md-4">
       <Card   hoverable style={{height:340}}>
   
    <Badge.Ribbon style={{marginLeft:100}} text="Best Seller">  <img style={{width:100,height:100}} src={mobile} alt="example"/>                
   <Meta title="POCO C31 (Royal Blue, 64 GB)  (4 GB RAM)" /> <Badge
        className="site-badge-count-109"
        count={show ? 4: 0}
        style={{ backgroundColor: '#52c41a' }}
      />
   <Rate disabled defaultValue={4} />   
    <p>4 GB RAM | 64 GB ROM | Expandable Upto 512 GB<br/>
16.59 cm (6.53 inch) HD+ Display
13MP + 2MP + 2MP | 5MP Front Camera</p>
<Button  style={{backgroundColor:'orange'}}>Add to cart</Button> <Button  style={{backgroundColor:'orange'}}>Shop now</Button>  
</Badge.Ribbon>   
   
</Card>
</div>
<div class="col-md-4">
       <Card   hoverable style={{height:340}}>
   
    <Badge.Ribbon style={{marginLeft:100}} text="Best Seller">  <img style={{width:100,height:100}} src={watch} alt="example"/>                
   <Meta title="LS2974 Gun Metal Grey Day and Date Functioning Mesh Strap Quartz Analog" /> <Badge
        className="site-badge-count-109"
        count={show ? 4: 0}
        style={{ backgroundColor: '#52c41a' }}
      />
   <Rate disabled defaultValue={4} />   
    <p>Display Type
Analog
Style Code
LS2974
Series
Gun Metal Grey Day and Date Functioning Mesh Strap Quartz
Occasion
Casual
Watch Type
Wrist Watch
Pack of
1</p>
<Button  style={{backgroundColor:'orange'}}>Add to cart</Button> <Button  style={{backgroundColor:'orange'}}>Shop now</Button>  
</Badge.Ribbon>   
   
</Card>
</div>


  </div>
       </div>

        

        
    )
}

export default Electronics
