import {ITodoCompleted} from "../../models/ITodo.ts";
import {FC} from "react";

interface ITodoProps {
    item: ITodoCompleted;
}


export const TodoComponent: FC<ITodoProps> = ({item}) => {
    return (
        <>
           <div>
               <h3>UserId: {item.userId}</h3>
               <p>ID: {item.id}</p>
               <p>{item.todo}</p>
           </div>
        </>
    );
};