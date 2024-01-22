import { Link } from "react-router-dom";


const Card = ({ data }) => {
    return (
        <>
            <Link to={`/houseView/${data?._id}`} >
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className="lg:h-60 lg:w-full"><img className="lg:h-60 lg:w-full" src={data?.picture} alt="House" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{data?.name}</h2>
                        <p>{data?.description.slice(0, 50)}<small className="font-medium">...See more</small> </p>
                        <small className="font-medium">City: {data?.city}</small>
                        <small className="font-medium">Room Size: {data?.roomSize}</small>
                        <small className="font-medium">Rent Per Month: ${data?.rentPerMonth}</small>
                    </div>

                </div>
            </Link>
        </>
    );
};

export default Card;