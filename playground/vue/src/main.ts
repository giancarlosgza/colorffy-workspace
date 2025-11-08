import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import CSS 
import './assets/external-deps.css'
import './assets/main.scss'

const app = createApp(App)

app.use(router)
// app.use(ColorfulUI) // Global Registration //

app.mount('#app')
