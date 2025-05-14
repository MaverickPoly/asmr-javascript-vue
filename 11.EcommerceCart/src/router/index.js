import {createRouter, createWebHistory} from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import CartPage from "@/pages/CartPage.vue";

const routes = [
    {path: "/", component: HomePage},
    {path: "/cart", component: CartPage},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
