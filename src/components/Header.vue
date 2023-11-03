<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import Button from '@/components/Button.vue'
import { useCartStore } from '../stores/cart';


const logged = ref(false)
const toggle = () => logged.value = !logged.value

const cartstore = useCartStore();

const isMenuOpen = ref(false)


</script>

<template>
  <header>

    <div class="container">
      <div class="flex">
        <h1>
          <RouterLink to="/">Vue<span class="red">Flix</span></RouterLink>
        </h1>


        <nav class="flex">
          <div class="navbar">

            <div class="burger-btn" @click="isMenuOpen = !isMenuOpen" v-if="!isMenuOpen">&#x2630;</div>
            <div class="burger-btn" @click="isMenuOpen = !isMenuOpen" v-else>x</div>
            
            <div class="links" :class="{ 'menu-open': isMenuOpen }" >
              <RouterLink to="/" @click="isMenuOpen = false">Accueil</RouterLink>
              <RouterLink to="/films" @click="isMenuOpen = false">Films</RouterLink>
              <RouterLink to="/a-propos" @click="isMenuOpen = false">A propos</RouterLink>
              <Button @click="toggle" v-if="!logged" class="user-not-logged">Connexion</Button>
              
              <div v-else class="user-logged">
                <strong>tsavou</strong>
                <img src="https://i.pravatar.cc/75?u=tsavou" alt="tsavou" height="40">
                <Button @click="toggle">X</Button>
                
              </div>
            </div>
          </div>

          <div class="cart" v-if="cartstore.total > 0" @click="cartstore.toggleCart()">

            <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <span>
              {{ cartstore.total }}
            </span>
          </div>


        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
.burger-btn {
  display: none;  
}

.user-logged {
  display: inline;
}

header {
  background-color: #3a4050;
  padding: 1em 0;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2500;
  
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  color: #fff;
}

a {
  color: #fff;
  padding: 0.5em;
  width: 100%;  
}

nav a:hover {
  border-bottom: #fff solid 1px;

}

.red {
  color: #b91c1c;
}

.user-logged {
  display: inline-flex;
  align-items: center;
  margin-left: 24px;
  gap: 10px;

}

.user-logged img {
  border-radius: 50%;

}

.user-not-logged {
  margin-left: 40px;
}

.cart {
  display: flex;
  margin-left: 10px;
  cursor: pointer;

}

.cart span {
  margin-top: auto;


}

@media all and (max-width: 740px) {

  .links {
    display: none;
    position: absolute;
    top: 80px; /* Réglez la position verticale selon vos besoins */
    left: 0;
    background-color: #333;
    width: 100%;
   
    
  }

  .menu-open {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  }

  .burger-btn {
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;    
    font-size: 40px;
    color: white;
    cursor: pointer;
  }

  .links a {
    width: 100%;
    text-align: center;
  }

  .links a:hover{
    background-color: #3a4050;
  }

  
}
</style>

