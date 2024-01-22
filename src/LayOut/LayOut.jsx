import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import Footerr from "../Footer/Footerr";


const LayOut = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footerr />
        </div>
    );
};

export default LayOut;