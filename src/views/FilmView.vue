<script setup>
import MovieCard from '@/components/MovieCard.vue';
import Button from '@/components/Button.vue';
import loader from '@/components/loader.vue';
import { ref } from 'vue'
import { $fetch } from 'ohmyfetch'
import { RouterLink } from 'vue-router'

const movies = ref([])
const loading = ref(true)
const page = ref(1)
const getMovies = (page) => $fetch(`http://localhost:3000/movies?_page=${page}&_limit=10`)

getMovies().then(response => {
    setTimeout(() => {
        movies.value = response
        loading.value = false
    }, 1000)
})

const NextPage = () => {
    loading.value = true
    getMovies(++page.value).then(response => {
        setTimeout(() => {
            movies.value = response
            loading.value = false
        }, 500)
    })

}
const PreviousPage = () => {
    loading.value = true
    getMovies(--page.value).then(response => {
        setTimeout(() => {
            movies.value = response
            loading.value = false
        }, 500)
    })

}

</script>

<template>
    <div class="container">

        <h1 class="title">Films</h1>
        <p class="loader" v-if="loading">
            <loader />
        </p>
        <div v-else class="movie-container">
            <RouterLink class="movie-card" :to="`/films/${movie.id}`" v-for="movie in movies"   >
                <MovieCard  :movie="movie" />
            </RouterLink>
            
        </div>
        
        <div class="page">
            <Button :disabled="page<=1" @click="PreviousPage"><img src="../assets/svg/previous.svg" alt=""></Button>
            <p id="page">{{ page }}</p>
            <Button :disabled="page>=4" @click="NextPage"><img src="../assets/svg/next.svg" alt=""></Button>
        </div>
    </div>
</template>

<style scoped>
.loader {
    text-align: center;

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

.movie-card:hover{
    cursor: pointer;
    opacity: 0.8;
    scale: 1.1;
    box-shadow: #000000 0px 0px 20px;
    z-index: 100;
}

button {
    font-size: 1.5em;
    margin: auto;

}

button:disabled {
    cursor: not-allowed;
    background-color: #d1d5db;
}

img{
    background-color: #b91c1c;
}

.page {
    display: flex;
    justify-content: center;
    align-items: center;
    
}

#page{
    font-size: 1.2em;
    font-weight: 700;
}

@media (max-width: 1024px) {
    .movie-card {
        width: 20%;
    }

}

@media (max-width: 740px) {
    .movie-card {
        width: 30%;
    }

}

@media (max-width: 500px) {
    .movie-card {
        width: 100%;
    }

}
</style>