import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const Navbar = () => {
    const [user, refetch] = useAuth();

    const handleLogOut = () => {
        localStorage.removeItem('token');
        refetch()
    }

    // console.log(user);

    if (user?.email) {
        refetch()
    }

    return (
        <div className="navbar bg-base-100 lg:px-10">
            <div className="flex-1">
                <Link className=""><img className="h-24" src="https://png.pngtree.com/element_our/png/20181214/real-estate-house-logo-design-template-vector-illustration-png_269520.jpg" alt="" /></Link>
            </div>
            <div className="flex-none gap-2">
                <h1>{user.fullName}</h1>
                <div className="form-control">

                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
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