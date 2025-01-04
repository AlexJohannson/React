import {ITodoDummyJson} from "../models/ITodo.ts";


const getTodo = async (): Promise<ITodoDummyJson> => {
    return await fetch(import.meta.env.VITE_API_TODO)
        .then(value => value.json())
}

export {
    getTodo
}