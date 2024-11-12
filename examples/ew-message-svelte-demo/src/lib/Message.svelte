<script lang="ts">
  import type { ewMessageEnumType } from 'ew-message/typings/const/enum.d.ts';
  import ewMessage from 'ew-message';
  import 'ew-message/dist/ew-message.min.css';
  type MessageItem = {
    type: ewMessageEnumType;
    content: string;
  };
  const messageList = [
    {
      type: 'info',
      content: '默认消息提示框',
    },
    {
      type: 'loading',
      content: '加载中消息提示框',
    },
    {
      type: 'success',
      content: '成功消息提示框',
    },
    {
      type: 'error',
      content: '错误消息提示框',
    },
    {
      type: 'warning',
      content: '警告消息提示框',
    },
  ] as MessageItem[];
  const showMessage = (message: MessageItem) => {
    const { type, content } = message;
    ewMessage[type](content);
  };
</script>

<div class="btn-group">
  {#each messageList as message}
    <button type="button" onclick={() => showMessage(message)}
      >{message.content}</button
    >
  {/each}
</div>
