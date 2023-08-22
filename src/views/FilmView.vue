<script setup>
import MovieCard from '../components/MovieCard.vue';
import { ref } from 'vue'
import { $fetch } from 'ohmyfetch'

const movies = ref([])
const loading = ref(true)

$fetch('http://localhost:3000/movies ')
    .then(response => {
        setTimeout(() => {
            movies.value = response
            loading.value = false
        }, 0)
    })

</script>

<template>
    <h1 class="title">Films</h1>
    <p v-if="loading">Chargement en cours...</p>
    <div v-else class="movie-container">
        <MovieCard class="movie-card" v-for="movie in movies" :movie="movie" />
    </div>
</template>

<style scoped>

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
}

@media  (max-width: 1024px) {
    .movie-card {
        width: 20%;
    }
    
}

@media  (max-width: 740px) {
    .movie-card {
        width: 30%;
    }
    
}

@media  (max-width: 500px) {
     .movie-card {
        width: 100%;
    }
    
}
</style>