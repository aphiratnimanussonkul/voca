<template>
  <div class="w-full flex flex-col p-6 justify-between h-screen mt-4">
    <div>
      <ArrowLeftButton @click="onGetBack" />
      <h1 class="font-bold text-2xl mt-2">Who are you?</h1>
      <p class="text-gray-400 text-md">Tell us about yourself</p>
      <GenderSelection :selected="gender" :onSelect="onSelectGender" />
      <div class="mt-4">
        <SimpleInput
          :label="`Your name`"
          :value="name"
          v-on:typing="onChange"
        />
      </div>
    </div>
    <MainButton label="Let's begin" @click="onRouteToHomePage" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import router from "@/router";
import MainButton from "../components/MainButton/index.vue";
import ArrowLeftButton from "../components/ArrowLeftButton/index.vue";
import GenderSelection from "../components/GenderSelection/selector.vue";
import SimpleInput from "../components/SimpleInput/index.vue";
import { Gender } from "@/enum/gender";

export default defineComponent({
  name: "Information",
  components: { MainButton, ArrowLeftButton, GenderSelection, SimpleInput },
  data() {
    return {
      gender: "",
      name: "",
    };
  },
  methods: {
    onGetBack() {
      router.back();
    },
    onSelectGender(gender: Gender) {
      this.gender = gender;
    },
    onChange(data: string) {
      this.name = data;
    },
    onRouteToHomePage() {
      console.log(this.name);
    },
  },
});
</script>