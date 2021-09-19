<template>
  <div class="flex flex-col w-full gap-y-2">
    <label class="text-sm text-gray-400">{{ label }}</label>
    <input
      class="focus:outline-none border-b border-primary-400"
      v-model="model"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "SimpleInput",
  props: {
    label: String,
    value: {
      type: String,
      required: true,
    },
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value: String | number) {
        this.$emit("typing", value);
      },
    },
  },
});
</script>