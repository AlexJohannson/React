import {useEffect, useState} from "react";
import {ITodo} from "../../models/ITodo.ts";
import {TodoComponent} from "../todo-component/TodoComponent.tsx";
import './TodoComponents.css'
import {getTodo} from "../../service/api.service.ts";

export const TodoComponents = () => {

    const [todo, setTodo] = useState<ITodo[]>([])
    useEffect(() => {
            getTodo()
            .then(value => {
                // @ts-ignore
                setTodo(value);
            });
    }, []);
    return (
        <>
            <div className={'wrapper'}>
                {
                    todo.map(value => <TodoComponent key={value.id} item={value}/>)
                }
            </div>
        </>
    );
};