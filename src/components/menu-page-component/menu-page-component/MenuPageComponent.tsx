import {IUser} from "../../../models/i-users-model/IUsersModel.ts";
import './MenuPageComponent.css'


interface IMenuPageProps {
    users: IUser;
}

export const MenuPageComponent = ({users}: IMenuPageProps) => {
    return (
        <>
            <div className={'menu-page'}>
                <img src={users.image} alt={users.firstName}/>
            </div>
        </>
    );
};