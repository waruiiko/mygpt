<script>
import { ref, createApp } from "vue";
import ChatUs from "../components/ChatUs.vue";
import ChatList from "../components/ChatList.vue";

export default {
  components: { ChatUs,ChatList},
};
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>Chat With AI</el-header>
      <el-main class="main">
        <ChatList />
      </el-main>
      <el-footer>
        <ChatUs />
      </el-footer>
    </el-container>
  </div>
</template>
<style>
.main {
  min-height: 60vh;
  max-width: 50em;
}
</style>
