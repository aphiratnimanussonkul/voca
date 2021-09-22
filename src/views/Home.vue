<template>
  <div class="w-full flex flex-col p-6">
    <div class="flex font-bold text-2xl mt-2 gap-x-2">
      <h1 class="text-gray-500">Hi,</h1>
      <h1 class="text-primary-400">{{ name }}</h1>
    </div>
    <div class="mt-4 w-full">
      <h1 class="text-gray-600 text-sm">Recommend</h1>
      <div class="flex overflow-x-auto p-1 mt-2 gap-x-4">
        <RecommendCard
          bookName="The Phoenix Project"
          wordAmount="150"
          imagePath="/assets/the-phoenix-project.png"
        />
        <RecommendCard
          bookName="The Power of When"
          wordAmount="32"
          imagePath="/assets/the-power-of-when.png"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Language } from "@/enum/language";
import { defineComponent } from "vue";
import MainButton from "../components/MainButton/index.vue";
import TextToSpeehService from "../services/speak";
import RecommendCard from "../components/RecommendCard/index.vue";

export default defineComponent({
  name: "Home",
  components: {
    MainButton,
    RecommendCard,
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