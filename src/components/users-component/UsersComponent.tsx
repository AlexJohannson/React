import {useEffect, useState} from "react";
import {IUser} from "../../models/user-models/IUser.ts";
import {dummyUserService} from "../../services/api.service.ts";
import {IUserResponsModel} from "../../models/user-models/IUserResponsModel.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";


export const UsersComponent = () => {

    const [user, setUser] = useState<IUser[]>([])
    useEffect(() => {
        dummyUserService.getAllUsers()
            .then(({users}: IUserResponsModel) => {
                setUser(users);
            })
    }, []);
    return (
        <>
            <div>
                {
                    user.map(user => <UserComponent key={user.id} user={user}/>)
                }
            </div>
        </>
    );
};
