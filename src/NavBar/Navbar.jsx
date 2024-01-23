import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useContext, useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import  { AuthContext } from "../provider/AuthProvider";
import { FaSortDown } from "react-icons/fa";


const Navbar = () => {
    const { searchResults, setSearchResults } = useContext(AuthContext)
    const [user, refetch] = useAuth();
    const [axiosSecure] = useAxios()
    const [searchName, setSearchName] = useState('');
    const [searchCity, setSearchCity] = useState('');
    const [bedrooms, setBedrooms] = useState('');
    const [bathrooms, setBathrooms] = useState('');
    const [roomSize, setRoomSize] = useState('');
    const [availability, setAvailability] = useState('');
    const [minRent, setMinRent] = useState('');
    const [maxRent, setMaxRent] = useState('');
    const navigate = useNavigate()

    const handleLogOut = () => {
        localStorage.removeItem('token');
        refetch()
    }

    // console.log(user);
    // console.log(searchResults)

    useEffect(() => {
        // Check if there are search results and navigate to the search result page
        if (searchResults.length > 0) {
            navigate('/searchResult');
        }
    }, [searchResults, navigate]);


    if (user?.email) {
        refetch()
    }

    const handleSearch = async () => {
        try {
            const response = await axiosSecure.get('/api/search', {
                params: {
                    name: searchName,
                    city: searchCity,
                    bedrooms,
                    bathrooms,
                    roomSize,
                    availability,
                    minRent,
                    maxRent,
                },
            });
            setSearchResults(response.data);
        } catch (error) {
            console.error('Error during search:', error);
        }
    };

    // useEffect(() => {
    //     handleSearch();
    // }, []);
    // console.log(searchResults)

    return (
        <div className="navbar bg-base-100 lg:px-10 flex justify-between">
            <div className="w-40">
                <Link className=""><img className="h-24" src="https://png.pngtree.com/element_our/png/20181214/real-estate-house-logo-design-template-vector-illustration-png_269520.jpg" alt="" /></Link>
            </div>
            <div className="w-[40%]">
                <button className="btn" onClick={handleSearch}>Search</button>

                <div className="flex items-center relative lg:w-full px-3">
                    <input
                        type="text"
                        placeholder="Search House Name,city,bedrooms,bathrooms,room size,availability"
                        className="input input-bordered w-24 md:w-auto lg:w-full"
                        value={searchName}
                        onChange={(e) => setSearchName(e.target.value)}
                    />

                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img title={user?.fullName} alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                        <FaSortDown />
                    </div>
                    <ul tabIndex={0} className="mt-3 z-10 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        {user?.role === "House Owner" && <Link to="/wonerDashboard"><li className="ml-3">Owner Dashboard</li></Link>}
                        {user?.role === "House Renter" && <Link to="/renterDashboard" ><li className="ml-3">Renter Dashboard</li></Link>}


                        {user.email ? (
                            <button onClick={handleLogOut}><Link to="/">LogOut</Link></button>
                        ) : (
                            <button className="z-10"><Link to="/login">LogIn</Link></button>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;