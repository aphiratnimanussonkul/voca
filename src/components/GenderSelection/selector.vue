<template>
  <div class="grid grid-cols-2 gap-x-4 mt-4">
    <GenderOption
      :gender="Gender.MALE"
      :selected="selected"
      @click="onSelectGender(Gender.MALE)"
    />
    <GenderOption
      :gender="Gender.FEMALE"
      :selected="selected"
      @click="onSelectGender(Gender.FEMALE)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GenderOption from "./gender-option.vue";
import { Gender } from "../../enum/gender";

export default defineComponent({
  name: "GenderSelection",
  components: { GenderOption },
  props: {
    selected: {
      type: String,
      required: true,
    },
    onSelect: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      Gender,
    };
  },
  methods: {
    onSelectGender(gender: Gender) {
      this.onSelect(gender);
    },
  },
});
</script>

