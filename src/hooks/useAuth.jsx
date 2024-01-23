import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useAuth = () => {
    const [axiosSecure] = useAxios();
    const token = localStorage.getItem('token');

    const { refetch, data: user = [] } = useQuery({
        queryKey: ['user', token],
        enabled: !!token, // Fetch only when token is available
        queryFn: async () => {
            if (token) {
                const res = await axiosSecure.get(`/authUser/${token}`);
                return res.data;
            }
            throw new Error('Token not available');
        },
    });

    return [user, refetch];
};

export default useAuth;
