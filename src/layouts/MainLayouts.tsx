import {Outlet} from "react-router-dom";
import {MenuComponent} from "../menu/MenuComponent.tsx";
import './MainLayouts.css'



export const MainLayout = () => {
    return (
        <>
            <div className={'wrapper'}>
                 <MenuComponent/>
                 <Outlet/>
            </div>
        </>
    );
};