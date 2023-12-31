import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', {
    state: () => ({ 
        cart: [],
        cartOpened: false,
    }),

    getters: {
        total: (state) => state.cart.length,

        // OU
        // total(){
        //     return this.cart.length
        // }

        incart(state) {
            return (movie) => {
                return state.cart.find((item) => item.movie.id === movie.id)
            }

        }        
        
    },
    actions: {
        add(movie) {
            this.cart.push({ movie, quantity: 1 })
            this.cartOpened = true
        },
        remove(movie) {
            const item = this.cart.find((item) => item.movie.id === movie.id)

            this.cart.splice(this.cart.indexOf(item), 1)


        },

        toggleCart() {
            this.cartOpened = !this.cartOpened
        },

        clearCart() {
            this.cart = []
        }

    }

})