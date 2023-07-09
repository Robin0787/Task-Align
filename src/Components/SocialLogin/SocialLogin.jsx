import React from "react";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-3 my-5">
            <button className={`flex justify-center items-center gap-3 px-3 py-2 rounded-md border text-gray-100 hover:text-gray-800 text-sm bg-transparent hover:bg-white duration-300`}>
                {React.createElement(FcGoogle, {size: '20'})}
                <span className="whitespace-pre">Continue with Google</span>
            </button>
            <button className="flex justify-center items-center gap-3 px-3 py-2 rounded-md border text-gray-100 hover:text-gray-800 text-sm bg-transparent hover:bg-white duration-300">
                {React.createElement(BsGithub, {size: '20'})}
                <span className="whitespace-pre">Continue with GitHub</span>
            </button>
        </div>
    );
};

export default SocialLogin;