import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/components/Home';
import Login from '@/components/Login';
import Join from '@/components/Join';
import Login2 from '@/components/Login2';
import JoinNext from '@/components/JoinNext';
import Buy from '@/components/Buy';
import Sell from '@/components/Sell';




const routes = [
    { path : '/', redirect:'/home'},
    { path : '/home', name:'Home', component:Home },
    { path : '/login', name:'Login', component:Login },
    { path : '/login2', name:'Login2', component:Login2 },
    { path : '/join', name:'Join', component:Join },
    { path : '/joinnext', name:'JoinNext', component:JoinNext },
    { path : '/buy', name:'Buy', component:Buy },
    { path : '/sell', name:'Sell', component:Sell },
    
    
    
];

const router = createRouter(
    { history : createWebHashHistory(), routes : routes }
);

export default router;