<script setup>
import { useCartStore } from '@/stores/cart';

const store = useCartStore();
</script>


<template>
     <div class="cartlist" v-if="store.total > 0">

<ul v-for="item in store.cart">

    <li >
        <img :src="item.movie.poster_path" :alt="item.movie.title" :title="item.movie.title" width="70">
    </li>
    <li>
        {{ item.movie.title }}
    </li>
</ul>
</div>
</template>

<style scoped>
.cartlist {
    background-color: #fff;
    padding:1em ;
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
}

.cartlist h3{
    position: fixed;
    background-color: #000000;
    


    }
</style>