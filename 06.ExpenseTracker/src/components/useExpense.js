import {computed, ref} from "vue";

export const useExpense = () => {
    /*
    {
      id, title, type, amount
    }
    type: expense, earning
     */

    const allItems = ref(JSON.parse(localStorage.getItem("allExpenses")) || []);

    const updateLocalStorage = () => {
        localStorage.setItem("allExpenses", JSON.stringify(allItems.value));
    }

    const addItem = (title, type, amount) => {
        const id = Date.now();
        allItems.value = [...allItems.value, {id, title, type, amount}];
        updateLocalStorage();
    }

    const deleteItem = (index) => {
        allItems.value = allItems.value.filter((item) => item.id !== index)
        updateLocalStorage();
    }

    const expenses = computed(() => {
        return allItems.value.filter((item) => item.type === "expense");
    })

    const earnings = computed(() => {
        return allItems.value.filter((item) => item.type === "earning");
    })

    const total = computed(() => {
        const minus = expenses.value.reduce((acc, item) => acc + item.amount, 0);
        const plus = earnings.value.reduce((acc, item) => acc + item.amount, 0);
        return plus - minus;
    })

    return {allItems, addItem, deleteItem, expenses, earnings, total};
}