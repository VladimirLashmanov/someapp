import {constans} from "../components/constants";

export const postsService={
      getAllPosts:()=>fetch(constans.apiUrl + 'posts').then(value => value.json())
}