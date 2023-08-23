<script setup>
import { useRoute } from 'vue-router'
import { $fetch } from 'ohmyfetch'
import { ref } from 'vue'

const route = useRoute();
const movie = ref({})

const getMovie = (id) => $fetch(`http://localhost:3000/movies/${id}?_expand=genre&_expand=actors`)

getMovie(route.params.id).then(response => {
    movie.value = response
})

const getReleaseYear = (date) => {
    return new Date(date).getFullYear();
}








</script>

<template>
    <div class="info-container">
        <img :src="movie.poster_path" :alt="movie.title">
        <h2>{{ movie.title }}</h2><span>{{ getReleaseYear(movie.release_date) }}</span>
        <p>{{ movie.release_date }}-{{movie.genre.name}}-{{ movie.runtime}} min </p>
        <span class="note" :style="{ border: `solid 2px ${color}` }"> {{ note }}%</span>
        <p>{{ movie.tagline }}</p>
        <p>Synopsis</p>
        <p>{{ movie.overview }}</p>
    

    
    </div>
</template>