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
          <Slide v-for="slide in 10" :key="slide">
            <VocabularyCard
              vocab="Proactive"
              means="อย่างมั่นใจ ซึ่งเข้าควบคุมสถานการณ์"
            />
          </Slide>

          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      </div>
    </div>

    <div class="flex gap-x-4">
      <MainButton :label="isReading ? 'Pause' : 'Read'" @click="onRead" />
      <ConfigureButton @click="onRead" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ArrowLeftButton from "../components/ArrowLeftButton/index.vue";
import MainButton from "../components/MainButton/index.vue";
import ConfigureButton from "../components/ConfigureButton/index.vue";
import VocabularyCard from "../components/VocabularyCard/index.vue";
import router from "../router/index";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

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
      isReading: false,
      autoPlayInterval: 0,
    };
  },
  methods: {
    onGetBack() {
      router.back();
    },
    onRead() {
      this.isReading = !this.isReading;
      if (this.isReading) {
        this.autoPlay();
      } else {
        clearInterval(this.autoPlayInterval);
      }
    },
    autoPlay() {
      this.autoPlayInterval = setInterval(() => {
        this.clickNextButton();
      }, 1000);
    },
    clickNextButton() {
      const nextButton = document.getElementsByClassName(
        "carousel__next"
      )[0] as HTMLElement;
      nextButton.click();
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