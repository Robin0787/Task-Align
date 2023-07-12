import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FaStarOfLife } from "react-icons/fa";

const SignUpForm = () => {
    const [showPass, setShowPass] = useState(false);
    const [showEye, setShowEye] = useState(false);
    const [focused, setFocused] = useState(false);
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    function formSubmit(data) {
        console.log(data);
        setShowEye(false);
        reset();
    }

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
            <form className="text-white px-6 text-sm flex flex-col gap-3 w-full" onSubmit={handleSubmit(formSubmit)}>
                <div className="space-y-1 relative">
                    <label htmlFor="name">Name</label>
                    {errors.name && <FaStarOfLife size={8} className="absolute top-[2px] left-12 text-red-500" />}
                    <br />
                    <input type="text" name="name"
                        autoComplete="off"
                        {...register('name', { required: true })}
                        className="w-full px-2 py-2 rounded-md border outline-0 text-gray-100 focus:text-gray-600  border-gray-300 bg-gradient-to-l from-blue-500 to-blue-600  focus:from-gray-100 focus:to-gray-100 duration-300" />

                </div>
                <div className="space-y-1 relative">
                    <label htmlFor="email">Email</label>
                    {errors.email && <FaStarOfLife size={8} className="absolute top-[2px] left-12 text-red-500" />}
                    <br />
                    <input type="text" name="email"
                        autoComplete="off"
                        {...register('email', { required: true })}
                        className="w-full px-2 py-2 rounded-md border outline-0  border-gray-300 bg-gradient-to-l from-blue-500 to-blue-600 text-gray-100  focus:text-gray-600
                focus:from-gray-100 focus:to-gray-100 duration-300"/>
                </div>
                <div className="space-y-1 relative">
                    <label htmlFor="password">Password</label>
                    {errors.password && <FaStarOfLife size={8} className="absolute top-[2px] 
                    left-[68px] text-red-500" />}
                    <br />
                    <div className="relative">
                        <input type={showPass ? 'text' : 'password'} name="password"
                            autoComplete="off"
                            onFocus={() => { setFocused(true) }}
                            className="w-full px-2 py-2 rounded-md border outline-0  border-gray-300 bg-gradient-to-l from-blue-500 to-blue-600 text-gray-100  focus:text-gray-600  focus:from-gray-100 focus:to-gray-100 duration-300 group"
                            {...register('password',
                                {
                                    required: true,
                                    onChange: (e) => { handlePassChange(e) },
                                    onBlur: () => { setFocused(false) }
                                })
                            }
                        />
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
                <div className="space-y-1 relative">
                    <label htmlFor="password">Confirm Password</label>
                    {errors.confirmPassword && <FaStarOfLife size={8} className="absolute top-[2px] 
                    left-[122px] text-red-500" />}
                    <br />
                    <input type={showPass ? 'text' : 'password'} name="password"
                        autoComplete="off"
                        className="w-full px-2 py-2 rounded-md border outline-0  border-gray-300 bg-gradient-to-l from-blue-500 to-blue-600 text-gray-100  focus:text-gray-600  focus:from-gray-100 focus:to-gray-100 duration-300"
                        {...register('confirmPassword', { required: true })}
                    />
                </div>
                <button type="submit"
                    className="w-full mt-2 py-2 rounded-md border outline-0  border-gray-300 bg-gray-100 text-blue-600 hover:bg-transparent hover:text-gray-100 hover:bg-gray-100 duration-300">
                    Sign Up
                </button>
            </form>
        </section>

    );
};

export default SignUpForm;