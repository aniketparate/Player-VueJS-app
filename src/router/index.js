import Vue from "vue";
import Router from 'vue-router'
import HelloWorld from "../components/HelloWorld.vue";
import PlayerList from "../components/PlayerList.vue";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HelloWorld
        },
        {
            path: '/players',
            name: 'Players',
            component: PlayerList
        }
    ]
})