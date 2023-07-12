import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const SignUpForm = () => {
    const [showPass, setShowPass] = useState(false);
    const [showEye, setShowEye] = useState(false);
    const [focused, setFocused] = useState(false);

    function handlePassChange(e) {
        const pass = e.target.value;
        if (pass.length > 0) {
            setShowEye(true);
        } else {
            setShowEye(false);
        }
    }
    return (
        <section className="flex justify-center items-center h-full w-full">
            <form className="text-white px-6 text-sm flex flex-col gap-3 w-full ">
                <div className="space-y-1">
                    <label htmlFor="name">Name</label><br />
                    <input type="text" name="name"
                        className="w-full px-2 py-2 rounded-md border outline-0 text-gray-100 focus:text-gray-600  border-gray-300 bg-gradient-to-l from-blue-500 to-blue-600  focus:from-gray-100 focus:to-gray-100 duration-300" />
                </div>
                <div className="space-y-1">
                    <label htmlFor="email">Email</label><br />
                    <input type="text" name="email" className="w-full px-2 py-2 rounded-md border outline-0  border-gray-300 bg-gradient-to-l from-blue-500 to-blue-600 text-gray-100  focus:text-gray-600
                focus:from-gray-100 focus:to-gray-100 duration-300"/>
                </div>
                <div className="space-y-1 ">
                    <label htmlFor="password">Password</label><br />
                    <div className="relative">
                        <input type={showPass ? 'text' : 'password'} onChange={handlePassChange} onFocus={() => { setFocused(true) }} onBlur={() => { setFocused(false) }} name="password" className="w-full px-2 py-2 rounded-md border outline-0  border-gray-300 bg-gradient-to-l from-blue-500 to-blue-600 text-gray-100  focus:text-gray-600  focus:from-gray-100 focus:to-gray-100 duration-300 group" />
                        {
                            showEye && 
                            (
                                showPass ?
                                <BsEye size={16} className={`absolute top-3 right-3 cursor-pointer ${focused ? 'text-blue-500' : 'text-gray-100'}`} onClick={() => { setShowPass(!showPass) }} />
                                :
                                <BsEyeSlash size={16} className={`absolute top-3 right-3 cursor-pointer ${focused ? 'text-blue-500' : 'text-gray-100'}`} onClick={() => { setShowPass(!showPass) }} />
                            )
                        }

                    </div>
                </div>
                <div className="space-y-1">
                    <label htmlFor="password">Confirm Password</label><br />
                    <input type={showPass ? 'text' : 'password'} name="password" className="w-full px-2 py-2 rounded-md border outline-0  border-gray-300 bg-gradient-to-l from-blue-500 to-blue-600 text-gray-100  focus:text-gray-600  focus:from-gray-100 focus:to-gray-100 duration-300" />
                </div>
                <button
                    className="w-full mt-2 py-2 rounded-md border outline-0  border-gray-300 bg-gray-100 text-blue-600 hover:bg-transparent hover:text-gray-100 hover:bg-gray-100 duration-300">
                    Sign Up
                </button>
            </form>
        </section>

    );
};

export default SignUpForm;