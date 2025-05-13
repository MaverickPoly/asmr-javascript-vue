import {ref} from "vue";

// https://api.themoviedb.org/3/search/movie?api_key=da128f0f40bdeb2660ba6801fe504117&language=en-US&query=Marvel&page=1&include_adult=true

export const useMovies = () => {
    const movies = ref(null);

    const fetchMovies = async (query) => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=da128f0f40bdeb2660ba6801fe504117&query=${query}`);
            const json = await response.json();
            movies.value = json.results;
        } catch (e) {
            console.error(e);
        }
    }

    return {movies, fetchMovies};
}