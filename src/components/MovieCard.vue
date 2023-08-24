<script setup>
import Button from '@/components/Button.vue';
import note from '@/components/Note.vue';
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import slugify from 'slugify'

const props = defineProps(['movie'])

const formatDate = (date) => {
    const day = new Date(date).getDate()
    const month = new Date(date).toLocaleDateString('fr-FR', { month: 'long' })
    const year = new Date(date).getFullYear()
    return `${day} ${month} ${year}`
}

const showBio = ref(false)

const slug = (title) => slugify(title, { lower: true })

</script>

<template>
    <div>

        <RouterLink :to="`/films/${movie.id}-${slug(movie.title)}`" @mouseover="showBio = !showBio" @mouseout="showBio = !showBio" class="relative">
            <img :src="movie.poster_path" :alt="movie.title">

            <div class="absolute">
                <div class="tagline" v-if="showBio" >{{ movie.tagline }}</div>
                <note :note="movie.vote_average"></note>
            </div>
        </RouterLink>
        <div class="card-footer">
            <RouterLink :to="`/films/${movie.id}`" class="">
                <h3>{{ movie.title }}</h3>
            </RouterLink>
            <p>{{ formatDate(movie.release_date) }}</p>
            <Button>Ajouter au panier</Button>
        </div>
    </div>
</template>

<style scoped>
.relative {
    position: relative;
    
}

.absolute {
    position: absolute;
    bottom: -4%;
    left: 2%;
}

.tagline {
    color: #000000;
    font-weight: 700;
    text-align: center;
    
  
  

}
.tagline:hover+img{
    opacity: 0.5;
}

img {
    width: 100%;
    border-radius: 10px 10px 0 0;
}

img:hover {
    opacity: 0.5;
}


.card-footer {
    padding: 0.75em;
    height: 100%;
    padding: 0.75em;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

}

h3 {
    color: #000000;
}

h3:hover{
    text-decoration: underline;
    
}

p {
    color: #858585;

}


</style>