import {ref} from "vue";

export const useTodo = () => {
    const todos = ref(JSON.parse(localStorage.getItem("todos")) || []);

    // Title, Completed

    const updateLocalStorage = () => {
        localStorage.setItem("todos", JSON.stringify(todos.value));
    }

    const addTodo = (title) => {
        todos.value = [...todos.value, {title, completed: false}];
        updateLocalStorage();
    }
    const toggleComplete = (id) => {
        todos.value = todos.value.map((todo, index) => index === id ? {...todo, completed: !todo.completed} : todo);
        updateLocalStorage();
    }

    const deleteTodo = (id) => {
        todos.value = todos.value.filter((todo, index) => index !== id);
        updateLocalStorage();
    }

    return {todos, addTodo, toggleComplete, deleteTodo};
}