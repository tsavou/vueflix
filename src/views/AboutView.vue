<script setup>
import Card from '@/components/Card.vue';
import { ref } from 'vue';

const users = [{
    id: 1,
    name: "Alexandre Martin",
    post: "Manager",
    bio: "Alexandre est un manager expérimenté avec une solide connaissance des pratiques de gestion d'équipe. Il aime aider son équipe à atteindre ses objectifs et à relever de nouveaux défis."
},
{
    id: 2,
    name: "Sophie Dubois",
    post: "Développeur Fullstack",
    bio: "Sophie est une développeuse passionnée par la création d'applications web performantes. Elle maîtrise aussi bien le frontend que le backend, ce qui lui permet de contribuer à tous les aspects du développement."
},
{
    id: 3,
    name: "Thomas Leroy",
    post: "Commercial",
    bio: "Thomas est un commercial dynamique ayant une expérience éprouvée dans la vente de produits technologiques. Il excelle dans la création de relations positives avec les clients et la compréhension de leurs besoins."
}
];

const selected = ref(null);

</script>

<template>
    <div class="container">

        <h1 class="title">A propos</h1>
        
        <div class="flex">
            <Card class="card" :user="user" v-for="user in users" :key="user.id" @opened="selected = user.id"
            :open="selected === user.id" />
        </div>
    </div>
</template>

<style scoped>
.flex {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
}

.card {
    width: 30%;
}

@media screen and (min-width: 601px) and (max-width: 1024px){
    .card {
        width: 60%;        
    }
    .flex{
        display: flex;
        justify-content: center;
    }
}
@media (max-width: 600px) {
    .card {
        width: 60%;
        display: flex;
        flex-direction: column;       
    }
    .flex{
        display: flex;
        justify-content: center;
    }
}
</style>

