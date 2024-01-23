import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import LayOut from "../LayOut/LayOut";
import HouseView from "../HouseView/HouseView";
import LogIn from "../LogInPage/LogIn";
import SignUpPage from "../SignUpPage/SignUpPage";
import SearchResult from "../SearchResultPage/SearchResult";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOut />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/houseView/:id",
                element: <HouseView />
            },
            {
                path: "/logIn",
                element: <LogIn />
            },
            {
                path: "/signUp",
                element: <SignUpPage />
            },
            {
                path: "/searchResult",
                element: <SearchResult />
            },
        ]
    },
]);