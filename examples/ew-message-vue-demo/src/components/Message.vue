<script setup lang="ts">
import { onMounted } from 'vue'
import ewMessage from 'ew-message';
import 'ew-message/dist/ew-message.min.css'
import { ewMessageEnumType } from 'ew-message/typings/const/enum';
onMounted(() => {
  ewMessage({ content: "这是一个消息提示框" });
})
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
</script>

<template>
  <button v-for="item in messageList" :key="item.type"
    @click="() => ewMessage[item.type as ewMessageEnumType](item.content)">{{ item.type }}</button>
</template>

<style scoped>
button + button {
  margin-left: 5px;
}
</style>
