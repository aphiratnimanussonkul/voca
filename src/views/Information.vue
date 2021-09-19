<template>
  <div class="w-full flex flex-col p-6 justify-between h-screen mt-4">
    <div>
      <ArrowLeftButton @click="onGetBack" />
      <h1 class="font-bold text-2xl mt-2">Who are you?</h1>
      <p class="text-gray-400 text-md">Tell us about yourself</p>
      <GenderSelection :selected="gender" :onSelect="onSelectGender" />
    </div>
    <MainButton label="Let's begin" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import router from "@/router";
import MainButton from "../components/MainButton/index.vue";
import ArrowLeftButton from "../components/ArrowLeftButton/index.vue";
import GenderSelection from "../components/GenderSelection/selector.vue";
import { Gender } from "@/enum/gender";

export default defineComponent({
  name: "Information",
  components: { MainButton, ArrowLeftButton, GenderSelection },
  data() {
    return {
      gender: "",
    };
  },
  methods: {
    onGetBack() {
      router.back();
    },
    onSelectGender(gender: Gender) {
      this.gender = gender;
    },
  },
});
</script>