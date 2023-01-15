import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import mm from '@/plugin/math'
import components from '@/plugin/component'

import './assets/main.css'
import { fn } from '@/plugin/pinia/fn'
import { myPiniaPlugin } from '@/plugin/pinia/test'

const app = createApp(App)
const pinia = createPinia()
pinia.use(fn)
pinia.use(myPiniaPlugin)
pinia.use(() => ({'hello': 'world'}))
console.log('env', import.meta.env)
console.log('url', import.meta.url)
console.log('VITE_APP_TITLE', import.meta.env.VITE_APP_TITLE)
console.log('VUE_HAHA', import.meta.env.VUE_HAHA)
app.use(pinia)
app.use(router)
// 插件
app.use(mm, {
	a: 123
});
app.use(components)

app.mount('#app')
