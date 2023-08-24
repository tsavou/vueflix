<script setup>
import Button from '@/components/Button.vue';



const props = defineProps(['user', 'open']);
const emit = defineEmits(['opened']);

const toggleBio = () => {
    emit('opened', props.user)
};

</script>


<template>
    <div class="card-container">
        <div class="card-title">
            <img :src="`https://i.pravatar.cc/150?u=${user.id}`" alt="user photo">
            <h3>{{ user.name }}</h3>
        </div>

        <div class="card-content">
            <h4>{{ user.post }}</h4>
            <Button v-if="!open" @click="toggleBio">Voir la bio </Button>
            <p v-if="open">
                {{ user.bio }}
            </p>
        </div>
    </div>
</template>

<style scoped>
.card-container {
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    padding: 1em;
    box-shadow:0 1px 3px 3px #0000001a;

}

.card-title, .card-content {
    text-align: center;
    width: 50%;
}

h3{
    margin-top: 5px;
}

h4 {
    margin-bottom: 15px;
}

img {
    border-radius: 50%;
    max-width: 128px;
}
</style>


