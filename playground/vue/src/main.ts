import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import ColorfulUI from '@giancarlosgza/colorful-ui' // Global Registration //
import './assets/main.css'

const app = createApp(App)

app.use(router)
// app.use(ColorfulUI) // Global Registration //

app.mount('#app')
