import React from 'react'
import happy from './assets/happy.svg'
import { Card, Rate, Tag,Badge, Button } from 'antd'
import mixer from './assets/mixer.jpeg'
import Meta from 'antd/lib/card/Meta';
import stove from './assets/stove.jpeg'
import chimney from './assets/chimney.jpeg'
function Appliances() {
    const [show, setShow] = React.useState(true);
    return (
        <div>
            <div className="container">
                <div class="row">
                    <div class="col-md-6">
                        <img src={happy} width={400}/>
                    </div>
                    <div class="col-md-6">
                        <h1 class="ff text-center text-success" style={{fontSize:80}}>HOME APPLIANCES SUITS HERE</h1>
                    </div>
                    <div class="col-md-4">
                            <Card style={{height:370}}   hoverable>
            
                            <img style={{width:160,height:150}} src={mixer} alt="example"/>                
                        <Meta title="Maxotech Powerful Hybrid 100% Copper Motor Tuba 700 Mixer Grinder (3 Jars, White, Black)
                        " /> <Badge
                            className=""
                            count={show ? 5: 0}
                            style={{ backgroundColor: '#52c41a' }}
                            />
                        <Rate disabled defaultValue={100} />   
                        <p>Sales Package
                        Main Motor, Jar Set, Warranty Card<br/>
                        Power Required
                        230-250 V<br/>

                        Electric Citrus Juicer
                        </p>
                        <Button style={{backgroundColor:'orange'}}>Add to cart</Button> <Button  style={{backgroundColor:'orange'}}>Shop now</Button>
                        


                        </Card>

                    </div>
                <div class="col-md-4">
                    <Card style={{height:370}}   hoverable>
    
                            <img style={{width:160,height:150}} src={stove} alt="example"/>                
                        <Meta title="Maxotech Powerful Hybrid 100% CoppeButterfly Rapid 3 Burner Glass Manual Gas Stove  (3 Burners)
                        " /> <Badge
                            className=""
                            count={show ? 5: 0}
                            style={{ backgroundColor: '#52c41a' }}
                            />
                        <Rate disabled defaultValue={100} />   
                        <p>Type: Manual Gas Stove<br/>
Burner Type: Tri Pin Burner<br/>
Number of Burners: 3

                        </p>
                        <Button style={{backgroundColor:'orange'}}>Add to cart</Button> <Button  style={{backgroundColor:'orange'}}>Shop now</Button>
                        


                        </Card>

                    </div>
                    <div class="col-md-4">
                    <Card style={{height:370}}   hoverable>
    
                            <img style={{width:160,height:150}} src={chimney} alt="example"/>                
                        <Meta title="Hindware Clarissa Blk 60 / Clarissa Blk 60 IN Wall Mounted Chimney  (Black 700 CMH/m3/h)  " /> <Badge
                            className=""
                            count={show ? 5: 0}
                            style={{ backgroundColor: '#52c41a' }}
                            />
                        <Rate disabled defaultValue={100} />   
                        <p>₹5,799<del>₹11,990</del><br/>51% off
                        700 CMH/m3/h : Suitable for kitchen size 100 sqft & low frying/grilling

                        </p>
                        <Button style={{backgroundColor:'orange'}}>Add to cart</Button> <Button  style={{backgroundColor:'orange'}}>Shop now</Button>
                        


                        </Card>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appliances
