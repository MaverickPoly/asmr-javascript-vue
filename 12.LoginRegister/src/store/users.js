import {defineStore} from "pinia";


/*
User:
{
username, email, password, createdAt
}
 */

export const useUsers = defineStore("users", {
    state: () => ({
        users: JSON.parse(localStorage.getItem("users")) || [],
        currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
    }),
    getters: {},
    actions: {
        login({username, password}) {
            let foundUser = null;
            for (let user of this.users) {
                if (user.username === username) {
                    foundUser = user;
                }
            }
            if (foundUser) {
                if (foundUser.password === password) {
                    localStorage.setItem("currentUser", JSON.stringify(foundUser));
                    this.currentUser = foundUser;
                    return {error: false, message: "Logged in successfully!"};
                } else {
                    return {error: true, message: "Incorrect password!"};
                }
            } else {
                return {error: true, message: "Incorrect username!"};
            }
        },
        register({username, email, password}) {
            const newUser = {
                username, email, password, createdAt: Date.now(),
            }

            for (let user of this.users) {
                if (user.username === newUser.username) {
                    return {error: true, message: "Username already exists!"};
                }
            }

            this.users.push(newUser);
            localStorage.setItem("users", JSON.stringify(this.users));
            return {error: false, message: "Registered successfully!"};
        },
        logout() {
            localStorage.removeItem("currentUser");
        }
    }
});

