import {createRouter, createWebHistory} from "vue-router";
import NotesPage from "@/pages/NotesPage.vue";
import CreatePage from "@/pages/CreatePage.vue";

const routes = [
    {path: "/", component: NotesPage},
    {path: "/create", component: CreatePage},
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
});

