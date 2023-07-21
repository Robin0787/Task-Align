import axios from "axios";

const GetUserToken = async (email) => {
  const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/get-token`, {
    user: email,
  });
  return res.data;
};

export default GetUserToken;
