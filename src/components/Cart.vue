<script setup>
import { useCartStore } from '@/stores/cart';
import Button from '@/components/Button.vue';

const store = useCartStore();
</script>


<template>
    <div class="cartlist" v-if="store.total > 0">

        <ul v-for="item in store.cart">

            <li>
                <img :src="item.movie.poster_path" :alt="item.movie.title" :title="item.movie.title" width="70">
            </li>
            <li>
                {{ item.movie.title }}
            </li>
            <li>
                <Button @click="store.remove(item)" class="delete-btn">X</Button>
            </li>
        </ul>
        <div class="btn">

            <Button @click="store.toggleCart()">Réduire</Button>
            <Button @click="store.clearCart()">Annuler mon panier</Button>
        </div>
    </div>
</template>

<style scoped>
.cartlist {
    background-color: #fff;
    padding: 1em;
    margin-bottom: 1em;
    border-radius: 10px;
    position: fixed;
    right: 15px;
    top: 76px;
    z-index: 2000;
    width: 300px;
    overflow-y: scroll;
    max-height: 80vh;
}

.cartlist ul {
    list-style: none;
    gap: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.cartlist h3 {
    position: fixed;
    background-color: #000000;



}

.delete-btn {
    padding: 0.5em;
}

.btn {
    display: flex;
    justify-content: space-around;
}
</style>