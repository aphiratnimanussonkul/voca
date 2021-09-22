<template>
  <div class="w-full flex flex-col p-6 justify-between h-screen">
    <div class="flex flex-col items-center my-auto">
      <img src="/assets/hello.png" />
      <h1 class="font-bold text-2xl">Voca</h1>
      <p class="text-gray-400 whitespace-pre-line text-center mt-2">
        {{ `Learn and improve vocabulary\n anywhere, any time.` }}
      </p>
    </div>
    <MainButton label="Get started" @click="onRouteToInformation" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainButton from "../components/MainButton/index.vue";
import router from "@/router";

export default defineComponent({
  name: "Welcome",
  components: { MainButton },
  methods: {
    onRouteToInformation() {
      router.push("/information");
    },
  },
});
</script>
