import {Link} from "react-router-dom";
import './MenuComponent.css'

export const MenuComponent = () => {
    return (
        <>
            <div className={'menu'}>
                <ul>
                    <li>
                         <Link className={'navigator'} to='/ '>MENU</Link>
                    </li>
                    <li>
                         <Link className={'navigator'} to='/users'>USERS</Link>
                    </li>
                    <li>
                         <Link className={'navigator'} to='/posts'>POSTS</Link>
                    </li>
                </ul>
            </div>
        </>
    );
};