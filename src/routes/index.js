import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/components/Home';
import Login from '@/components/Login';
import Join from '@/components/Join';
import Test from '@/components/Test';

const routes = [
    { path : '/', redirect:'/home'},
    { path : '/home', name:'Home', component:Home },
    { path : '/login', name:'Login', component:Login },
    { path : '/join', name:'Join', component:Join },
    { path : '/test', name:'Test', component:Test },
];

const router = createRouter(
    { history : createWebHashHistory(), routes : routes }
);

export default router;