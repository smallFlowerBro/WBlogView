import { createApp } from 'vue'
import { createPinia } from 'pinia'

//import  App  from './App.vue'
import router from './router'
import Index from './Index.vue'
import store from './lib/store'
import './assets/main.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/lib/common'
import globalConfig from './global'
import CommonDirective from './plugin/CommonDirective'

const app = createApp(Index)
app.use(createPinia())
app.use(store)
app.use(ElementPlus)
//路由
app.use(router)
//自定义指令
app.use(CommonDirective)
//全局配置
app.use(globalConfig)
app.mount('#app')
