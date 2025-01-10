import { createRoot } from 'react-dom/client'
import './index.css'
import {routers} from "./routers/router.tsx";
import {RouterProvider} from "react-router-dom";


createRoot(document.getElementById('root')!).render(<RouterProvider router={routers}/>);
