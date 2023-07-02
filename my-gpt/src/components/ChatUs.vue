<template>
  <div class="form">
    <el-form :inline="true">
      <el-form-item label="Say something">
        <el-input
          v-model="myMessage"
          placeholder="myMessage"
          autosize
          type="textarea"
          resize="horizontal"
          autofocus
        />
      </el-form-item>
      <el-form-item>
        <!-- <el-button type="primary" round @click="startFetch(myMessage)"
          >submit(stream)</el-button
        > -->
        <el-button type="primary" round @click="getChat(myMessage)"
        >submit</el-button
      >
      </el-form-item>
    </el-form>
  </div>

  <!-- <pre>{{ messages }}</pre> -->
</template>

<script>
import { ref, onMounted } from "vue";
import { useChatListStore } from "../stores/counter.js";
import api from "../boot/api";
export default {
  setup() {
    const messages = ref("");
    const myMessage = ref("");

    const chatListStore = useChatListStore();

    //stream
    const startFetch = (prompt) => {
      const message = myMessage.value;
      chatListStore.addMessage({ text: message, sender: "me" });
      myMessage.value = "";

      const url = new URL("/api/completions", "http://localhost:3100");
      url.searchParams.set("message", prompt);
      const eventSource = new EventSource(url);
      eventSource.onmessage = (e) => {
        if (e.data === "[DONE]") {
          return eventSource.close();
        }
        const data = JSON.parse(e.data);
        const { content = "" } = data.choices[0].delta;
        messages.value += content;
        
        // console.log("messages.value:" + messages.value);
        chatListStore.addMessage({ text: content, sender: "ChatGPT" });
      };
    };

    const getChat = ()=>{
      const message = myMessage.value;
      chatListStore.addMessage({ text: message, sender: "me" });

      api.post("/completions",{message:myMessage.value})
      .then((res)=>{
        const content = res.data.choices[0].message.content;
        console.log(content);
        chatListStore.addMessage({ text: content, sender: "ChatGPT" });
        // console.log(res.data);
      })
      .catch((e) =>{
        console.log(e.data);
      })
      
      myMessage.value = "";
    }

    return {
      messages,
      startFetch,
      myMessage,
      getChat
      // sendMessage,
    };
  },
};
</script>

<style scoped>
.form {
  width: 100%;
}
</style>
