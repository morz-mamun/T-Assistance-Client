import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


const useAllTask = () => {
    const axiosPublic = useAxios()
    
    const {data: allTask = [], refetch} = useQuery({
        queryKey: ['allTask'],
        queryFn: async() => {
            const res = await axiosPublic.get('/allTask')
            return res.data
        }
    })
    return [allTask, refetch]
};

export default useAllTask;