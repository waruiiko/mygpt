<template>
  <v-card>
    <v-layout>
      <!-- <v-app-bar color="surface-variant" title="Application bar"></v-app-bar> -->

      <v-navigation-drawer color="surface">
        <v-list>
          <v-list-item title="Drawer left"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-navigation-drawer color="surface" location="right">
        <v-list>
          <v-list-item title="Drawer right"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="min-height: 60vh;">
        <v-container fluid>
          <v-row dense>
            <v-col>
              <v-card>{{mycontent}}</v-card>
            </v-col>
          </v-row>
        </v-container>
        <!-- <v-divider></v-divider> -->
      </v-main>
      <!-- <v-main style="min-height: 80vh;">
        <div>
          <h2>Hello</h2>
        </div></v-main> -->
    </v-layout>
  </v-card>
</template>
<script>
  import { defineComponent } from "vue";
  export default defineComponent({
  name: "NavDraw",
  props:{
    _id: {
      type: String,
    },
    mycontent:{
      type:String,
    }
  }
});
</script>
