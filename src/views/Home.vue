<template>
   <section>
      <b-container>
         <b-row>
            <b-col cols="12" sm="6">
               <b-input-group>
                  <b-form-input class="my-3" v-model="searchValue"></b-form-input>
               </b-input-group>
            </b-col>
         </b-row>
         <b-row>
            <b-col cols="12" sm="6">
               <b-list-group
                  class="mb-3"
                  v-for="post in filterPosts.length > 0
                     ? filterPosts
                     : filterPosts.length == 0
                     ? []
                     : posts"
                  :key="post.id"
               >
                  <b-list-group-item>
                     {{ post.title }}
                  </b-list-group-item>
                  <b-list-group-item>
                     {{ post.body }}
                  </b-list-group-item>
                  <b-btn variant="info" @click="addToFavorite(post)">Add</b-btn>
               </b-list-group>
            </b-col>
            <b-col cols="12" sm="6">
               <b-list-group class="mb-3" v-for="post in FavouritePostList" :key="post.id">
                  <b-list-group-item>
                     {{ post.title }}
                  </b-list-group-item>
                  <b-list-group-item>
                     {{ post.body }}
                  </b-list-group-item>
                  <b-btn variant="danger" @click="deleteFavorite(post)">Delete</b-btn>
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
export default class Home extends Vue {
   searchValue = '';

   async created() {
      if (this.FavouritePostList.length > 0) return;
      await PostsModule.getData();
   }

   addToFavorite(post: object) {
      PostsModule.addFavoritePost(post);
   }

   deleteFavorite(post: {}) {
      PostsModule.deleteFavoritePost(post);
   }

   get filterPosts() {
      const regexp = new RegExp(this.searchValue, 'g');
      const arr = this.posts.filter((x: any | object) =>
         x.title.match(regexp) !== null ? x.title.match(regexp) : '',
      );
      arr.sort(
         (a: any | object, b: any | object) =>
            b.title.match(regexp).length - a.title.match(regexp).length,
      );
      return arr;
   }

   get posts() {
      return PostsModule.posts;
   }

   get FavouritePostList() {
      return PostsModule.favoritePosts;
   }
}
</script>
