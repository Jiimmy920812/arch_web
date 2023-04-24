import { createApp ,markRaw} from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/base.css'


const pinia = createPinia();
// 讓$this.router.push能在pinia使用
pinia.use(({ store }) => {
  store.router = markRaw(router);
});

const app = createApp(App)

app.use(router);
app.use(pinia);

app.mount('#app')
