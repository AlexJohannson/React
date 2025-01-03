import {ITodo} from "../../models/ITodo.ts";
import './TodoComponent.css'
interface ITodoProps {
    item: ITodo
}

export const TodoComponent = ({item}: ITodoProps) => {
    return (
        <>
            <div className={'user_completed'}>
                <h3>User.id: {item.userId}</h3>
                <ul>
                    <li>Id: {item.id}</li>
                    <li className={item.completed ? 'completed_yes' : 'completed_non'}>{item.title}</li>
                </ul>
            </div>
        </>
    );
};