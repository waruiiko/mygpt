<template>
  <!-- <HelloWorld /> -->
  <NavDraw/>
  <!-- <div>
    <h1>HelloWorld</h1>
  </div> -->
  <v-footer app>
    <form @submit.prevent="submit">
      <v-responsive class="mx-auto" width="30em">
        <v-text-field
          v-model="prompt.value.value"
          clearable
          hide-details="auto"
          label="Say something to AI..."
        ></v-text-field>
      </v-responsive>

      <v-btn class="me-4" type="submit"> submit </v-btn>

      <v-btn @click="handleReset"> clear </v-btn>
    </form>
  </v-footer>
</template>

<script setup>
// import HelloWorld from '@/components/HelloWorld.vue'
import NavDraw from "@/components/NavDraw.vue";
import { useField, useForm } from "vee-validate";
import { defineComponent, ref } from "vue";

// export default defineComponent({
components: {
  NavDraw;
}
// setup() {
const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    prompt(value) {
      if (value?.length >= 2) return true;
      return "Prompt needs to be at least 2 characters.";
    },
  },
});
const prompt = useField("prompt");

// const articles = ref([]);
const submit = handleSubmit((values) => {
  // articles.value
  alert(JSON.stringify(values, null, 2));
});

// return {
//   handleSubmit,
//   handleReset,
//   prompt,
//   submit,
// };
//   },
// });
</script>
