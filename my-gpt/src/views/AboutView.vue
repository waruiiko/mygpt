<template>
  <div class="about">
    <ChatMe />
  </div>
</template>

<script setup>
import ChatMe from "../components/ChatMe.vue";
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
