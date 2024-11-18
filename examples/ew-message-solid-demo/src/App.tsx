import { createEffect } from "solid-js";
import solidLogo from "./assets/solid.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ewMessage from "ew-message";
import 'ew-message/dist/ew-message.min.css';
import { ewMessageEnumType } from "ew-message/typings/const/enum";

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
];
createEffect(() => {
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
});
function App() {
  // const [count, setCount] = createSignal(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
      </div>
      <h1>Vite + Solid</h1>
      <div class="card">
        {
          messageList.map((item) => (
            <button
              type="button"
              onClick={() => ewMessage[item.type as ewMessageEnumType](item.content)}
            >
              {item.type}
            </button>
          ))
        }
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count()}
        </button> */}
      </div>
    </>
  );
}

export default App;
