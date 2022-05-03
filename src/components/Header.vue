<template>
  <header>
    <Logo />
    <div class="nav nav-pills lg:w-2/5 w-3/4 mx-auto flex justify-between">
      <div
        v-for="nav in navigations"
        :key="nav.name"
        class="nav-item font-bold lg:text-2xl text-2xl w-1/2 transition-all ease-in-out text-center cursor:pointer py-3 rounded-xl hover:bg-blue-50 hover:text-blue-500">
        <RouterLink
          :to="nav.href"
          active-class="active"
          class="nav-link block w-full cursor-pointer"><!--class="{ active: isMatch(nav.path) }"--> <!--active-class="active"-->
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from './Logo.vue'
export default {
  components: {
    Logo
  },
  data() {
    return {
      navigations: [
        {
          name: '홈',
          href: '/'
        },
        {
          name: '날씨',
          href: '/weather'
        },
      ]
    }
  },
  //methods: {
    // isMatch(path) {
    //   if (!path) return false
    //   return path.test(this.$route.fullPath)
    // },
    // toAbout() {
    //   this.$router.push('/about')
    // }
  //}
}
</script>


<style scoped>
.router-link-exact-active {color:#3b82f6;}
</style>