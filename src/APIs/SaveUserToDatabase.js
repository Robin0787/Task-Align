import axios from "axios";

const SaveUserToDatabase = async (email, userInfo) => {

  const url = `${import.meta.env.VITE_BASE_URL}/save-user/${email}`;
  const res = await axios.put(url, {
    headers: {
      "content-type": "application/json",
    },
    body: { ...userInfo },
  });
  return res.data;
};

export default SaveUserToDatabase;
