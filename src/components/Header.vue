<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import Button from '@/components/Button.vue'
import { useCartStore } from '../stores/cart';

const logged = ref(false)
const toggle = () => logged.value = !logged.value

const cartstore= useCartStore();
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
          <div class="cart" v-if="cartstore.total>0">
            
              <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
  </svg>
<span >
 {{ cartstore.total }}
            </span>
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

.cart{
  display: flex;
  margin-left: 10px;
   
}

.cart span{
  margin-top: auto;
 
   
}


</style>