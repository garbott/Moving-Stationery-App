import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { applySeoForRoute } from './utils/seo'
import './style.css'

const app = createApp(App)

app.use(router)

router.isReady().then(() => {
  applySeoForRoute(router.currentRoute.value)
})

app.mount('#app')
