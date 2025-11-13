import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import CSS
import './assets/integrations.scss'
import './assets/main.scss'

const app = createApp(App)

app.use(router)
// app.use(ColorffyUI) // Global Registration //

app.mount('#app')
