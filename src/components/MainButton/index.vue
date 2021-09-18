<template>
  <button
    class="
      w-full
      bg-primary-400
      text-white
      py-2
      rounded-lg
      focus:outline-none
      hover:bg-primary-500
      focus:bg-primary-500
    "
  >
    Get started
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainButton",
});
</script>
