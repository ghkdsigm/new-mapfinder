import { createRouter, createWebHistory} from 'vue-router'
import Home from '../pages/Home.vue'
import Weather from '../pages/Weather.vue'
import NotFound from './NotFound.vue'

const routes = [
    { path: '/', name: 'home', component: Home},
    { path: '/weather', name: 'weather', component: Weather},
    {
      path: "/:pathMatch(.*)*",  name: "notFound", component: NotFound,
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})

//네비게이션 가드
// router.beforeEach((to, from, next) => {
//     const currentUser = store.state.user;
//     const requireAuth = to.matched.some(record => record.meta.requireAuth) //some 함수는 하나라도 해당 되는게 있으면 true를 반환 requreAuth가있으면 true를 반환
//     if(requireAuth && !currentUser){
//         next('/login')
//         alert('로그인이 필요합니다.')
//     }
//     else next()
// })

export default router