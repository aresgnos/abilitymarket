import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import LoadScript from 'vue-plugin-load-script';
 
  
// router 설정
import routes from './routes/index.js';

// veevalidate 설정
import VeeVallidator from "vee-validate"


loadFonts()

// 객체 생성
const app = createApp(App);

// 필요한 라이브러리
app.use(vuetify);
app.use(routes);
app.mount('#app')
app.use(LoadScript);
app.use(VeeVallidator)
