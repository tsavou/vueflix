<script setup>
import { $fetch } from 'ohmyfetch'
import { onBeforeMount, ref, computed } from 'vue'
import MovieCard from '../components/MovieCard.vue';
import loader from '@/components/Loader.vue';

const movies = ref([])
const loading = ref(true)
const topPopularity=ref([]);
const topRated=ref([]);
const randomSelection=ref([]);
const randomCategory=ref([]);

 $fetch(`http://localhost:3000/movies/`).then(response => {
  setTimeout(() => {
    movies.value = response
    loading.value = false

    topPopularity.value=(movies.value.sort((a, b) => b.popularity - a.popularity)).slice(0, 4);
    topRated.value=(movies.value.sort((a, b) => b.vote_average - a.vote_average)).slice(0, 4);
    randomSelection.value= (movies.value.sort(() => Math.random() - 0.5)).slice(0, 4);

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
    <loader v-if="loading"/>

    <div v-else>

      
      <h2 class="title">Films les plus populaires</h2>
      
      
      
      <div  class="movie-container">
        <MovieCard class="movie-card" v-for="movie in topPopularity" :movie="movie"/> 
        
      </div>
      
      <h2 class="title">Films les mieux notés</h2>
      
      <div class="movie-container">
        <MovieCard class="movie-card" v-for="movie in topRated" :movie="movie"/> 
        
      </div>
      <h2 class="title">Films aléatoires</h2>
      
      <div class="movie-container">
        <MovieCard class="movie-card" v-for="movie in randomSelection" :movie="movie"/> 
        
      </div>
      <h2 class="title">Films d'une catégorie aléatoire à faire</h2>
      
      <div class="movie-container">
        <MovieCard class="movie-card" v-for="movie in randomCategory" :movie="movie"/> 
        
      </div>
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