import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import AudioView from '@/views/AudioView.vue'
import PhotosView from '@/views/PhotosView.vue'
import AdminView from '@/views/AdminView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/audio', component: AudioView },
    { path: '/photos', component: PhotosView },
    { path: '/admin', component: AdminView }
  ]
})

export default router
