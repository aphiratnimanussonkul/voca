<template>
  <div class="w-full flex flex-col p-6 justify-between h-screen">
    <div class="flex font-bold text-2xl mt-2 gap-x-2">
      <h1 class="text-gray-500">Hi,</h1>
      <h1 class="text-primary-400">{{ name }}</h1>
    </div>
    <MainButton label="Read" @click="onRead" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainButton from "../components/MainButton/index.vue";

export default defineComponent({
  name: "Home",
  components: {
    MainButton,
  },
  data() {
    return {
      name: "Aphirat",
    };
  },
  methods: {
    onRead() {},
  },
});
</script>