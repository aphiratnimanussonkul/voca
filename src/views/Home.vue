<template>
  <div class="w-full flex flex-col pt-6">
    <div class="flex font-bold text-2xl mt-2 gap-x-2 px-6">
      <h1 class="text-gray-500">Hi,</h1>
      <h1 class="text-primary-400">{{ name }}</h1>
    </div>
    <div class="mt-4 w-full ml-6">
      <h1 class="text-gray-600 text-sm">Recommend</h1>
      <div
        class="flex overflow-x-auto p-1 mt-2 gap-x-4"
        v-for="set in this.vocabularySet"
        :key="set"
      >
        <RecommendCard
          @click="onClickRecommendCard(set.id)"
          :bookName="set.name"
          :wordAmount="set.vocabularies.length"
          imagePath="/assets/the-phoenix-project.png"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import VocabularySetRepository from "@/repository/vocabulary.set";
import { defineComponent } from "vue";
import MainButton from "../components/MainButton/index.vue";
import RecommendCard from "../components/RecommendCard/index.vue";
import router from "../router/index";

export default defineComponent({
  name: "Home",
  components: {
    MainButton,
    RecommendCard,
  },
  data() {
    return {
      name: "Aphirat",
      vocabularySet: {},
      vocabularySetRepository: new VocabularySetRepository(),
    };
  },
  methods: {
    onClickRecommendCard(id: string) {
      console.log("on click?");
      router.push(`/vocab?id=${id}`);
    },
    async getVocabularySet() {
      this.vocabularySet =
        await this.vocabularySetRepository.getAllVocabularySet();
    },
  },
  mounted() {
    this.getVocabularySet();
  },
});
</script>