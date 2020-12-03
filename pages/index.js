import Head from 'next/head'
import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import { Button } from 'antd'
import Header from '../components/Head'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import { Row, Col, List, Icon } from 'antd'
import axios from 'axios'
import  Link from 'next/link'
import '../public/style/pages/index.css'

import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css'

import  servicePath  from '../config/api.url'
const Home = (list) => {
  const [ mylist , setMylist ] = useState(list.data)
  const renderer = new marked.Renderer();
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    sanitize:false,
    xhtml: false,
    highlight: function (code) {
            return hljs.highlightAuto(code).value;
    }

  });
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
            <List header={<div>最新的动态</div>} itemLayout="vertical" dataSource={mylist}  renderItem={item=>(
              <List.Item>
                <div className="list-title">
                  <Link href={{pathname:'/detailed',query:{id:item.id}}}>
                  <a>{item.articleTitle}</a>
                  </Link>
                  </div>
                <div className="list-icon">
                  <span><Icon type='calendar'></Icon>{item.addTime}</span>
                  <span><Icon type='folder'></Icon>{item.typeName}</span>
                  <span><Icon type='fire'></Icon>{item.view_count}</span>
                </div>
                <div className="list-context"  dangerouslySetInnerHTML={{__html:item.introduce_html}}></div>
                {/* <div className="list-context"  >{item.Id}</div> */}
              </List.Item>
            )}/>
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
              <Author/>
              <Advert/>
        </Col>
      </Row>
      <Footer/>
    </>
  )
}
Home.getInitialProps = async ()=>{
  console.log(1)
      const promise = new Promise(resolve =>{
        axios(servicePath.getArticleList).then(res =>{
          console.log(res)
          resolve(res.data)
        })
      })
      return await promise
}


export default Home
