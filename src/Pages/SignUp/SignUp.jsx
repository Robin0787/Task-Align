import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";
import { useState } from 'react';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';
import logo from "../../assets/logo.png";
import Login from '../Login/Login';
import SignUpForm from './SignUpForm';
AOS.init();



const SignUp = () => {
    const [login, setLogin] = useState(false);
    
    return (
        <section className="flex justify-center items-center min-h-screen md:h-screen w-full">
            <article className="rounded-lg bg-gradient-to-l from-blue-500 to-blue-800 text-blue-500 
            w-[95%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] h-[90%] md:h-[80%]">
                    <article className="md:flex justify-between items-center gap-4 p-5 h-full">
                        <div className="rounded-lg md:w-1/2 flex flex-col gap-5">
                            <div className='flex justify-center items-center '>
                                <img src={logo} alt="" className='w-32 h-32 p-5 bg-white rounded-full' />
                            </div>
                            <div className='flex-grow-1'>
                            <SocialLogin />
                            </div>
                            <div className=' text-gray-200 text-center'>
                            {
                                login ? 
                                (
                                    <p>Don't have an account? <span className='text-blue-300 cursor-pointer' 
                                    onClick={() => {setLogin(!login)}}>Sign Up</span></p>
                                )
                                : 
                                (
                                    <p>Have an account? <span className='text-blue-300 cursor-pointer' 
                                    onClick={() => {setLogin(!login)}}>Login</span></p>
                                )
                            }
                            </div>
                        </div>
                        <div className="md:h-full md:w-1/2 ">
                            {
                                login ?
                                    (
                                        <div data-aos='fade-left' data-aos-duration={600}
                                            className={`h-full w-full flex justify-center items-center`}>
                                            <Login />
                                        </div>
                                    )
                                    :
                                    (
                                        <motion.div transition={{
                                            ease: "linear",
                                            duration: 2,
                                            x: { duration: 1 }
                                        }} data-aos='fade-right' data-aos-duration={600}
                                            className={`h-full w-full flex justify-center items-center`}>
                                            <SignUpForm />
                                        </motion.div>
                                    )
                            }
                        </div>
                    </article>
            </article>
        </section>
    );
};

export default SignUp;