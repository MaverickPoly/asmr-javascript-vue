import {defineStore} from "pinia";

/*
Note:
title, content
*/

export const useNotes = defineStore("notes", {
    state: () => ({notes: JSON.parse(localStorage.getItem("notes")) || []}),
    getters: {},
    actions: {
        updateLocalStorage() {
            localStorage.setItem("notes", JSON.stringify(this.notes))
        },
        createNote(title, content) {
            this.notes.push({title, content});

            this.updateLocalStorage()
        },
        deleteNote(index) {
            this.notes = this.notes.filter((note, id) => id !== index);
            this.updateLocalStorage()
        }
    }
});
