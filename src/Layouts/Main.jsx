import { Outlet } from "react-router-dom";
import Menu from "../Pages/Shared/Menu/Menu";


const Main = () => {
    return (
        <div className="flex">
            <Menu />
            <Outlet />
        </div>
    );
};

export default Main;