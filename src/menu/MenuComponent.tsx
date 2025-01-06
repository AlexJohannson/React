import {Link} from "react-router-dom";

export const MenuComponent = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to='/users'>USERS</Link>
                </li>
            </ul>
        </>
    );
};