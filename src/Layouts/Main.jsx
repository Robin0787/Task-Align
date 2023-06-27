import { Outlet } from "react-router-dom";
import Menu from "../Pages/Shared/Menu/Menu";


const Main = () => {
    return (
        <section >
            <article className="flex">
                <Menu />
                <Outlet />
            </article>
        </section>
    );
};

export default Main;