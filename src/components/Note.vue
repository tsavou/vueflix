<script setup>

const props = defineProps(['note'])
const note =  Math.ceil(props.note * 10)
const color = note >= 70 ? 'green' : note < 40 ? 'red' : 'yellow'


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