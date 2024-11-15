import { createEffect, type Component } from 'solid-js';
import ewMessage from "ew-message"
import 'ew-message/dist/ew-message.min.css'
import { ewMessageEnumType } from "ew-message/typings/const/enum"

import logo from './logo.svg';
import styles from './App.module.css';

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

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p> */}
        <div class={styles.buttonsGroup}>
          {
            messageList.map((item, index) => (
              <button
                key={item.type + index}
                type="button"
                onClick={() => ewMessage[item.type as ewMessageEnumType](item.content)}
              >
                {item.type}
              </button>
            ))
          }
        </div>
        {/* <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a> */}
      </header>
    </div>
  );
};

export default App;
