//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
//引入组件
import Home from '../page/HomeView.vue'
import About from '../page/AboutView.vue'
import News from '../page/New.vue'
import Message from '../page/Message.vue'

//创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'news',
                    component:News
                },
                {
                    path:'message',
                    component:Message
                }
            ]
        }
    ]
})
