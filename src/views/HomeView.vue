<script setup>
import { $fetch } from 'ohmyfetch';
import { onBeforeMount, ref, computed } from 'vue';
import MovieCard from '@/components/MovieCard.vue';
import loader from '@/components/Loader.vue';

const movies = ref([])
const loading = ref(true)
const topPopularity = ref([]);
const topRated = ref([]);
const randomSelection = ref([]);

$fetch(`http://localhost:3000/movies/`).then(response => {
  setTimeout(() => {
    movies.value = response
    loading.value = false

    topPopularity.value = (movies.value.sort((a, b) => b.popularity - a.popularity)).slice(0, 5);
    topRated.value = (movies.value.sort((a, b) => b.vote_average - a.vote_average)).slice(0, 5);
    randomSelection.value = (movies.value.sort(() => Math.random() - 0.5)).slice(0, 5);

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

    <h1 class="title">Bienvenue sur Vueflix !</h1>

    <div class="about">
      <p>Découvrez le Monde du Cinéma en Un Clic ! </p>
      <p>Vueflix est votre guichet unique pour l'univers du cinéma. Avec une vaste collection de films, des descriptions
        complètes, des notations, et des avis d'utilisateurs, c'est l'endroit parfait pour les amateurs de cinéma.
        Explorez
        et restez informé des dernières nouvelles cinématographiques. Préparez-vous à vivre une expérience cinéphile
        inégalée avec Vueflix. </p>
    </div>


    <loader v-if="loading" />

    <div v-else>


      <h2>Films les plus populaires</h2>



      <div class="movie-container">
        <MovieCard class="movie-card" v-for="movie in topPopularity" :movie="movie" />

      </div>

      <h2>Films les mieux notés</h2>

      <div class="movie-container">
        <MovieCard class="movie-card" v-for="movie in topRated" :movie="movie" />

      </div>
      <h2>Films aléatoires</h2>

      <div class="movie-container">
        <MovieCard class="movie-card" v-for="movie in randomSelection" :movie="movie" />

      </div>

    </div>





  </div>
</template>

<style scoped>

.about {
  padding: 1rem;
  background-color: #3a4050;
  border-radius: 10px;
  color: #fff;
}
.loader {
  height: 200px;
}

.movie-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2%;

}

h2 {
  text-align: center;
  margin: 2rem 0 1rem 0;
  font-size: 30px;
}

.movie-card {
  width: 18%;
  background-color: #fff;
  margin-bottom: 1rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;

}


@media (max-width: 1024px) {
    .movie-card {
        flex-basis: calc(100% / 4 - 1rem);
    }

}

@media (max-width: 740px) {
    .movie-card {
        flex-basis: calc(100% / 3 - 1rem);
    }

}

@media (max-width: 500px) {
    .movie-card {
       flex-basis: calc(100%/2 - 1rem); ;

    }

}
</style>