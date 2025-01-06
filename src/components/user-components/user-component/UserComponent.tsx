import {IUser} from "../../../models/i-users-model/IUsersModel.ts";


interface IUserProps {
    users: IUser;
}

export const UserComponent = ({users}: IUserProps) => {
    return (
        <>
            <div>
                <img src={users.image} alt={users.firstName}/>
                <h3>{users.firstName} {users.lastName}</h3>
                <p><b>Age:</b> {users.age}</p>
                <p><b>Gender:</b> {users.gender}</p>
                <p><b>Email:</b> {users.email}</p>
                <p><b>Phone:</b> {users.phone}</p>
            </div>
        </>
    );
};

