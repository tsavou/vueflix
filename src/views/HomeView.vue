<script setup>
import { $fetch } from 'ohmyfetch'
import { onBeforeMount, ref } from 'vue'
import MovieCard from '../components/MovieCard.vue';
import loader from '@/components/Loader.vue';

const movies = ref([])
const loading = ref(true)
// Mode asynchrone
$fetch('https://api.vueflix.boxydev.com/movies').then(response => {
  setTimeout(() => {
    movies.value = response
    loading.value = false
  }, 500)
})

// Mode synchrone
const genres = ref([]);
onBeforeMount(async () => {
  genres.value = await $fetch('https://api.vueflix.boxydev.com/genres')
})
</script>


<template>
  <div class="container">

    <h1 class="title">Bienvenue sur Vueflix</h1>
    <!-- <p v-if="loading">Chargement en cours...</p>
    {{ movies }} {{ genres }} -->

    <h2 class="title">Films les plus populaires</h2>

    <loader v-if="loading" />

    <div v-else class="movie-container">
      <MovieCard class="movie-card" v-for="movie in movies" :movie="movie" />

    </div>

   


  </div>
</template>

<style scoped>
.loader {
    height: 200px;
    

}

.movie-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 2%;

}

.movie-card {
    width: 18%;
    background-color: #fff;
    margin-bottom: 2%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;

}

</style>