import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//引入重置样式
import './styles/reset.scss'
//引入全局样式
import "./styles/global.scss";
//引入element-plus自定义样式
import './styles/element/custom.scss'
//引入tailwindcss
import './styles/tailwind.css';

//引入字体图标
import './assets/icons/iconfont.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
