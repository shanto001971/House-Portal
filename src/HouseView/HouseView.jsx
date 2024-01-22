import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { CiHeart } from "react-icons/ci";
import Calender from "./Calender";
import 'react-date-range/dist/styles.css'; // Import the default styles
import 'react-date-range/dist/theme/default.css';

const HouseView = () => {
    const { id } = useParams();
    const [homesData, setHomesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [axiosSecure] = useAxios();
    const [value, setValue] = useState({
        startDate: new Date(10),
        endDate: new Date(),
        key: "selection",
    });

    useEffect(() => {
        axiosSecure.get(`/houseView/${id}`)
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

    console.log(homesData);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const handleSelect = (ranges) => {
        setValue({ ...value });
      };


    return (
        <div className="lg:flex px-5">
            <div className="lg:w-[40%]">
                <img className="rounded-md" src={homesData?.picture} alt="" />
            </div>
            <div className="lg:w-[35%] lg:p-5 lg:py-5">
                <h2 className="card-title">Name: {homesData?.name}</h2>
                <small>Description : {homesData?.description}</small>
                <br />
                <small>Address : {homesData?.address}</small>
                <p>Availability Date : {homesData?.availabilityDate}</p>
                <p>Bathrooms : {homesData?.bathrooms}</p>
                <p>Bedrooms : {homesData?.bedrooms}</p>
                <p>Rent Per Month : ${homesData?.rentPerMonth}</p>
                <p>Room Size : {homesData?.roomSize}</p>
                <p>City : {homesData?.city}</p>
                <p>phone Number : {homesData?.phoneNumber}</p>
                <div className="flex items-center justify-center mt-5">
                    <button className="btn btn-primary w-[80%] ">Book Now</button>
                    <CiHeart className="w-[20%] h-10" />
                </div>
            </div>
            <div className="lg:w-[25%]">
                <Calender value={value} handleSelect={handleSelect} />
            </div>
        </div>
    );
};

export default HouseView;