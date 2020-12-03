import React ,{useState,useEffect} from 'react'
import Router from 'next/router'
import Link from 'next/link'
import '../public/style/components/Head.css'
import {Row,Col, Menu, Icon} from 'antd'
import axios from 'axios'
import  servicePath  from '../config/api.url'

const Header = () => {

    const [navArray , setNavArray] = useState([])
    useEffect(()=>{

        const fetchData = async ()=>{
           const result= await axios(servicePath.getArticletype).then(
                (res)=>{
                    setNavArray(res.data.data)
                    return res.data.data
                }
              )
           setNavArray(result)
        }
        fetchData()


    },[])
    //跳转到列表页
    const handleClick = (e)=>{
        if(e.key==0){
            Router.push('/')
        }else{
            Router.push('/list?id='+e.key)
        }


    }

    return (
        <div className="header">
            <Row type="flex" justify="center">
                <Col  xs={24} sm={24} md={10} lg={13} xl={11}>
                    <span className="header-logo">
                        <Link href={{pathname:'/'}}>
                            <a className="route-text postTitle"> jackDing</a>
                        </Link>

                    </span>
                    <span className="header-txt">专注做饭烧菜红烧肉，每年100道。</span>
                </Col>

                <Col className="memu-div" xs={0} sm={0} md={14} lg={10} xl={7}>
                    <Menu  
                      mode="horizontal"
                      onClick={handleClick}
                    >
                        <Menu.Item key="0">
                            <Icon type="home" />
                            博客首页
                        </Menu.Item>
                        {
                           navArray.map((item)=>{
                            return(
                                <Menu.Item key={item.Id}>
                                    <Icon type={item.icon} />
                                    {item.typeName}
                                </Menu.Item>
                            )
                           }) 
                        }
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}

export default Header