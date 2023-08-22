<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

</script>

<template>
  <Header />
  <div class="container">
    <RouterView />
  </div>
  <Footer />
</template>




