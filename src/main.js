import { createApp } from 'vue'
import App from './App.vue'

//router 설정
import routes from './routes/index.js';

//1. 객체생성
const app = createApp(App);

//2. 여기에 필요한 라이브러리 설정하기
app.use(routes);

//3. 마운트
app.mount('#app');