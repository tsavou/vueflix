<script setup>
import MovieCard from '@/components/MovieCard.vue';
import Button from '@/components/Button.vue';
import loader from '@/components/loader.vue';
import { ref } from 'vue'
import { $fetch } from 'ohmyfetch'
import { useCartStore } from '@/stores/cart';


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

const store = useCartStore();

</script>

<template>
    <div class="container">

        <h1 class="title">Films</h1>

        <ul class="cartlist">
            <li v-for="item in store.cart">
                <img :src="item.movie.poster_path" :alt="item.movie.title" :title="item.movie.title" width="50">            
        </li>
        </ul>
        
        <loader v-if="loading" />
        
        <div v-else class="movie-container">
                <MovieCard class="movie-card" v-for="movie in movies" :movie="movie" />
            
        </div>
        
        <div class="page">
            <Button :disabled="page<=1" @click="PreviousPage"><img src="../assets/svg/previous.svg" alt=""></Button>
            <p>
                <span class="other-page" v-if="page>1" @click="PreviousPage" >{{ page-1 }}</span>
                <strong id="page"> {{ page }} </strong>
                <span class="other-page" v-if="page<4" @click="NextPage">{{ page+1 }}</span>
            </p>
            <Button :disabled="page>=4" @click="NextPage"><img src="../assets/svg/next.svg" alt=""></Button>
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



button {
    font-size: 1.5em;
    margin: auto;

}

button:disabled {
    cursor: not-allowed;
    background-color: #d1d5db;
}

img{
    /* background-color: #b91c1c; */
}

.page {
    display: flex;
    justify-content: center;
    align-items: end;
    
}

#page{
    font-size: 1.2em;
    padding: 0 4px;
    box-shadow: 0 0 0 3px #d1d5db;
  
}

.other-page{
    cursor: pointer;
    margin: 0 0.5em;    
}

.other-page:hover{    
    text-decoration: underline;
    font-weight: bold;
    font-size: 1.2em;
    padding: 0 4px;
    box-shadow: 0 0 0 3px #d1d5db;   
    
}

.cartlist{
    display: flex;
    gap:10px;
    list-style: none;
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