<template>
  <div class="w-full flex flex-col p-6 justify-between h-screen">
    <div>
      <ArrowLeftButton :onClick="onGetBack" />
      <h1 class="font-bold text-2xl my-2 text-primary-400">
        The Phoenix Project
      </h1>
      <p class="text-gray-400 text-xs">150 words</p>
      <div class="mt-4">
        <Carousel :items-to-show="1.25" :wrap-around="true">
          <Slide v-for="vocab in vocabularies" :key="vocab">
            <VocabularyCard :vocab="vocab.en" :means="vocab.th" />
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
      vocabularies: [
        { en: "Prudent", th: "รอบคอบ ประหยัด" },
        { en: "Contempt", th: "การดูถูก การหมิ่นประมาท" },
        { en: "Dodge", th: "การหลบ" },
        { en: "Sincere", th: "จริงใจ" },
        { en: "Coerce", th: "บีบบังคับ" },
        { en: "Drone on", th: "พูดเสียงต่ำ" },
        { en: "Grind", th: "บด" },
        { en: "Halt", th: "การหยุดชั่วคราว" },
        { en: "Grovel", th: "ประจบประแจง" },
        { en: "Quite so", th: "นั่นแหละ" },
        { en: "Amicable", th: "เป็นมิตร เป็นกันเอง" },
        { en: "Tension", th: "ความตึง ความเครียด" },
        { en: "Crawl", th: "การคลาน ยอมสยบ" },
        { en: "In the meantime", th: "ในขณะเวลาเดียวกัน ในช่วงนั้น" },
        { en: "Stretch", th: "ขยายออก" },
        { en: "Alley", th: "ตรอก ซอย" },
        { en: "Proactive", th: "อย่างมั่นใจ ซึ่งเข้าควบคุมสถานการณ์" },
      ],
    };
  },
  methods: {
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
      const { th, en } = this.vocabularies[this.currentSlide];
      await this.ttsService.speak(en, Language.EN);
      await this.ttsService.speak(th, Language.TH);
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