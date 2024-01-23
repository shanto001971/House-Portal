import axios from "axios";


const useAxios = () => {
    const axiosSecure = axios.create({
        baseURL: 'https://house-portal-server.vercel.app',
    });
    return [axiosSecure];
};

export default useAxios;