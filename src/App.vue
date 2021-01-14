<template>
   <div id="app">
      <b-button-group class="my-4 flex-wrap">
         <router-link to="/" class="btn btn-secondary">Главная</router-link>
         <router-link
            :to="{ path: 'history', query: { param: btn } }"
            class="btn btn-secondary"
            v-for="(btn, index) in arr"
            :key="index"
            >{{
               btn === 'deleted'
                  ? 'История удаления'
                  : btn === 'added'
                  ? 'История добавлений'
                  : 'История'
            }}</router-link
         >
         <!-- <button
            class="btn btn-secondary"
            v-for="(btn, index) in arr"
            :key="index"
            @click="showHistory(btn)"
         >
            {{
               btn === 'deleted'
                  ? 'История удаления'
                  : btn === 'added'
                  ? 'История добавлений'
                  : 'История'
            }}
         </button> -->
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
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
   components: {},
})
export default class App extends Vue {
   arr = ['all', 'added', 'deleted'];
   showHistory(param: string) {
      this.$router.push({ path: 'history', query: { param: param } });
   }
}
</script>
