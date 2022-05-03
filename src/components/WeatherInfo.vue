<template>
  <div class="flex justify-center lg:w-full w-1/2 mx-auto text-center pt-3 mt-3 border-t-2 border-gray-100">
    <div class="w-1/3" title="Wind">
      <span class="value fa-solid fa-wind"><span class="pl-2">{{getWeatherInfo.wind}}</span></span>
    </div>
    <div class="w-1/3" title="Humidity">
      <span class="value fa-solid fa-droplet"><span class="pl-2">%{{getWeatherInfo.humidity}}</span></span>
    </div>
    <div class="w-1/3" title="Cloud">
      <span class="value fa-solid fa-cloud"><span class="pl-2">%{{getWeatherInfo.clouds}}</span></span>
    </div>
  </div>
</template>

<script>
//import { DropletIcon, WindIcon, CloudIcon } from "vue-feather-icons";
import { mapGetters } from "vuex";
export default {
  components: {
    //WindIcon,
    //DropletIcon,
    //CloudIcon
  },
  computed:{
    ...mapGetters(["getWeatherInfo"])
  }
};
</script>