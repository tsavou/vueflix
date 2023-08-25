<script setup>
import { useRoute } from 'vue-router'
import { $fetch } from 'ohmyfetch'
import { ref, computed } from 'vue'
import Note from '@/components/Note.vue'
import loader from '@/components/loader.vue'
import Modal from '../components/Modal.vue'


const route = useRoute();
const movie = ref({});
const loading = ref(true);


const getMovie = (id) => $fetch(`http://localhost:3000/movies/${id}?_expand=genre&_expand=actors`)

getMovie(route.params.id).then(response => {
    movie.value = response
    loading.value = false
})

const Year = computed(() => new Date(movie.value.release_date).getFullYear());

const duration = computed(() => {
    const hours = Math.floor(movie.value.runtime / 60);
    const min = movie.value.runtime % 60;

    return `${hours}h${min < 10 ? '0' + min : min}`
})

const age = (date) => {
    const today = new Date()
    const birthday = new Date(date)

    if (today.getMonth() < birthday.getMonth()) {
        return today.getFullYear() - birthday.getFullYear() - 1
    } else {
        return today.getFullYear() - birthday.getFullYear()
    }

}

const showModal = ref(false);



</script>

<template>
    <div v-if="!loading">
        <div class="movie-container" :style="{ backgroundImage: `url(${movie.backdrop_path})` }">
            <div class="movie-bg">
                <div class="container">
                    <div class="flex-movie">


                        <img class="movie-poster" :src="movie.poster_path" :alt="movie.title">

                        <div class="movie-content">


                            <h1>{{ movie.title }} <span class="year">({{ Year }})</span></h1>
                            <p>{{ new Date(movie.release_date).toLocaleDateString('fr-FR') }} - {{ movie.genre?.name }} - {{
                                duration }} </p>

                            <div class="movie-note">

                                <Note :note="movie.vote_average" />
                                <button id="show-trailer" @click="showModal=true"><img src="../assets/svg/play.svg" alt="play trailer"> Voir la bande annonce</button>
                            </div>

                            <div class="synopsis-content">
                                <p class="movie-tagline">{{ movie.tagline }}</p>
                                <h3 class="synopsis">Synopsis</h3>
                                <p>{{ movie.overview }}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>

        <teleport to='body'>
            <Modal :show="showModal" @close="showModal=false">
            <template #body> 
                <iframe width="100%" height="500" :src="`https://www.youtube.com/embed/${movie.youtube}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </template>
            

            </Modal>
        </teleport>           




        <div class="casting">
            <div class="container">
                <h2>Casting</h2>

                <div class="actor-list">


                    <div class="actor-card" :style="{ order: `${actor.order}` }" v-for="actor in movie.actors">
                        <img class="actor-photo" :src="actor.profile_path" alt="actor photo">
                        <div class="card-footer">
                            <h3>{{ actor.name }} ({{ age(actor.birthday) }} ans)</h3>
                            <p class="character">{{ actor.character }}</p>
                        </div>
                    </div>

                </div>






            </div>

        </div>
    </div>
    <loader v-else />
</template>



<style scoped>
.loader {
    height: 200px;
}

.movie-container {
    background-size: cover;
    background-position: center;
}

.movie-bg {
    background-color: rgba(0, 0, 0, 0.75);
    padding: 0 40px;
    color: #fff
}

.flex-movie {
    display: flex;
    align-items: center;
    padding: 40px 0;
    gap: 40px;

}

.movie-poster {
    height: 400px;
    width: auto;
}

.year{
    font-weight:100;
}

.movie-note {
    display: flex;
    align-items: center;
    margin: 0.5em 0;
    gap: 1.5em;


}

.movie-note button {

    padding: 10px 15px;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 1em;
    background-color: rgba(0, 0, 0, 0);
    border: 0;
    cursor: pointer;
    font-size: 1em;

}

.movie-note button:hover {
    scale: 1.1;
}

.movie-tagline {
    font-style: italic;
}

.synopsis {
    margin: 1em 0;
}

.actor-list {
    display: flex;
    flex-wrap: wrap;
    gap: 2%;
}

.actor-card {
    box-shadow: 0 1px 3px 3px #0000001a;
    width: 18%;
    background-color: #fff;
    margin-bottom: 2%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
}

.actor-photo {
    border-radius: 10px 10px 0 0;
    height: 250px;
    width: 100%;
    object-fit: cover;
}

.character {
    color: #858585;
}

.card-footer {
    height: 100%;
    padding: 1em;
}

.card-footer h3 {
    font-size: 16px;

}

h2 {
    margin: 1em 0;
}
</style>