import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";


const Navbar = () => {
    const [user, refetch] = useAuth();
    const [axiosSecure] = useAxios()
    const [searchCity, setSearchCity] = useState('');
    const [searchName, setSearchName] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleLogOut = () => {
        localStorage.removeItem('token');
        refetch()
    }

    console.log(user);

    if (user?.email) {
        refetch()
    }

    const handleSearch = async () => {
        try {
            // Make a request to your backend API to perform the search
            const response = await axiosSecure.get(`/api/search?name=${searchName}&city=${searchCity}`);
            setSearchResults(response.data);  // Assuming the backend returns an array of results
        } catch (error) {
            console.error('Error during search:', error);
        }
    }

    console.log(searchResults)

    return (
        <div className="navbar bg-base-100 lg:px-10 flex justify-between">
            <div className="w-40">
                <Link className=""><img  className="h-24" src="https://png.pngtree.com/element_our/png/20181214/real-estate-house-logo-design-template-vector-illustration-png_269520.jpg" alt="" /></Link>
            </div>
            <div className="w-[40%]">
                <button className="btn" onClick={handleSearch}>Search</button>
               
                <div className="flex items-center relative lg:w-full px-3">
                    <input
                        type="text"
                        placeholder="Search Name"
                        className="input input-bordered w-24 md:w-auto lg:w-full"
                        value={searchName}
                        onChange={(e) => setSearchName(e.target.value)}
                    />
                    <select
                        className="absolute right-5 py-[7px] hidden lg:block"
                        value={searchCity}
                        onChange={(e) => setSearchCity(e.target.value)}
                    >
                        <option className="" value="" >All categories</option>
                        <option value="Villagetown">Village town</option>
                        <option value="Suburbia">Suburbia</option>
                        <option value="Townburg">Town burg</option>
                    </select>

                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img title={user?.fullName} alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-10 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
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