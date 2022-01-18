import { FacebookOutlined } from '@ant-design/icons';
import { Card, Row, Space } from 'antd'
import {React,useState} from 'react'
import about from './assets/about.svg'
import fb from './assets/face.png'
import ig from './assets/ig.png'
import yt from './assets/yt.png'
import tw from './assets/tw.png'

function About() {
    const [size, setSize] = useState('large');
    return (
        <div>
            <Row justify='center'>
                <h1>who is  R K  electronics </h1><br/>
                <div class="row">
                    <div class="col-md-5">
                        <img src={about} style={{width:400}}/>
                    </div>
                    <div class="col-md-7 mt-5">
                    <p>We are one of the leading company in india ,we full fill the all kinds of needs for home and office  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
                    </div>
                
                <h1 class="ff text-center">Follow us On</h1>
                <div class="col-md-12">
                    <Row justify='center'>
                <Space size={size} style={{marginTop:20}}>
              <img src={fb} style={{width:70}}/>
              <img src={ig} style={{width:70}}/>
              <img src={yt} style={{width:70}}/>
              <img src={tw} style={{width:70}}/>

                </Space>
                </Row>
                </div>
                </div>
            </Row>

        </div>
    )
}

export default About
