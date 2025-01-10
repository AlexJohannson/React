import {Outlet} from "react-router-dom";
import './MainLayouts.css';


export const MainLayout = () => {
    return (
        <>
            <div className={'wrapper'}>
                <Outlet/>
            </div>
        </>
    );
};



