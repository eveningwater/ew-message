import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ewMessage from "ew-message";
import 'ew-message/dist/ew-message.min.css'
import "./App.css";
import { ewMessageEnumType } from "ew-message/typings/const/enum";

function App() {
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
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {
        messageList.map((item, index) => (
          <button type="button" onClick={() => ewMessage[item.type as ewMessageEnumType](item.content)} key={item.type + index}>{item.type}</button>
        ))
      }
    </>
  );
}

export default App;
