<template>
  <div class="shadow flex flex-col text-center justify-center h-40 rounded-lg gap-y-4 px-4 w-full">
    <h1 class="font-bold text-xl">{{ vocab }}</h1>
    <p class="text-gray-400 text-sm">{{ means }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VocabularyCard",
  props: {
    vocab: {
      type: String,
      required: true,
    },
    means: {
      type: String,
      required: true,
    },
  },
});
</script>
