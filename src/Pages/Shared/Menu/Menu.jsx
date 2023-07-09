import React, { useEffect, useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { CgGoogleTasks } from "react-icons/cg";
import { FaTasks } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";
import { LiaHomeSolid } from "react-icons/lia";
import { MdTaskAlt } from "react-icons/md";
import { NavLink } from "react-router-dom";


const Menu = () => {
    const [open, setOpen] = useState(true);
    const closeOpenMenuButton = () => {
        const windowWidth = window.innerWidth;
        if (windowWidth < 768) {
            setOpen(false);
        }
    };

    useEffect(() => {
        closeOpenMenuButton();
        window.addEventListener('resize', closeOpenMenuButton);
        return () => {
            window.removeEventListener('resize', closeOpenMenuButton);
        };
    }, []);

    const active = 'flex gap-3.5 items-center text-sm font-medium py-3 px-4 rounded-md bg-gray-100 text-blue-600 bg-duration-200 group';
    const notActive = 'flex gap-3.5 items-center text-sm font-medium py-3 px-4 rounded-md hover:bg-blue-700 bg-duration-200 group';
    return (
        <section className={`bg-gradient-to-l from-blue-500 to-blue-800 text-gray-100 min-h-screen ${open ? 'w-60' : 'w-16'} duration-500`}>
            <article className="flex flex-col h-full pb-10">
                <div className="flex justify-between items-center py-3 px-4 ">
                    <h2 className={`whitespace-pre duration-500 ${!open && 'opacity-0 -translate-x-20 overflow-hidden'}  delay-0 tracking-[5px] text-lg`} >Task Align</h2>
                    <button
                        className="hidden md:flex justify-end">
                        <HiMenuAlt3 size={26} className="cursor-pointer" onClick={() => { setOpen(!open) }} />
                    </button>
                </div>
                <div
                    className="flex mt-10 md:mt-4 flex-col gap-4 relative px-2">
                    <NavLink to={'/'}
                        className={({ isActive }) => isActive ? active : notActive}>
                        <div>{React.createElement(LiaHomeSolid, { size: '20' })}</div>
                        <span className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}  delay-0`}>Home</span>
                        <p
                            className={`${open && 'hidden'} absolute left-40 text-sm font-medium whitespace-pre text-blue-600 bg-white shadow-xl rounded-md group-hover:px-4 group-hover:py-2 w-0 overflow-hidden group-hover:left-16 group-hover:w-fit group-hover:duration-700`}
                        >Home</p>
                    </NavLink>
                    <NavLink to={'/my-tasks'}
                        className={({ isActive }) => isActive ? active : notActive}>
                        <div>{React.createElement(FaTasks, { size: '20' })}</div>
                        <span className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}  delay-75`}>My Tasks</span>
                        <p
                            className={`${open && 'hidden'} absolute left-40 text-sm font-medium whitespace-pre text-blue-600 bg-white shadow-xl rounded-md group-hover:px-4 group-hover:py-2 w-0 overflow-hidden group-hover:left-16 group-hover:w-fit group-hover:duration-700`}
                        >My Tasks</p>
                    </NavLink>
                    <NavLink to={'/add-task'}
                        className={({ isActive }) => isActive ? active : notActive}>
                        <div>{React.createElement(CgGoogleTasks, { size: '20' })}</div>
                        <span className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}  delay-100`}>Add Task</span>
                        <p
                            className={`${open && 'hidden'} absolute left-40 text-sm font-medium whitespace-pre text-blue-600 bg-white shadow-xl rounded-md group-hover:px-4 group-hover:py-2 w-0 overflow-hidden group-hover:left-16 group-hover:w-fit group-hover:duration-700`}
                        >Add Task</p>
                    </NavLink>
                    <NavLink to={'/completed-tasks'}
                        className={({ isActive }) => isActive ? active : notActive}>
                        <div>{React.createElement(MdTaskAlt, { size: '20' })}</div>
                        <span className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'} delay-150`}>Completed Tasks</span>
                        <p
                            className={`${open && 'hidden'} absolute left-40 text-sm font-medium whitespace-pre text-blue-600 bg-white shadow-xl rounded-md group-hover:px-4 group-hover:py-2 w-0 overflow-hidden group-hover:left-16 group-hover:w-fit group-hover:duration-700`}
                        >Completed Tasks</p>
                    </NavLink>
                </div>
                <div className="px-4 mt-10 flex-grow">
                    <hr className="border-gray-400" />
                </div>
                <div
                    className="flex mt-10 md:mt-4 flex-col gap-4 relative px-2">
                    <NavLink to={'/profile'}
                        className={({ isActive }) => isActive ? active : notActive}>
                        <div>{React.createElement(BiUser, { size: '20' })}</div>
                        <span className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}  delay-200`}>Profile</span>
                        <p
                            className={`${open && 'hidden'} absolute left-40 text-sm font-medium whitespace-pre text-blue-600 bg-white shadow-xl rounded-md group-hover:px-4 group-hover:py-2 w-0 overflow-hidden group-hover:left-16 group-hover:w-fit group-hover:duration-700`}
                        >Profile</p>
                    </NavLink>
                    <NavLink to={'/signUp'}
                        className={({ isActive }) => isActive ? active : notActive}>
                        <div>{React.createElement(AiOutlineLogout, { size: '20' })}</div>
                        <span className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}  delay-200`}>Sign Up</span>
                        <p
                            className={`${open && 'hidden'} absolute left-40 text-sm font-medium whitespace-pre text-blue-600 bg-white shadow-xl rounded-md group-hover:px-4 group-hover:py-2 w-0 overflow-hidden group-hover:left-16 group-hover:w-fit group-hover:duration-700`}
                        >Profile</p>
                    </NavLink>
                    <button
                        className={notActive}>
                        <div>{React.createElement(AiOutlineLogout, { size: '20' })}</div>
                        <span className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}  delay-300`}>Log Out</span>
                        <p
                            className={`${open && 'hidden'} absolute left-40 text-sm font-medium whitespace-pre text-blue-600 bg-white shadow-xl rounded-md group-hover:px-4 group-hover:py-2 w-0 overflow-hidden group-hover:left-16 group-hover:w-fit group-hover:duration-700`}
                        >Log Out</p>
                    </button>
                    <NavLink to={'/settings'}
                        className={({ isActive }) => isActive ? active : notActive}>
                        <div>{React.createElement(FiSettings, { size: '20' })}</div>
                        <span className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}  delay-500`}>Settings</span>
                        <p
                            className={`${open && 'hidden'} absolute left-40 text-sm font-medium whitespace-pre text-blue-600 bg-white shadow-xl rounded-md group-hover:px-4 group-hover:py-2 w-0 overflow-hidden group-hover:left-16 group-hover:w-fit group-hover:duration-700`}
                        >Settings</p>
                    </NavLink>
                </div>
            </article>

        </section>
    );
};

export default Menu;