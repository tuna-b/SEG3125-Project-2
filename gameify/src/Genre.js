import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetchData from "./fetchData";
import CompCardGroup from "./cardgroup";
import OffCanvas from "./OffCanvas";
import Button from "react-bootstrap/esm/Button";

const Genre = () => {
    
    const { genre } = useParams();
    const { data } = useFetchData("http://localhost:8000/data");
    const [arr, setArr] = useState([]);

    const filterData = (arr) => {

        const temp = (arr.filter(elem => {
            return elem["genre"].match(genre[0].toUpperCase() + genre.slice(1, genre.length));
        }))
        setArr(temp);
    }
    
    useEffect(() => {
        filterData(data);
    }, [genre]);

    return ( 
        <div className="text-center">
            <OffCanvas></OffCanvas>
            <h1>Currently Displaying Games With Genre: {genre}! (will include other genres as well)</h1>
            {data.map(elem => {
                return (
                <CompCardGroup index={elem["id"]} data={arr}></CompCardGroup>
                )        
            })}
        </div>
     );
}
 
export default Genre;