import {Module, Action, Mutation, getModule, VuexModule } from 'vuex-module-decorators'
import store from '@/store'
import {getPost} from '@/api/posts'

@Module({namespaced:true, name: 'posts', store, dynamic: true})
class Posts extends VuexModule{
    
    posts: Array<object> = []
    favoritePosts: Array<object> = []
    history: Array<object> = []

    @Mutation
    UPDATE_POSTS(data: Array<object>){        
        this.posts = data
    }

    @Mutation
    ADD_FOLLOWED( data: object){
        this.favoritePosts.unshift(data);
        this.posts = this.posts.filter((d: object) => d !== data);  
        this.history.unshift(Object.assign(data, {added: true}));  
    }

    @Mutation
    DELETE_FOLLOWED( data: any | object){
        this.posts.unshift(data);
        this.favoritePosts = this.favoritePosts.filter((d: object) => d !== data);
        const obj = {
            title: data.title,
            body: data.body,
            id: data.id,
            userId: data.userId,
            added: false
        }
        this.history.unshift(obj)        
    }
    
    @Action
    async getData(): Promise<void> {
        try{
           const data = await getPost;
           this.UPDATE_POSTS(data)           
        }catch(e){
            console.log(e);
            throw e;
        }
    }

    @Action
    addFavoritePost(data:object){
        this.ADD_FOLLOWED(data)
    }
    
    @Action
    deleteFavoritePost(data:object){
        this.DELETE_FOLLOWED(data)
    }
}

export const PostsModule = getModule(Posts)