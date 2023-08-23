<script setup>
import Button from '@/components/Button.vue';
import note from '@/components/Note.vue';

const props = defineProps(['movie'])

const formatDate = (date) => {
    const day = new Date(date).getDate()
    const month = new Date(date).toLocaleDateString('fr-FR', { month: 'long' })
    const year = new Date(date).getFullYear()
    return `${day} ${month} ${year}`
}


</script>

<template>
    <div class="relative">
        <img :src="movie.poster_path" :alt="movie.title">
        <div class="absolute">
            <note :note="movie.vote_average"></note>
        </div>
    </div>
    <div class="card-footer">
        <h3>{{ movie.title }}</h3>
        <p>{{ formatDate(movie.release_date) }}</p>
        <Button>Ajouter au panier</Button>
    </div>
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

img {
    width: 100%;
    border-radius: 10px 10px 0 0;
}


.card-footer {
    padding: 0.75em;
    height: 100%;
    padding: 0.75em;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

}

h3{
    color: #000000;
}

p {
    color: #858585;

}
</style>