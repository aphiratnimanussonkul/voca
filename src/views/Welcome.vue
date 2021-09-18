<template>
  <div class="w-full flex flex-col p-6 justify-between h-screen">
    <div class="flex flex-col items-center my-auto">
      <img src="../assets/hello.png" />
      <h1 class="font-bold text-2xl">Voca</h1>
      <p class="text-gray-400 whitespace-pre-line text-center mt-2">
        {{ `Learn and improve vocabulary\n anywhere, any time.` }}
      </p>
    </div>
    <MainButton />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainButton from "../components/MainButton/index.vue";

export default defineComponent({
  name: "Welcome",
  components: { MainButton },
});
</script>
