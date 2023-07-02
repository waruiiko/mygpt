<template>
  <div class="message">
    <div class="sender">{{ sender }}</div>
    <div class="text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    sender: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
.message {
  margin-bottom: 10px;
}

.sender {
  font-weight: bold;
}

.text {
  margin-top: 5px;
}
</style>