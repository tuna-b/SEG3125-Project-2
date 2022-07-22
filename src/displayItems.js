import useFetchData from "./fetchData";
import CompCardGroup from "./cardgroup";

const DisplayItems = (props) => {
        const index = props.index;
        const url = "/data/";
        const { data, isPending, error } = useFetchData(url);

        return (
            <div>
                <CompCardGroup data={data} index={index}></CompCardGroup>
            </div>
        )

}
 
export default DisplayItems;