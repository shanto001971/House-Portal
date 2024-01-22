import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/Navbar";


const LayOut = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default LayOut;