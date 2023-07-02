import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useChatListStore  = defineStore("chatList", {
  state:() =>{
    return {
      messages: [],
    };
  },
  actions: {
    addMessage(message) {
      this.messages.push(message);
      console.log(message);
    },
  },
});
