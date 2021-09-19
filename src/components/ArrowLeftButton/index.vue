<template>
  <button @click="onClick">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="
        feather feather-arrow-left
        w-7
        text-primary-400
        focus:outline-none
        hover:text-primary-500
        focus:text-primary-500
      "
    >
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ArrowLeftButton",
  components: {},
  props: {
    onClick: {
      type: Function,
      required: true,
    },
  },
});
</script>