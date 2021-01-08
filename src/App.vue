<template>
   <div id="app">
      <b-button-group class="my-4 flex-wrap">
         <router-link to="/" class="btn btn-secondary">Главная</router-link>
         <router-link to="history" class="btn btn-secondary ">История</router-link>
         <router-link to="history-add" class="btn btn-secondary">История добавлений</router-link>
         <router-link to="history-delete" class="btn btn-secondary">История удаления</router-link>
      </b-button-group>
      <router-view />
   </div>
</template>

<style lang="scss">
#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
}
</style>
