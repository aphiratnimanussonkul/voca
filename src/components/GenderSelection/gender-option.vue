<template>
  <div
    @click="onSelect"
    :class="`flex flex-col items-center border rounded-xl p-4 ${
      selected == gender ? `border-primary-400 text-primary-400` : ``
    }`"
  >
    <img
      :src="require(`../../assets/make-it-rain-${gender}.png`)"
      class="w-5/6"
    />
    <p>{{ gender }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Gender",
  props: {
    gender: {
      required: true,
      type: String,
    },
    selected: {
      required: true,
      type: String,
    },
    onSelect: {
      required: true,
      type: Function,
    },
  },
});
</script>

