import {useNavigate} from "react-router-dom";
import {FC} from "react";
import {IUser} from "../../models/user-models/IUser.ts";
type IUserProps = {
    user: IUser;
}
export const UserComponent: FC<IUserProps> = ({user}) => {


    const navigator = useNavigate();
    const onClickNavigate = () => {
        navigator('/users/' + user.id + '/carts');
    }
    return (
        <>
            <div>
                <h2>{user.firstName} {user.lastName}</h2>
                <button onClick={onClickNavigate}>User Cart</button>
            </div>
        </>
    );
};