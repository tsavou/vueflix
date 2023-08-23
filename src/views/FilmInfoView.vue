<script setup>
import { useRoute } from 'vue-router'
import { $fetch } from 'ohmyfetch'
import { ref } from 'vue'
import Note from '@/components/Note.vue'

const route = useRoute();
const movie = ref({});


const getMovie = (id) => $fetch(`http://localhost:3000/movies/${id}?_expand=genre&_expand=actors`)

getMovie(route.params.id).then(response => {
    movie.value = response
})

const getReleaseYear = (date) => {
    return new Date(date).getFullYear();
}








</script>

<template>
    <div class="info-container" :style="{ backgroundImage: `url(${movie.backdrop_path})` }">
        <img :src="movie.poster_path" :alt="movie.title">
        <h2>{{ movie.title }}</h2><span>{{ getReleaseYear(movie.release_date) }}</span>
        <p>{{ movie.release_date }}-{{movie.genre.name}}-{{ movie.runtime}} min </p>
        <Note :note="movie.vote_average"/>
        <a href=""><img src="../assets/svg/play.svg" alt="play trailer"> Voir la bande annonce</a>


        <p>{{ movie.tagline }}</p>
        <p>Synopsis</p>
        <p>{{ movie.overview }}</p>
    

    
    </div>
    <div class="casting">
        <!-- composant acteur -->
    </div>
</template>

<style scoped>

.info-container{
    background-size: cover;
    background-position: center;
}
a{
    display: flex;
    align-items: center;
}

</style>