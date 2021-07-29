import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Antdv from './plugins/use'

const app = createApp(App)
Antdv(app)
app.use(store).use(router)
app.mount('#app')
