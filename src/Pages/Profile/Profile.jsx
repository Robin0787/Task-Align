import {
    useQuery
} from '@tanstack/react-query';
import axios from 'axios';
import { useContext } from "react";
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { authContext } from "../../Provider/Provider";


const Profile = () => {
    const navigate = useNavigate();
    const { user } = useContext(authContext);
    const token = localStorage.getItem('userToken');
    const { data: userDetails = null } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/user/${user?.email}`, { params: { authorization: `bearer ${token}`}});
            if (res.data.error) {
                toast.error(res.data.message);
                console.log(res.data);
                navigate('/signUp');
            } else {
                return res.data
            }
        }
    })

    return (
        <div className="text-3xl md:text-5xl text-center font-thin bg-gradient-to-r from-indigo-800 to-indigo-900 text-white flex justify-center items-center h-full w-full">
            <h2 className="p-10  rounded-lg shadow-[2px_2px_10px_6px] shadow-blue-300">{userDetails?.name}</h2>
        </div>
    );
};

export default Profile;