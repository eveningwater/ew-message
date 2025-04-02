const htmlCode = `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
<link rel="stylesheet" href="https://unpkg.com/ew-message@0.1.8/dist/ew-message.min.css" />
<h1 class="title">ew-message</h1>
<div id="test"></div>
<script src="https://unpkg.com/ew-message@0.1.8/dist/ew-message.min.js"></script>
`;

const cssCode = `
    .title {
        color: #555;
        text-align: center;
        margin: 30px 0 20px;
    }
`;
const jsCode = `
const ewMsg1 = ewMessage.loading({
    duration: 0,
    content: '这是一条测试消息',
    maxDuration: 2000,
    // showTypeIcon: false,
    // type: 'loading',
    showClose: true,
    container: '#test',
    removeClassName: ['animate__animated', 'animate__bounce'],
    startClassName: ['animate__animated', 'animate__bounceIn'],
    // top: '15px',
});
ewMessage.loading('加载中的提示');
console.log(ewMsg1);  
`