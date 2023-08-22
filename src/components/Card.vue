<script setup>
import { ref } from 'vue';
import Button from './Button.vue';


const showBio = ref(false);

const toggle = () => {
    if (!showBio.value) {

    }
    showBio.value = !showBio.value;
};

const props = defineProps(['user']);

</script>


<template>
    <div class="card-container">
        <div class="card-title">
            <img :src="`https://i.pravatar.cc/150?u=${user.id}`" alt="user photo">
            <h3>{{ user.name }}</h3>
        </div>

        <div class="card-content">
            <h4>{{ user.post }}</h4>
            <Button v-if="!showBio" @click="toggle">Voir la bio </Button>
            <p v-else>
                {{ user.bio }}
            </p>
        </div>
    </div>
</template>

<style scoped>
.card-container {
    display: flex;
    align-items: center;
    background-color: aliceblue;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    
}

.card-title, .card-content {
    text-align: center;
    width: 50%;    
}

h4{
    margin: 10px;
}

</style>


