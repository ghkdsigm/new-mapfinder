<template>
  <div class="weatherWrap">
    <transition name="fade">
      <div class="card">
        <WeatherSearch />
        <WeatherMain />
        <WeatherInfo />
      </div>
    </transition>    
  </div>
</template>

<script>
import WeatherSearch from "../components/WeatherSearch.vue";
import WeatherMain from "../components/WeatherMain.vue";
import WeatherInfo from "../components/WeatherInfo.vue";
// import WeatherAnimate from "../components/WeatherAnimate.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "App",
  components: {
    WeatherSearch,
    WeatherMain,
    WeatherInfo,
    //WeatherAnimate,
  },
  computed: {
    ...mapGetters(["isSearched"])
  },
  methods: {
    ...mapActions(["fetchWeatherData"]),
    initData() {
      this.fetchWeatherData(this.$store.state.defaultSearch);
    }
  },
  created() {
    this.initData();
  }
};
</script>

<style>

</style>