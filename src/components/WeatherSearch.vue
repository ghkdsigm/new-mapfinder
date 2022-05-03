<template>
  <div class="relative lg:w-2/5 w-4/5 pl-10 pr-4 lg:py-2 py-0 mx-auto block lg:mt-10 lg:mb-10 mt-5 mb-5">
    <input
      type="text"
      placeholder="Seoul"
      class="w-full pl-4 pr-12 py-2 focus:outline-none focus:border-sky-300 focus:ring-1 focus:ring-sky-500 border-2 shadow-md border-gray-200 rounded-full"
      v-model.trim="Search"
      @keydown.enter="getData"
    />
    <span class="absolute py-3 right-8 text-sm" v-if="isSearched">({{getWeatherCountry}})</span>
    <div class="absolute" v-if="getError">검색어를 찾지못했습니다. 영어로 검색해주세요.</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      search: this.$store.state.search
    };
  },
  computed: {
    ...mapGetters(["isSearched", "getWeatherCountry", "getError"])
  },
  methods: {
    ...mapActions(["fetchWeatherData"]),
    getData() {
      this.fetchWeatherData(this.search);
    }
  }
};
</script>