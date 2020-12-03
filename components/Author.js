import { Avatar, Divider } from 'antd'
import React, { useState } from 'react'
import '../public/style/components/author.css'
import '../styles/animation.css'
const Author = () => {

  return (
    <div className="author-div comm-box">
      <div> <Avatar size={100} src="https://www.amd.com/system/files/2020-09/616656-amd-ryzen-embossed-chip-flat-left-angle-1260x709_0.png" /></div>
      <div className="author-introduction">
        6666777779999969969696特斯拉modulX
              <Divider><span className='postTitless'>社交账号</span></Divider>
        <Avatar size={28} icon="github" className="account" />
        <Avatar size={28} icon="qq" className="account" />
        <Avatar size={28} icon="wechat" className="account" />
      </div>
    </div>
  )

}

export default Author