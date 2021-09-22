<template>
  <div class="w-full flex flex-col p-6 justify-between h-screen">
    <div>
      <ArrowLeftButton :onClick="onGetBack" />
      <h1 class="font-bold text-2xl my-2 text-primary-400">
        The Phoenix Project
      </h1>
      <p class="text-gray-400 text-xs">150 words</p>
      <div class="mt-4">
        <VocabularyCard
          vocab="Proactive"
          means="อย่างมั่นใจ ซึ่งเข้าควบคุมสถานการณ์"
        />
      </div>
    </div>

    <div class="flex gap-x-4">
      <MainButton label="Read" @click="onRead" />
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

export default defineComponent({
  name: "Vocabulary",
  components: { ArrowLeftButton, MainButton, ConfigureButton, VocabularyCard },
  methods: {
    onGetBack() {
      router.back();
    },
    onRead() {},
  },
});
</script>