import {useEffect, useState} from "react";
import {getUser} from "../../../services/user.api.service.ts";
import {IUser} from "../../../models/i-users-model/IUsersModel.ts";
import {IDummyModel} from "../../../models/i-dummy-model/IDummyModel.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";


export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        getUser().then((users:IDummyModel) => {
            setUsers(users.users);
        });
    }, []);
    return (
        <>
            <div>
                {
                    users.map(user => <UserComponent key={user.id} users={user}/>)
                }
            </div>
        </>
    );
};