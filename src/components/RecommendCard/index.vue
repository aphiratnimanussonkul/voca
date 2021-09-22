<template>
  <div style="minWidth: 200px">
    <div class="flex flex-col rounded-xl shadow h-full">
      <img :src="imagePath" class="h-2/3" />
      <p class="py-2 px-6 truncate">{{ bookName }}</p>
      <p class="text-sm text-gray-300 px-6">{{ wordAmount }} word</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "RecommendCard",
  props: {
    bookName: String,
    wordAmount: Number,
    imagePath: {
      type: String,
      required: true,
    },
  },
});
</script>