function createIframeEditor(
  requestUrl,
  codeUrl = 'https://eveningwater.atomgit.net/ew-code-editor/',
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
  iframe.src = codeUrl;
  iframe.id = 'ew-playground-iframe';
  iframe.scrolling = 'no';
  iframe.title = 'code';
  iframe.frameborder = 'no';
  iframe.allowtransparency = 'true';
  iframe.allowfullscreen = 'true';
  iframe.classList.add('ew-iframe');
  fetch(requestUrl)
    .then((response) => response.text())
    .then((scriptContent) => {
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

      const message = [
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

      iframe.onload = function () {
        iframe.contentWindow.postMessage(message, '*');
      };
    })
    .catch((error) => {
      console.error('', error);
    });
  document.head.appendChild(style);
  document.body.appendChild(iframe);
}
