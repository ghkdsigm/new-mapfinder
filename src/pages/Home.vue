<template>
  <div>
    <input type="search" class="lg:w-2/5 w-3/5 focus:outline-none focus:border-sky-300 focus:ring-1 focus:ring-sky-500 border-2 shadow-md border-gray-200 rounded-full px-6 pr-4 lg:py-2 py-2 mx-auto block lg:mt-10 lg:mb-10 mt-5 mb-5">
    <div class="text-center w-full lg:pb-2 lg:pt-0 pt-4 pb-8">
      <i class="fa-solid fa-location-dot"></i> 서울시 양천구 신정동 <button class="border-2 rounded-full ml-3 border-gray-300 px-3 py-1 text-xs">현재위치찾기</button>
    </div>
    <div class="flex flex-col justify-center lg:w-full ml-4 mr-4 mx-auto">
      <div class="w-full bg-white flex lg:space-x-12 space-x-4 lg:p-5 items-center mx-auto justify-center lg:mb-0 mb-6">
        <div class="w-1/3 lg:py-14 py-10 bg-gray-100 rounded-md text-center lg:text-xl text-xl flex justify-center items-center cursor-pointer hover:bg-blue-500 hover:text-white hover:shadow-xl">근처<br/><b class="px-1 contents">화장실</b>은?</div>
        <div class="w-1/3 lg:py-14 py-10 bg-gray-100 rounded-md text-center lg:text-xl text-xl flex justify-center items-center cursor-pointer hover:bg-blue-500 hover:text-white hover:shadow-xl">근처<br/><b class="px-1 contents">편의점</b>은?</div>
        <div class="w-1/3 lg:py-14 py-10 bg-gray-100 rounded-md text-center lg:text-xl text-xl flex justify-center items-center cursor-pointer hover:bg-blue-500 hover:text-white hover:shadow-xl">근처<br/><b class="px-1 contents">카페</b>는?</div>
      </div>
      <div class="w-full bg-white flex lg:space-x-12 space-x-4 lg:p-5 items-center mx-auto justify-center lg:mb-0 mb-6">
        <div class="w-1/3 lg:py-14 py-10 bg-gray-100 rounded-md text-center lg:text-xl text-xl flex justify-center items-center cursor-pointer hover:bg-blue-500 hover:text-white hover:shadow-xl">근처<br/><b class="px-1 contents">주유소</b>는?</div>
        <div class="w-1/3 lg:py-14 py-10 bg-gray-100 rounded-md text-center lg:text-xl text-xl flex justify-center items-center cursor-pointer hover:bg-blue-500 hover:text-white hover:shadow-xl">근처<br/><b class="px-1 contents">주차장</b>은?</div>
        <div class="w-1/3 lg:py-14 py-10 bg-gray-100 rounded-md text-center lg:text-xl text-xl flex justify-center items-center cursor-pointer hover:bg-blue-500 hover:text-white hover:shadow-xl">근처<br/><b class="px-1 contents">맛집</b>은?</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    components:{
        
    }
}
</script>

<style>

</style>