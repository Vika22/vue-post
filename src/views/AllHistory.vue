<template>
   <section>
      <b-container>
         <b-row>
            <b-col>
               <b-list-group
                  class="mb-3"
                  v-for="(post, i) in History"
                  :class="{ added: post.added, deleted: !post.added }"
                  :key="i"
               >
                  <b-list-group-item>
                     {{ post.title }}
                  </b-list-group-item>
                  <b-list-group-item>
                     {{ post.body }}
                  </b-list-group-item>
               </b-list-group>
            </b-col>
         </b-row>
      </b-container>
   </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { PostsModule } from '@/store/modules/Posts';

@Component({
   components: {},
})
export default class AllHistory extends Vue {
   get HistoryParam() {
      const query =
         this.$route.query.param === 'added'
            ? false
            : this.$route.query.param === 'deleted'
            ? true
            : '';
      return query;
   }
   get History() {
      return PostsModule.history.filter((f: object | any) => f.added !== this.HistoryParam);
   }
}
</script>
