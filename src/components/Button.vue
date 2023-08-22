<template>
    <button>
        <slot />
    </button>
</template>
  
<style scoped>
button {
    background-color: #b91c1c;
    ;
    border: 0;
    cursor: pointer;
    border-radius: 5px;
    padding: 10px 15px;
    color: #fff;
    transition: 0.2s;
}

button:hover {
    background-color: #fff;
    color: #b91c1c;
    border: solid 1px #b91c1c;
    
}

button:disabled {
    opacity: 0.5;
}
</style>