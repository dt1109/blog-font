import { Avatar, Divider ,Popover} from 'antd'
import React, { useState ,useEffect,useRef} from 'react'
import '../public/style/components/author.css'
import '../styles/animation.css'

const content = (
  <div>
      <img src ="/img/qw7.png"></img>
  </div>
);

const Author = (callback, delay) => {
  function useInterval(callback, delay) {
    const savedCallback = useRef();
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }
  const [count, setCount] = useState(0);
  const show = () =>{
    let text = "6666777779999969969696特斯拉modulX";
    // debugger
   setCount(count + 1)
   document.getElementById("test").innerText = text.substr(0, count);
  //  console.log(1)
   if(count > 31){
   
      setCount(count =>{
        // debugger
        count = 0
        for(var i = 1; i < 35; i++) {
          clearInterval(i);
          }
      })
     
    // for(var i = 1; i < 35; i++) {
    //   clearInterval(i);
      
    //     useInterval(() => {  
    //       setCount(count =>{
    //         count = 0
    //       })
    //       show()
    //     }, 3000);
    //   }
   }
    // setCount(count + 1)
  }
  useInterval(() => {  
    show()
  }, 300);
  useInterval(() => {  
    show()
  }, 3000);
  // const showSlognText = () =>{
  
  //     let done = setInterval(show(),500);
  //     console.log(count)
  //     if(count > 30){
  //       clearInterval(done)
  //     }
  // }
  // useEffect(()=>{
  //   useInterval(show,1000)
  // })

  return (
    <div className="author-div comm-box">
      <div> <Avatar size={100} src="https://www.amd.com/system/files/2020-09/616656-amd-ryzen-embossed-chip-flat-left-angle-1260x709_0.png" /></div>
      <div className="author-introduction">
       <div id="test"></div> 
              <Divider><span className='postTitless'>社交账号</span></Divider>
       <a href="https://github.com/dt1109/"><Avatar size={28} icon="github" className="account"  srcSet="https://github.com/dt1109/"/></a>
       <Popover content={content} title="qq二维码" overlayClassName="cardqrcode">
        <Avatar size={28} icon="qq" className="account accounthover" />
        </Popover>
        <Popover content={content} title="wx二维码" overlayClassName="cardqrcode">
        <Avatar size={28} icon="wechat" className="account accounthover" />
        </Popover>
      </div>
    </div>
  )

}

export default Author