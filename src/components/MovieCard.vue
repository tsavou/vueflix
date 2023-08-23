<script setup>
import Button from '@/components/Button.vue';

const props = defineProps(['movie'])
const note = Math.ceil(props.movie.vote_average * 10)
const color = note >= 70 ? 'green' : note < 40 ? 'red' : 'yellow'

const formatDate = (date) => {
    const day = new Date(date).getDate()
    const month = new Date(date).toLocaleDateString('fr-FR', { month: 'long' })
    const year = new Date(date).getFullYear()
    return `${day} ${month} ${year}`
}


</script>

<template>
    <figure>
        <div class="relative">
            <img :src="movie.poster_path" :alt="movie.title">
            <div class="absolute">
                <span class="note" :style="{ border: `solid 2px ${color}` }"> {{ note }}%</span>
            </div>
        </div>
        <figcaption>
            <h3>{{ movie.title }}</h3>
            <p>{{ formatDate(movie.release_date) }}</p>
            <Button>Ajouter au panier</Button>            
        </figcaption>
    </figure>
</template>

<style scoped>

.relative {
    position: relative;
}

.absolute {
    position: absolute;
    bottom: 3%;
    left: 3%;
}

.note {
    border-radius: 50%;
    background-color: #000000;
    color: #fff;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.4em;


}

img {
    width: 100%;
    border-radius: 10px 10px 0 0;
}

figure{
    display: flex;
    flex-direction: column;
}

figcaption {
    padding: 0.75em ;
    height: 100%;
    padding: 0.75em;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    
}

p {
    color: #858585;
   
}

figure:hover{
    cursor: pointer;
    opacity: 0.8;
    scale: 1.1;
    box-shadow: #000000 0px 0px 20px;
    z-index: 100;
}
</style>