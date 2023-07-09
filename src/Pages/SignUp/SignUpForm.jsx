

const SignUpForm = () => {
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
            <div className="space-y-1">
                <label htmlFor="password">Password</label><br />
                <input type="password" name="password" className="w-full px-2 py-2 rounded-md border outline-0  border-gray-300 bg-gradient-to-l from-blue-500 to-blue-600 text-gray-100  focus:text-gray-600  focus:from-gray-100 focus:to-gray-100 duration-300" />
            </div>
            <div className="space-y-1">
                <label htmlFor="password">Confirm Password</label><br />
                <input type="password" name="password" className="w-full px-2 py-2 rounded-md border outline-0  border-gray-300 bg-gradient-to-l from-blue-500 to-blue-600 text-gray-100  focus:text-gray-600  focus:from-gray-100 focus:to-gray-100 duration-300" />
            </div>
            <button 
            className="w-full mt-2 py-2 rounded-md border outline-0  border-gray-300 bg-transparent text-gray-100  hover:text-gray-600 hover:bg-gray-100 duration-300">
                Sign Up
            </button>
        </form>
        </section>
        
    );
};

export default SignUpForm;