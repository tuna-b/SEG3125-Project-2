import { useState } from "react";
import CompCardGroup from "./cardgroup";
import useFetchData from "./fetchData";

const ObtainAllGames = (props) => {

    const {data} = useFetchData("http://localhost:8000/data");
    
    return (  
        <div>
            {data.map(elem => {
                return (
                <CompCardGroup index={elem["id"]} data={data}></CompCardGroup>
                )        
            })}
        </div>
    );
}
 
export default ObtainAllGames;