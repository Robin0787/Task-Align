
import { Outlet } from "react-router-dom";
import Menu from "../Pages/Shared/Menu/Menu";
  


const Main = () => {
    return (
        <section className="flex relative w-full h-screen">
            <section className="fixed top-0">
                <Menu />
            </section>
            <section className="relative left-16 lg:left-60 w-[calc(100vw-64px)]  lg:w-[calc(100vw-240px)] duration-300">
                <Outlet />
            </section>
        </section>
    );
};

export default Main;