import Banner from "../BannerSection/Banner";
import HomesPortal from "../HomesPortal/HomesPortal";
import useAuth from "../hooks/useAuth";


const Home = () => {
    // const [user] = useAuth();
    // console.log(user)

    return (
        <div className="lg:px-5">
            <Banner />
            <HomesPortal />
        </div>
    );
};

export default Home;