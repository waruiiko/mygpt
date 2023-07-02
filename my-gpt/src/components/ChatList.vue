<template>
  <div class="chat-list">
    <div v-for="(message, index) in chatListStore.messages" :key="index">
      <SendMessage :text="message.text" :sender="message.sender" />
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import SendMessage from "../components/SendMessage.vue";
import { defineComponent } from "vue";
import { useChatListStore } from "../stores/counter.js";
// import ChatUs from "./ChatUs.vue";
// import { VueSFCStreaming } from "vue3-sfc-loader";

export default defineComponent({
  components: {
    SendMessage,
    // ChatUs,
    // VueSFCStreaming,
  },
  setup() {
    const chatListStore = useChatListStore();

    const messages = ref([
      { text: "", sender: "me" },
      { text: "", sender: "chatGPT" },
    ]);

    // const addMessage = (text, sender) => {
    //   messages.value.push({ text, sender });
    // };

    return {
      messages,
      // addMessage,
      chatListStore,
    };
  },
});
</script>

<style>
.chat-list {
  overflow-y: auto;
  padding: 10px;
}
</style>
