<template>
   <section>
      <b-container>
         <b-row>
            <b-col>
               <b-list-group
                  class="mb-3"
                  v-for="(post, i) in deletedPosts"
                  :class="{ deleted: !post.added }"
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
export default class History extends Vue {
   get deletedPosts() {
      return PostsModule.history.filter((h: any | object) => !h.added);
   }
}
</script>
