<script setup>


const props = defineProps (['movie'])
const note =parseInt(props.movie.vote_average * 10)
const color= note >=70 ?  'green': note<40 ?'red' : 'yellow'

</script>

<template>
    <figure>
        <div class="relative">
            <img :src="movie.poster_path" alt="">
            <div class="absolute">
                 <span class="note" :style="{ border: `solid 2px ${color}` }"> {{ note }}%</span>
            </div>           
        </div>
        <figcaption>
            <h3>{{ movie.title }}</h3>
            <p>{{movie.release_date}}</p>
        </figcaption>
    </figure>
</template>

<style scoped>


.relative{
    position: relative;
}

.absolute{
    position: absolute;
    bottom: 3%;
    left: 3%;
}
.note {
    border-radius: 50%;
    background-color: #000000;
    color:#fff;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;


}

img{
    width: 100%;
    border-radius:10px 10px 0 0 ;
}

figcaption{
    padding: 0.5em;
}
</style>