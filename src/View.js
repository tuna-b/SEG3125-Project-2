import useFetchData from "./fetchData";
import { Link, useHistory, useParams } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";

const View = () => {   

    const history = useHistory();
    const {id} = useParams();
    const {data, success, error} = useFetchData("http://localhost:8000/data/");
    const [count, setCount] = useState(0);


    if(success) console.log(data[id-1]["reviews"]);;
    
    return (
        <div className="text-center my-4">

            <h1>Reviews for Game ID {id}</h1>

            {success && data[id-1]["reviews"].map(elem => {
                return (
                <div className="my-5">
                    <h4>Review #{data[id-1]["reviews"].indexOf(elem)+1} {elem}</h4>
                </div>
                
            )})}

            <div className="my-3 start mx-5">
                <Link to={"/games/"+id}><Button>Go Back</Button></Link>
            </div>

        </div>
        
      );
}
 
export default View;        