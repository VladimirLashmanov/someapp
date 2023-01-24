import {constans} from "../components/constants";

export const commentsService={
    getAllComments:()=>fetch(constans.apiUrl + 'comments').then(value => value.json())
}