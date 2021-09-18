<template>
  <button
    @click="onClick"
    class="
      w-full
      bg-primary-400
      text-white
      py-3
      rounded-lg
      focus:outline-none
      hover:bg-primary-500
      focus:bg-primary-500
      font-semibold
    "
  >
    {{ label }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainButton",
  props: {
    label: {
      type: String,
      required: true,
    },
    onClick: {
      type: Function,
      required: true,
    },
  },
});
</script>
