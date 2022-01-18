import { Button } from 'antd'
import React from 'react'
import dress from './assets/dress.jpeg'
import tshirt from './assets/tshirt.jpeg'
import jeans from './assets/jeans.jpeg'
import jean from './assets/jean.jpeg'
import { Card, Rate, Badge} from 'antd'
import Meta from 'antd/lib/card/Meta'
function Fashion() {
    const [show, setShow] = React.useState(true);
    return (
        
        <div>
            <div class="container" >
            <div class="row">
                <div class="col-md-6"><img src={dress}width={200}/></div>
                <div class="col-md-6">
<h1 class="ff text-primary text-center "style={{fontSize:80}}>Fashion that hires here</h1><Button style={{backgroundColor:'greenyellow',marginLeft:60,paddingLeft:20,paddingRight:20    }} >Hire now</Button>
               
                <h1 class="text-center text-success">CLOTHS FOR ALL</h1>
            </div>
            <div class="col-md-4">
                <Card style={{height:320}}   hoverable>
    
                      <img style={{width:160,height:150}} src={tshirt} alt="example"/>                
                    <Meta title="Color Block Men Hooded Neck White, Red, Black T-Shirt" /> <Badge
                        className=""
                        count={show ? 5: 0}
                        style={{ backgroundColor: '#52c41a' }}
                        />
                    <Rate disabled defaultValue={100} />   
                    <p>₹343 <br/>₹1,29973% off


                    </p>
                    <Button style={{backgroundColor:'orange'}}>Add to cart</Button> <Button  style={{backgroundColor:'orange'}}>Shop now</Button>
                    

    
                </Card>
            </div>
            <div class="col-md-4">
                <Card style={{height:320}}   hoverable>
                    
                        <img style={{width:160,height:150}} src={jeans} alt="example"/>                
                    <Meta title="Skinny Women Grey Jeans" /> <Badge
                        className=""
                        count={show ? 5: 0}
                        style={{ backgroundColor: '#52c41a' }}
                        />
                    <Rate disabled defaultValue={100} />   
                    <p>₹343 <br/>₹1,29973% off


                    </p>
                    <Button style={{backgroundColor:'orange'}}>Add to cart</Button> <Button  style={{backgroundColor:'orange'}}>Shop now</Button>
                    


                </Card>
            </div>
            <div class="col-md-4">
                <Card style={{height:320}}   hoverable>
                    
                        <img style={{width:160,height:150}} src={jean} alt="example"/>                
                    <Meta title="Skinny Women Grey Jeans" /> <Badge
                        className=""
                        count={show ? 5: 0}
                        style={{ backgroundColor: '#52c41a' }}
                        />
                    <Rate disabled defaultValue={100} />   
                    <p>₹343 <br/>₹1,29973% off


                    </p>
                    <Button style={{backgroundColor:'orange'}}>Add to cart</Button> <Button  style={{backgroundColor:'orange'}}>Shop now</Button>
                    


                </Card>
            </div>
        </div>
    </div>
</div>            
        
    )
}

export default Fashion
