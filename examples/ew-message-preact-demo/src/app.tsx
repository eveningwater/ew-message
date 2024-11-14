import { useEffect, useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import ewMessage from "ew-message"
import 'ew-message/dist/ew-message.min.css'
import './app.css'
import { ewMessageEnumType } from "ew-message/typings/const/enum"

export function App() {
  
  const messageList = [
    {
      type: "info",
      content: "默认消息提示框"
    },
    {
      type: "loading",
      content: "加载中消息提示框"
    },
    {
      type: "success",
      content: "成功消息提示框"
    },
    {
      type: "error",
      content: "错误消息提示框"
    },
    {
      type: "warning",
      content: "警告消息提示框"
    }
  ]
  const [count, setCount] = useState(0)

  useEffect(() => {
    const msg = ewMessage({
      content: "这是一个默认的消息提示框",
      showClose: true,
      removeClassName: ["fadeOut"],
      startClassName: ["fadeIn"],
      duration: 0,
    });
    return () => {
      msg.destroy();
    };
  }, []);
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      {/* <h1>Vite + Preact + ewMessage</h1> */}
      <div class="card">
        {
          messageList.map((item, index) => (
            <button type="button" onClick={() => ewMessage[item.type as ewMessageEnumType](item.content)} key={item.type + index}>{item.type}</button>
          ))
      }
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
      </div>
    </>
  )
}
