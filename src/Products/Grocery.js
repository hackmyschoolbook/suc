import React from 'react'
import bg from './assets/gbg.jpg'
import paneer from './assets/paneer.jpg'
import yum from './assets/yum.jpg'
import chips from './assets/chips.jpg'
import dall from './assets/dall.jpg'
import { Card, Rate, Tag,Badge, Button } from 'antd'
import tea from './assets/tea.jpg'
import wheat from './assets/wheat.jpg'
import grocery from './assets/grocery.svg'

import './bootstrap.min.css'
import Meta from 'antd/lib/card/Meta'
function Grocery() {
    const [show, setShow] = React.useState(true);
    return (
        <div     >
          <div class="container">
              <div  class="row">
                  <div class="col-md-6">
<img src={grocery} width="100%"/>

                  </div>
                    <div class="col-md-6">
<h1 class="ff" style={{fontSize:80  }}>All products available here</h1><Button  style={{backgroundColor:'green'}}>Signup</Button><span>To get offers</span> 
                    </div>
                    <h1 class="text-center">Grocery Items</h1>

        <div class="col-md-4">
        <Card style={{height:320}}   hoverable>
   
   <Badge.Ribbon style={{marginLeft:100}} text="Best Seller">  <img style={{width:160,height:100}} src={wheat} alt="example"/>                
  <Meta title="Aashirvaad Atta/Godihittu - Whole Wheat, 10 kg Pouch" /> <Badge
       className=""
       count={show ? 5: 0}
       style={{ backgroundColor: '#52c41a' }}
     />
  <Rate disabled defaultValue={100} />   
   
<p>MRP:
<del>Rs 499</del><br/>
Price:
Rs 392<br/>

You Save:
21%<br/>
(Inclusive of all taxes)


</p>
<Button  style={{backgroundColor:'orange'}}>Add to cart</Button> <Button  style={{backgroundColor:'orange'}}>Shop now</Button>
       </Badge.Ribbon>   

  
</Card>
        </div>
        <div class="col-md-4">
        <Card style={{height:320}}   hoverable>
   
   <Badge.Ribbon style={{marginLeft:100}} text="Best Seller">  <img style={{width:160,height:100}} src={tea} alt="example"/>                
  <Meta title="Red Label Tea - Natural Care, 1 kg" /> <Badge
       className=""
       count={show ? 5: 0}
       style={{ backgroundColor: '#52c41a' }}
     />
  <Rate disabled defaultValue={100} />   
   <p>MRP:
<del>Rs 650</del><br/>
Price:
Rs 543.21<br/>
You Save:
16%<br/>
(Inclusive of all taxes)

</p>
       </Badge.Ribbon>   

       <Button  style={{backgroundColor:'orange'}}>Add to cart</Button> <Button  style={{backgroundColor:'orange'}}>Shop now</Button>  
</Card>
        </div>
        <div class="col-md-4">
        <Card style={{height:320}}   hoverable>
   
   <Badge.Ribbon style={{marginLeft:100}} text="Best Seller">  <img style={{width:160,height:100}} src={paneer} alt="example"/>                
  <Meta title="Milky Mist Paneer - Premium Fresh, 500 g Pouch " /> <Badge
       className=""
       count={show ? 5: 0}
       style={{ backgroundColor: '#52c41a' }}
     />
  <Rate disabled defaultValue={100} />   
   <p>MRP:
<del>Rs 250</del><br/>
Price:
Rs 230<br/>
You Save:
20<br/>
(Inclusive of all taxes)


</p>
<Button  style={{backgroundColor:'orange'}}>Add to cart</Button> <Button  style={{backgroundColor:'orange'}}>Shop now</Button>
       </Badge.Ribbon>   

  
</Card>
        </div>
        <div class="col-md-4">
        <Card style={{height:320}}   hoverable>
   
   <Badge.Ribbon style={{marginLeft:100}} text="Best Seller">  <img style={{width:160,height:100}} src={yum} alt="example"/>                
  <Meta title="Too Yumm! Veggie Stix - Sour Cream & Onion, 75 g (65+10g) " /> <Badge
       className=""
       count={show ? 5: 0}
       style={{ backgroundColor: '#52c41a' }}
     />
  <Rate disabled defaultValue={100} />   
   <p>
   MRP:
<del>Rs 35</del>
Price:
Rs 29.75<br/>
You Save:
15%<br/>
(Inclusive of all taxes)


</p>
<Button  style={{backgroundColor:'orange'}}>Add to cart</Button> <Button  style={{backgroundColor:'orange'}}>Shop now</Button>
       </Badge.Ribbon>   

  
</Card>
        </div>
        <div class="col-md-4">
        <Card style={{height:320}}   hoverable>
   
   <Badge.Ribbon style={{marginLeft:100}} text="Best Seller">  <img style={{width:160,height:100}} src={chips} alt="example"/>                
  <Meta title="Tasties Namkeen - Salted Banana Chips, 150 g" /> <Badge
       className=""
       count={show ? 5: 0}
       style={{ backgroundColor: '#52c41a' }}
     />
  <Rate disabled defaultValue={100} />   
<p>
MRP:
<del>Rs 85</del><br/>
Price:
Rs 51<br/>
You Save:
40%<br/>
(Inclusive of all taxes)

</p>
   
<Button  style={{backgroundColor:'orange'}}>Add to cart</Button> <Button  style={{backgroundColor:'orange'}}>Shop now</Button>
       </Badge.Ribbon>   

  
</Card>
        </div>
        <div class="col-md-4">
        <Card style={{height:320}}   hoverable>
   
   <Badge.Ribbon style={{marginLeft:100}} text="Best Seller">  <img style={{width:160,height:100}} src={dall} alt="example"/>                
  <Meta title="BB Royal Toor Dal/Togari Bele - Desi, 1 kg Pouch" /> <Badge
       className=""
       count={show ? 5: 0}
       style={{ backgroundColor: '#52c41a' }}
     />
  <Rate disabled defaultValue={100} />   
   <p>MRP:
<del>Rs 170</del>
Price:
Rs 133<br/>
You Save:
22%<br/>
(Inclusive of all taxes)


</p>
<Button  style={{backgroundColor:'orange'}}>Add to cart</Button> <Button  style={{backgroundColor:'orange'}}>Shop now</Button>
       </Badge.Ribbon>   

  
</Card>
        </div>
        
    </div>
    </div>  
            </div>


       
    )
}

export default Grocery
