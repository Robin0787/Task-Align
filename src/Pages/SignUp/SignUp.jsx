import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";
import { useState } from 'react';
import logo from "../../assets/logo.png";
AOS.init();



const SignUp = () => {
    const [login, setLogin] = useState(false);
    
    return (
        <section className="flex justify-center items-center h-screen w-full">
            <article className="rounded-lg bg-gradient-to-l from-blue-500 to-blue-800 text-blue-500 
            w-[95%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] h-[400px]">
                    <article className="md:flex justify-between items-center gap-4 p-3 h-full">
                        <div className="rounded-lg w-1/2">
                            <div className='flex justify-center items-center '>
                                <img src={logo} alt="" className='w-32 h-32 p-5 bg-white rounded-full' />
                            </div>
                            <button
                                onClick={() => setLogin(!login)}
                                className="w-24 py-2 border-0 outline-0 rounded-xl text-gray-100 bg-blue-500 duration-300"
                            >{login ? 'Login' : 'Sign Up'}</button>
                        </div>
                        <div className="md:h-full md:w-1/2 relative overflow-hidden bg-white">
                            {
                                login ?
                                    (
                                        <div data-aos='fade-left' data-aos-duration={600}
                                            className={`h-full`}>
                                            <h1 className="text-3xl font-thin">Login Form</h1>
                                        </div>
                                    )
                                    :
                                    (
                                        <motion.div transition={{
                                            ease: "linear",
                                            duration: 2,
                                            x: { duration: 1 }
                                        }} data-aos='fade-right' data-aos-duration={600}
                                            className={``}>
                                            <h1 className="text-3xl font-thin">Sign Up Form</h1>
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