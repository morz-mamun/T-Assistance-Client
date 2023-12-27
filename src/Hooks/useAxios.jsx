import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://task-management-platform-server-nine.vercel.app'
})

const useAxios = () => {
    return axiosPublic
};

export default useAxios;