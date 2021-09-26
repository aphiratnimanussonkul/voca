<template>
  <div class="w-full flex flex-col p-6 justify-between h-screen">
    <div>
      <ArrowLeftButton :onClick="onGetBack" />
      <h1 class="font-bold text-2xl my-2 text-primary-400">
        {{ this.vocabularySet.name }}
      </h1>
      <p class="text-gray-400 text-xs">
        {{ this.vocabularySet.vocabularies.length }} words
      </p>
      <div class="mt-4">
        <Carousel :items-to-show="1.25" :wrap-around="true">
          <Slide
            v-for="(item, index) in this.vocabularySet.vocabularies"
            :key="index"
          >
            <VocabularyCard :vocab="item.vocab" :means="item.means" />
          </Slide>

          <template #addons="{ currentSlide }">
            {{ onChangeCurrentIndex(currentSlide) }}
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      </div>
    </div>

    <div class="flex gap-x-4">
      <MainButton :label="onAutoPlay ? 'Pause' : 'Read'" @click="onRead" />
      <ConfigureButton @click="onRead" />
    </div>
  </div>
</template>

<script lang="ts">
import { Language } from "@/enum/language";
import VocabularySetRepository from "@/repository/vocabulary.set";
import TextToSpeechService from "@/services/speak";
import { defineComponent } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import ArrowLeftButton from "../components/ArrowLeftButton/index.vue";
import ConfigureButton from "../components/ConfigureButton/index.vue";
import MainButton from "../components/MainButton/index.vue";
import VocabularyCard from "../components/VocabularyCard/index.vue";
import router from "../router/index";

export default defineComponent({
  name: "Vocabulary",
  components: {
    ArrowLeftButton,
    MainButton,
    ConfigureButton,
    VocabularyCard,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      onAutoPlay: false,
      currentSlide: 0,
      ttsService: new TextToSpeechService(),
      vocabularySetRepository: new VocabularySetRepository(),
      vocabularySet: {
        id: "",
        name: "",
        vocabularies: [{ vocab: "", means: "" }],
        cover: "",
      },
    };
  },
  methods: {
    async getVocabulary() {
      this.vocabularySet = await this.vocabularySetRepository.getById(
        router.currentRoute.value.query.id as string
      );
    },
    onGetBack() {
      router.back();
    },
    onRead() {
      this.onAutoPlay = !this.onAutoPlay;
      if (this.onAutoPlay) this.autoPlay();
    },
    async autoPlay() {
      while (this.onAutoPlay) {
        await this.speakText();
        this.clickNextButton();
        await this.sleep();
      }
    },
    async sleep() {
      await new Promise((resole) => setTimeout(() => resole(""), 1));
    },
    async speakText() {
      const { vocab, means } =
        this.vocabularySet.vocabularies[this.currentSlide];
      await this.ttsService.speak(vocab, Language.EN);
      await this.ttsService.speak(means, Language.TH);
    },
    clickNextButton() {
      const nextButton = document.getElementsByClassName(
        "carousel__next"
      )[0] as HTMLElement;
      nextButton.click();
    },
    onChangeCurrentIndex(index: number) {
      this.currentSlide = index;
    },
  },
  mounted() {
    this.clickNextButton();
    this.getVocabulary();
  },
});
</script>
<style >
.carousel__item {
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel__slide {
  padding: 10px;
}
.carousel__prev,
.carousel__next {
  color: #407bff;
  box-sizing: content-box;
  border: 2px solid #407bff;
}
.carousel__pagination-button {
  border-radius: 50%;
  width: 8px;
  height: 8px;
  background-color: rgb(232, 232, 232);
}
.carousel__pagination-button--active {
  background-color: #407bff;
}
</style>