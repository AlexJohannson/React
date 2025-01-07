import {useEffect, useState} from "react";
import {getUser} from "../../../services/user.api.service.ts";
import {IDummyModel} from "../../../models/i-dummy-model/IDummyModel.ts";
import {IUser} from "../../../models/i-users-model/IUsersModel.ts";
import {MenuPageComponent} from "../menu-page-component/MenuPageComponent.tsx";


export const MenuPageComponents = () => {

    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        getUser().then((users: IDummyModel)=> {
            setUsers(users.users)
        })
    }, []);
    return (
        <>
            <div>
                {
                    users.map(user => <MenuPageComponent key={user.id} users={user}/>)
                }
            </div>
        </>
    );
};