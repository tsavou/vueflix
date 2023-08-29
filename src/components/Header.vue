<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import Button from '@/components/Button.vue'

const logged = ref(false)
const toggle = () => logged.value = !logged.value
</script>

<template>
  <header>

    <div class="container">
      <div class="flex">
        <h1>
          <RouterLink to="/">Vue<span class="red">Flix</span></RouterLink>
        </h1>      
        
        
        <nav class="flex">
          <RouterLink to="/">Accueil</RouterLink>
          <RouterLink to="/films">Films</RouterLink>
          <RouterLink to="/a-propos">A propos</RouterLink>
          <Button @click="toggle" v-if="!logged" class="user-not-logged">Connexion</Button>
          
          <div v-else class="user-logged">
            <strong>tsavou</strong>
            <img src="https://i.pravatar.cc/75?u=tsavou" alt="tsavou">
            <Button @click="toggle">X</Button>
            
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
.user-logged {
  display: inline;
}

header{
  background-color: #3a4050;
  padding: 1em 0;
  width: 100%;
}

.flex{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav{
  color: #fff;
}

a{
  color: #fff;
  padding: 0.5em;
}

nav a:hover{   
  border-bottom: #fff solid 1px;
  
}

.red{
  color: #b91c1c;
}

.user-logged{
  display: inline-flex;
  align-items: center;
  margin-left: 24px;
  gap: 10px;

}

.user-logged img{
  border-radius: 50%;

}

.user-not-logged{
  margin-left:40px ;
}



</style>