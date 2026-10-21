const { createEditor } = EwIframeEditor;
window.onload = function () {
  createEditor({
    requestUrl: './demo.html',
  });
};
