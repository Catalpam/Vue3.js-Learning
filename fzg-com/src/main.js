import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './element-variables.scss'
import installElementPlus from './plugins/element'

const app = createApp(App)
installElementPlus(app)
app.use(router).mount('#app')
