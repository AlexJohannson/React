import {ITodoCompleted} from "../../models/ITodo.ts";
import {FC} from "react";
import './TodoComponent.css'

interface ITodoProps {
    item: ITodoCompleted;
    todoDetails: (item: ITodoCompleted) => void;
}


export const TodoComponent: FC<ITodoProps> = ({item, todoDetails}) => {
    return (
        <>
           <div className={'user_todo'}>
               <h3 className={'user_id'}>UserId: {item.userId}</h3>
               <button onClick={() => {
                   todoDetails(item)
               }}>Details</button>
           </div>
        </>
    );
};