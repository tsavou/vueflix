<script setup>

import { computed } from 'vue'

const props = defineProps(['note'])
const note = computed (() =>  Math.ceil(props.note * 10));
const color = computed(() => note.value >= 70 ? 'green' : note.value < 40 ? 'red' : 'yellow')

</script>


<template>        
    <span class="note" :style="{ border: `solid 2px ${color}` }"> {{ note }}%</span>
</template>

<style scoped>

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
</style>