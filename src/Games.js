import { Link, useParams } from "react-router-dom";
import useFetchData from "./fetchData";
import Button from "react-bootstrap/esm/Button";

const Games = (props) => {

    const {data, success} = useFetchData("/data/");
    const {id} = useParams();

    return ( 
        <div className="text-center align-middle my-5">
            {!success && <div>Loading...</div>}
            {success && <div className="my-5">
                    <h1 className="my-5">ID: {data[id-1]["id"]}</h1>
                    <h1 className="my-5">Title: {data[id-1]["title"]}</h1>
                    <h1 className="my-5">Genre(s): {data[id-1]["genre"]}</h1>
                    <h1 className="my-5">Studio: {data[id-1]["studio"]}</h1>
                    <h1 className="my-5">Price: {data[id-1]["price"]}</h1>
                    <h1 className="my-5">This text is a dummy embedded video to show gameplay.</h1>
                    <Link to={"/forum/" + id}>
                        <Button>Write a Review</Button>
                    </Link>
                    
                    <div className="my-3"></div>
                    <Link to={"/view/" + id}>
                        <Button>Read Reviews</Button>
                    </Link>
                </div>}
            
        </div>
     );
}
 
export default Games;