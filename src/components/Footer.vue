<script setup>
import { ref } from 'vue';

const year = new Date().getFullYear();
const movieCount = 24686;

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