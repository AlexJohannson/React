import {ITodoCompleted, ITodoDummyJson} from "../../models/ITodo.ts";
import {useEffect, useState} from "react";
import {TodoComponent} from "../todo-component/TodoComponent.tsx";
import {getTodo} from "../../services/api.services.ts";
import './TodoComponents.css'


export const TodoComponents = () => {

    const [todos, setTodos] = useState<ITodoCompleted[]>([]);
    const [item, setItem] = useState<ITodoCompleted | null>(null);
    useEffect(() => {
        getTodo()
            .then(({todos}: ITodoDummyJson) => {
            console.log(todos);
            setTodos(todos);
        });
    }, []);
    const todoDetails = (item: ITodoCompleted) => {
        setItem(item);
    }
    return (
        <>
            <div className={'wrapper'}>
                {
                    item && <div className={item.completed ? 'todo_y' : 'todo_n'}>
                        <h3>ID: {item.id}</h3>
                        <h3>{item.todo}</h3>
                    </div>
                }
                {
                    todos.map(todo => <TodoComponent todoDetails={todoDetails} key={todo.id} item={todo}/>)
                }
            </div>
        </>
    );
};