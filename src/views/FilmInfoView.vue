<script setup>
import { useRoute } from 'vue-router'
import { $fetch } from 'ohmyfetch'
import { ref, computed } from 'vue'
import Note from '@/components/Note.vue'

const route = useRoute();
const movie = ref({});


const getMovie = (id) => $fetch(`http://localhost:3000/movies/${id}?_expand=genre&_expand=actors`)

getMovie(route.params.id).then(response => {
    movie.value = response
})

const Year = computed( () =>  new Date(movie.value.release_date).getFullYear());









</script>

<template>
    <div class="movie-container" :style="{ backgroundImage: `url(${movie.backdrop_path})` }">
        <div class="movie-bg">
            <div class="container">

                <img class="movie-poster" :src="movie.poster_path" :alt="movie.title">

                <div class="movie-content">


                    <h1>{{ movie.title }} <span>({{ Year }})</span></h1>
                    <p>{{ movie.release_date }}-{{ movie.genre.name }}-{{ movie.runtime }} min </p>
                    <Note :note="movie.vote_average" />
                    <button><img src="../assets/svg/play.svg" alt="play trailer"> Voir la bande annonce</button>


                    <p>{{ movie.tagline }}</p>
                    <p>Synopsis</p>
                    <p>{{ movie.overview }}</p>
                </div>

            </div>
        </div>


    </div>
    <div class="casting">
        <!-- composant acteur -->
    </div>
</template>

<style scoped>
.movie-container {
    background-size: cover;
    background-position: center;
}

.movie-bg {
    background-color: rgba(0, 0, 0, 0.75);
    padding: 0 40px;
    color: #fff
}

.container{
    display: flex;
    align-items: center;
    padding:40px 0;
    gap: 40px;

}

.movie-poster{    
    height: 400px;
    width: auto;
}


</style>