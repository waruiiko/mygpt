<template>
  <v-app-bar flat scroll-behavior="collapse elevate fade-image hide">
    <v-app-bar-title>
      <!-- <v-icon icon="mdi-circle-slice-6" /> -->
      <v-avatar image="../../assets/openai.svg"></v-avatar>
      Chat with AI
    </v-app-bar-title>

    <template v-slot:image>
      <v-img
        gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
      ></v-img>
    </template>

    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <!-- <v-app-bar-title>Title</v-app-bar-title> -->

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>

  </v-app-bar>
</template>

<script setup>
  //
</script>
