<template>
  <div class="w-full flex flex-col p-6 justify-between h-screen">
    <div>
      <ArrowLeftButton @click="onGetBack" />
      <h1 class="font-bold text-2xl mt-2">Who are you?</h1>
      <p class="text-gray-400 text-md">Tell us about yourself</p>
      <GenderSelection :selected="gender" :onSelect="onSelectGender" />
      <div class="mt-4 flex flex-col gap-y-4">
        <SimpleInput
          :label="`Your name`"
          :value="name"
          v-on:typing="onChange"
        />
        <SimpleSelect
          :label="`How old are you`"
          :value="age"
          v-on:selected="onSelectAge"
          :options="this.ageOptions"
        />
      </div>
    </div>
    <MainButton label="Let's begin" @click="onRouteToHomePage" />
  </div>
</template>

<script lang="ts">
import { Gender } from "@/enum/gender";
import router from "@/router";
import { defineComponent } from "vue";
import ArrowLeftButton from "../components/ArrowLeftButton/index.vue";
import GenderSelection from "../components/GenderSelection/selector.vue";
import MainButton from "../components/MainButton/index.vue";
import SimpleInput from "../components/SimpleInput/index.vue";
import SimpleSelect from "../components/SimpleSelect/index.vue";
import { ISimpleSelectOption } from "../interfaces/select";

export default defineComponent({
  name: "Information",
  components: {
    MainButton,
    ArrowLeftButton,
    GenderSelection,
    SimpleInput,
    SimpleSelect,
  },
  data() {
    return {
      gender: "",
      name: "",
      age: 0,
      ageOptions: [
        {
          value: 15,
          label: "1 - 15",
        },
        {
          value: 20,
          label: "16 - 20",
        },
        {
          value: 30,
          label: "21 - 30",
        },
        {
          value: 40,
          label: "More than 31",
        },
      ] as ISimpleSelectOption[],
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
      router.push("/home");
    },
    onSelectAge(age: number) {
      this.age = age;
    },
  },
});
</script>