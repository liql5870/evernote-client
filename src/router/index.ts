import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Login from "@/components/Login.vue"
import NotebookList from "@/components/NotebookList.vue";
import NoteDetail from "@/components/NoteDetail.vue";
import TrashDetail from "@/components/TrashDetail.vue"
import App from "@/App.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Root',
        component: App,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/notebooks",
        name: "Notebooks",
        component: NotebookList,
    },
    {
        path: "/note/:noteId",
        name: "NoteDetail",
        component: NoteDetail
    },
    {
        path: "/trash/:noteId",
        name: "TrashDetail",
        component: TrashDetail,
    },
]

const router = new VueRouter({
    mode: 'hash',
    routes
})


export default router
