import {ref} from "vue";

export const useRecipes = () => {
    const recipes = ref(JSON.parse(localStorage.getItem("recipes")) || []);
    
    const updateStorage = () => {
        localStorage.setItem("recipes", JSON.stringify(recipes.value));
    }

    // title, description, imageUrl
    const addRecipe = ({title, description, imageUrl}) => {
        recipes.value = [...recipes.value, {title, description, imageUrl}];
        updateStorage();
    }

    const deleteRecipe = (index) => {
        recipes.value = recipes.value.filter((recipe, id) => id !== index);
        updateStorage();
    }

    return {recipes, addRecipe, deleteRecipe};
}