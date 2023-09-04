<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { useCartStore } from './stores/cart';
import Cart from '@/components/Cart.vue';

const cartstore=useCartStore();

</script>

<template>
  <Header />
  <Cart v-if="cartstore.cartOpened"/>
    <RouterView />
  <Footer />
</template>




