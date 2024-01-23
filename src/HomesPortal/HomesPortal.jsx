import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import Card from "../Components/Card/Card";


const HomesPortal = () => {
    const [homesData, setHomesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [axiosSecure] = useAxios();

    useEffect(() => {
        axiosSecure.get('/houses')
            .then(response => {
                setHomesData(response.data);
                setLoading(false); // Set loading to false once data is fetched
            })
            .catch(error => {
                console.error('Error:', error);
                setError(error);
                setLoading(false); // Set loading to false in case of an error
            });
    }, []);

    // console.log(homesData);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:my-5">
            {
                homesData?.map(singleData => <Card key={singleData?._id} data={singleData} />)
            }
        </div>
    );
};

export default HomesPortal;