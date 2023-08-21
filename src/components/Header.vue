<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const logged = ref(false)
const toggle = () => logged.value = !logged.value
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/a-propos">A propos</RouterLink>
    <button @click="toggle" v-if="!logged">Connexion</button>
    <div v-else class="user-logged">
      tsavou
      <img src="https://i.pravatar.cc/75?u=tsavou" alt="tsavou">
      <button @click="toggle">X</button>
    </div>
  </nav>
</template>

<style scoped>
.user-logged {
  display: inline;
}
</style>