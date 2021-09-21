<template>
  <div class="w-full flex flex-col p-6 justify-between h-screen">
    <div class="flex font-bold text-2xl mt-2 gap-x-2">
      <h1 class="text-gray-500">Hi,</h1>
      <h1 class="text-primary-400">{{ name }}</h1>
    </div>
    <MainButton label="Read" @click="onRead" />
  </div>
</template>

<script lang="ts">
import { Language } from "@/enum/language";
import { defineComponent } from "vue";
import MainButton from "../components/MainButton/index.vue";
import TextToSpeehService from "../services/speak";

export default defineComponent({
  name: "Home",
  components: {
    MainButton,
  },
  data() {
    return {
      textToSpeechService: new TextToSpeehService(),
      name: "Aphirat",
    };
  },
  methods: {
    onRead() {
      this.textToSpeechService.speak("สวัสดี", Language.TH);
    },
  },
});
</script>