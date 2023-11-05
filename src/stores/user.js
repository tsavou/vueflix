import { defineStore } from "pinia";
import { $fetch } from 'ohmyfetch'

export const useUserStore = defineStore('user', {
    state: () => ({ user: null }),

    getters: {
        logged: (state) => state.user,
        avatar() {
            return `https://i.pravatar.cc/75?u=${this.user?.username}`
    }
    },

    actions: {
        login(username, password) {
            return $fetch('http://localhost:3000/login', {
                method: 'POST',
                body: {
                    username,
                    password
                }
            })
                .then((response) => {
                    this.user = {
                        username: response.user.name,
                    }                    
                })
            
        },
        logout() {
            this.user = null
        }
    }


})