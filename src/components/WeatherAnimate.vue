<template>
  <div>
    <div
      class="weather-animate"
      :class="[
      {'weather-rain': getWeatherMain.info == 'Rain'},
      {'weather-snow': getWeatherMain.info == 'Snow'},
      {'weather-clear': getWeatherMain.info == 'Clear' || getWeatherMain.info == 'Mist'},
      {'weather-clouds': getWeatherMain.info == 'Clouds' || getWeatherMain.info == 'Haze'},
      {'error': getError}]"
    ></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getWeatherMain", "getError"])
  }
};
</script>