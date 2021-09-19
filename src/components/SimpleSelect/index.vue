<template>
  <div class="flex flex-col w-full gap-y-2">
    <label class="text-sm text-gray-400">{{ label }}</label>
    <div class="flex flex-col">
      <select
        class="
          border-t-0 border-l-0 border-r-0 border-b border-primary-400
          focus:ring-0
          p-1
        "
        v-model="model"
      >
        <option
          v-bind:value="option.value"
          v-for="option in options"
          v-bind:key="option.value"
        >
          {{ option.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ISimpleSelectOption } from "../../interfaces/select";

export default defineComponent({
  name: "SimpleSelect",
  props: {
    label: String,
    value: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value: String | number) {
        this.$emit("selected", value);
      },
    },
  },
});
</script>