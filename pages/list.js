import Head from 'next/head'
import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import { Button } from 'antd'
import Header from '../components/Head'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import { Row, Col, List, Icon,Breadcrumb,Spin } from 'antd'
import '../public/style/pages/list.css'
import Link from 'next/link'
const MyList = () => {
  const [ loading,setLoading] =useState(false)

  const goLoading= ()=>{

    setLoading(true)
  }
  const [ mylist , setMylist ] = useState(
    [
      {title:'jblogTitleONE',context:'50元跟着胖哥学一年，掌握程序人的学习方法。 也许你刚步入IT行业，也许你遇到了成长瓶颈，也许你不知道该学习什么知识，也许你不会融入团队，也许...........有些时候你陷入彷徨。 你需要一个强力的队友，你需要一个资深老手，你需要一个随时可以帮助你的人，你更需要一个陪你加速前行的。 我在这个行业走了12年，从后端、前端到移动端都从事过，从中走了很多坑，我定价50元每年，为什么是50元每年？因为这是知识星球允许的最低收费了。',id:52},
      {title:'jblogTitletWO',context:'决定把打赏环节改为知识服务。我定价50元每年，为什么是50元每年？因为这是知识星球允许的最低收费了。',id:53},
      {title:'jblogTitletHREEE',context:' 每次打赏我都会觉得内疚，因为我并没有给你特殊的照顾，也没能从实质上帮助过你。 直到朋友给我介绍了知识星球，它可以专享加入，可以分享知识，可以解答问题，所以我如获珍宝，决定把打赏环节改为知识服务。我定价50元每年，为什么是50元每年？因为这是知识星球允许的最低收费了。',id:50},
      {title:'jblogTitletFOUR',context:'你需要一个强力的队友，你需要一个资深老手，你需要一个随时可以帮助你的人，你更需要一个陪你加速前行的。 我在这个行业走了12年，从后端、前端到移动端都从事过，从中走了很多坑，但我有一套适合程序员的学习方法。 如果你愿意，我将带着你在这个程序行业加速奔跑。分享我学习的方法，所学的内容和一切我的资料。 你遇到的职业问题，我也会第一时间给你解答。我需要先感谢一直帮助我的小伙伴，这个博客能产出300多集免费视频，其中有他们的鼎力支持，如果没有他们的支持和鼓励，我可能早都放弃了。 原来我博客只是录制免费视频，然后求30元的打赏。 每次打赏我都会觉得内疚，因为我并没有给你特殊的照顾，也没能从实质上帮助过你。 直到朋友给我介绍了知识星球，它可以专享加入，可以分享知识，可以解答问题，所以我如获珍宝，决定把打赏环节改为知识服务。我定价50元每年，为什么是50元每年？因为这是知识星球允许的最低收费了。',id:25},
    ]
  )
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
          <div className='bread-div'>
          <Breadcrumb>
            <Breadcrumb.Item><a href='/'>首页</a></Breadcrumb.Item>
            <Breadcrumb.Item>生活教程</Breadcrumb.Item>
          </Breadcrumb>
          </div>
          <Spin spinning={loading}>
            <List header={<div>最新的动态</div>} itemLayout="vertical" dataSource={mylist}  renderItem={item=>(
              <List.Item>
                <div className="list-title" onClick={goLoading}> <Link href={{pathname:'/detailed',query:{id:item.id}}}>
                          <a>{item.title}</a>
                        </Link></div>
                <div className="list-icon">
                  <span><Icon type='calendar'></Icon>2020-9-1</span>
                  <span><Icon type='folder'></Icon>蚊帐教程</span>
                  <span><Icon type='fire'></Icon>199867人</span>
                </div>
                <div className="list-context">{item.context}</div>
                <div className="list-go">
                            <Icon type="file" /> &nbsp;
                            <span  onClick={goLoading}>
                              <Link href={{pathname:'/detailed',query:{id:item.id}}}>
                                查看全文 
                              </Link>
                            </span>
                   </div> 
              </List.Item>
            )}/>
             </Spin>
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



export default MyList
