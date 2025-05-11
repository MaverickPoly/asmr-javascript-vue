import {ref} from "vue";

export const useCounter = () => {
    const count = ref(0);

    const increment = function () {count.value++};
    const decrement = function () {count.value--};

    return {count, increment, decrement};
}