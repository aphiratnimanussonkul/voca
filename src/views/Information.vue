<template>
  <div class="w-full flex flex-col p-6 justify-between h-screen mt-4">
    <div>
      <img src="../assets/icons/arrow-left.svg" class="w-7 text-gray-400" />
      <h1 class="font-bold text-2xl mt-4">Who are you?</h1>
      <p class="text-gray-400 text-md">Tell us about yourself</p>
    </div>
    <MainButton label="Let's begin" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainButton from "../components/MainButton/index.vue";

export default defineComponent({
  name: "Information",
  components: { MainButton },
});
</script>