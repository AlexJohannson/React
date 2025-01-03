import {ITodo} from "../models/ITodo.ts";


const getTodo = async (): Promise<ITodo> =>{
    return await fetch(import.meta.env.VITE_API_URL)
        .then(value => value.json())
}

export {
    getTodo
}