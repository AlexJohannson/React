import {ITodoCompleted, ITodoDummyJson} from "../../models/ITodo.ts";
import {useEffect, useState} from "react";
import {TodoComponent} from "../todo-component/TodoComponent.tsx";
import {getTodo} from "../../services/api.services.ts";


export const TodoComponents = () => {

    const [todos, setTodos] = useState<ITodoCompleted[]>([])
    useEffect(() => {
        getTodo()
            .then(({todos}: ITodoDummyJson) => {
            console.log(todos);
            setTodos(todos);
        });
    }, []);
    return (
        <>
            <div>
                {
                    todos.map(todo => <TodoComponent key={todo.id} item={todo}/>)
                }
            </div>
        </>
    );
};