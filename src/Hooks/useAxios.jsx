import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://task-management-platform-server-nine.vercel.app'
    // baseURL: 'http://localhost:5000'
})

const useAxios = () => {
    return axiosPublic
};

export default useAxios;
