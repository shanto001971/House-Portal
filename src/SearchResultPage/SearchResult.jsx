import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Card from "../Components/Card/Card";


const SearchResult = () => {
    const { searchResults } = useContext(AuthContext)

    return (
        <div className="lg:p-10 grid grid-cols-2 lg:grid-cols-3">
            {
                searchResults?.map(singleData => <Card key={singleData?._id} data={singleData} />)
            }

        </div>
    );
};

export default SearchResult;