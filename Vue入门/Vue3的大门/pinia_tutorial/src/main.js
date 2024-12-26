
import { createApp } from 'vue'
import { createPinia } from 'pinia' // 导入Pinia'仓库创建器'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia()) // 给当前实例'正式安装'上Pinia插件 (虽是自动生成的，但也要了解)

app.mount('#app')
