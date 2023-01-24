import {constans} from "../components/constants";

export const usersService={
    getAllUsers: ()=>fetch(constans.apiUrl + 'users').then(value => value.json())

}