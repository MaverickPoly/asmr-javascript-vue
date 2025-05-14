import {createRouter, createWebHistory} from "vue-router";
import ProfilePage from "@/pages/ProfilePage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import {useUsers} from "@/store/users.js";

const routes = [
    {path: "/", component: ProfilePage},
    {path: "/login", component: LoginPage},
    {path: "/register", component: RegisterPage},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


router.beforeEach((to, from, next) => {
    const usersStore = useUsers();
    if (to.path === '/' && !usersStore.currentUser) {
        next("/login");
    } else {
        next();
    }
});


export default router;
