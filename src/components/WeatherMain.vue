<template>
  <div class="flex flex-col justify-center lg:w-full ml-4 mr-4 mx-auto text-center my-6">
    <div class="my-4 font-light">
      <div class="pb-3">
          오늘 날짜 : {{this.now}}
      </div> 체감온도
      <strong class="font-bold text-xl">
        {{getWeatherMain.feelsLike | round}}
        <sup>&deg;</sup>
      </strong>
    </div>
    <div class="bg-gray-100 text-4xl font-black rounded-full w-28 h-28 mx-auto my-2 relative shadow-md">
      <div
        class="w-24 h-24 right-12 bottom-10 bg-cover absolute"
        :style="[getWeatherMain.icon ? {'background-image': 'url(http://openweathermap.org/img/wn/'+getWeatherMain.icon+'d@2x.png)'} : {}]"
      ></div>
      <span class="relative top-6 left-1 text-6xl">{{getWeatherMain.temp | round}}</span>
      <sup class="relative bottom-3 left-0">&deg;</sup>
    </div>
    <div  class="my-2 block">{{getWeatherMain.description}}</div>
    <p></p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      now:''
    }
  },
  computed: {
    ...mapGetters(["getWeatherMain"])
  },
  mounted(){
   
        const today = new Date();
        const year = today.getFullYear();
        const month = ('0' + (today.getMonth() + 1)).slice(-2);
        const day = ('0' + today.getDate()).slice(-2);

        this.now = year + '-' + month  + '-' + day;

  }
};
</script>