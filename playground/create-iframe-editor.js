function createIframeEditor(
  requestUrl,
  codeUrl = 'https://ew-code-editor.eveningwater.com',
  iframeStyle = `
      body,html {
        height: 100%;
        overflow: hidden;
      }
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .ew-iframe {
          width: 100%;
          height: 100%;
          border: none;
          overflow: hidden;
      }
    `
) {
  const iframe = document.createElement('iframe');
  const style = document.createElement('style');
  style.textContent = iframeStyle;
  iframe.id = 'ew-playground-iframe';
  iframe.scrolling = 'no';
  iframe.title = 'code';
  iframe.frameborder = 'no';
  iframe.allowtransparency = 'true';
  iframe.allowfullscreen = 'true';
  iframe.classList.add('ew-iframe');

  // 解析 requestUrl 返回的内容，提取 html/css/js
  function parseContent(scriptContent) {
    let htmlContent = '',
      styleContent = '',
      jsContent = '';
    const cssMatch = scriptContent.match(/<style>[\s\S]*?<\/style>/i);

    if (cssMatch) {
      styleContent = cssMatch[0]
        .replace('<style>', '')
        .replace('</style>', '');
    }

    const htmlMatch = scriptContent.match(/<html>[\s\S]*?<\/html>/i);

    if (htmlMatch) {
      htmlContent = htmlMatch[0].replace('<html>', '').replace('</html>', '');
    }

    const jsMatch = scriptContent.match(/<script>[\s\S]*?<\/script>/i);
    if (jsMatch) {
      jsContent = jsMatch[0].replace('<script>', '').replace('</script>', '');
    }

    return [
      {
        type: 'html',
        content: htmlContent,
      },
      {
        type: 'css',
        content: styleContent,
      },
      {
        type: 'js',
        content: jsContent,
      },
    ];
  }

  // 编辑器的消息监听器在 ES module 中异步注册，
  // iframe onload 时可能还没准备好，所以需要重试多次发送
  function sendMessageWithRetry(message) {
    const delays = [0, 300, 800, 1500, 3000];
    delays.forEach((delay) => {
      setTimeout(() => {
        iframe.contentWindow?.postMessage(message, '*');
      }, delay);
    });
  }

  // 先绑定 onload，确保不会错过 load 事件
  iframe.onload = function () {
    fetch(requestUrl)
      .then((response) => response.text())
      .then((scriptContent) => {
        const message = parseContent(scriptContent);
        sendMessageWithRetry(message);
      })
      .catch((error) => {
        console.error('[create-iframe-editor] Failed to load initial code:', error);
      });
  };

  iframe.src = codeUrl;
  document.head.appendChild(style);
  document.body.appendChild(iframe);
}
