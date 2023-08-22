<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import Button from '@/components/Button.vue'

const logged = ref(false)
const toggle = () => logged.value = !logged.value
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/a-propos">A propos</RouterLink>
    <Button @click="toggle" v-if="!logged">Connexion</Button>

    <div v-else class="user-logged">
      tsavou
      <img src="https://i.pravatar.cc/75?u=tsavou" alt="tsavou">
      <Button @click="toggle">x</Button>
     
    </div>
  </nav>
</template>

<style scoped>
.user-logged {
  display: inline;
}

nav{
  background-color: #3a4050;
}

</style>