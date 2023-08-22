<script setup>
import { $fetch } from 'ohmyfetch'
import { ref } from 'vue'

const year = new Date().getFullYear();
const movieCount = ref(0);

$fetch('https://api.vueflix.boxydev.com/movies').then(response => {movieCount.value = response.length})

</script>

<template>
   <footer>
      <p>
         Copyright &copy; {{ year }}. Catalogue de <strong>{{ movieCount }}</strong> films</p>
   </footer>
</template>

<style scoped>
footer {
   text-align: center;
   margin-top: 40px;
   border-top: 1px solid #d1d5db;
   padding: 48px 0;
}
</style>