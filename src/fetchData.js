import { useEffect, useState } from "react";

const useFetchData = (url) => {

    const [data, setData] = useState([]);
    const [success, setSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);
    
    useEffect(() => {
        fetch(url)
        .then(res => {
            if(!res.ok) throw Error('unable to fetch data properly');
            return res.json();
        })
        .then(data => {
            setData(data);
            setSuccess(true);
            setErrorMsg(null);
        })
        .catch(err => {
            setErrorMsg(err.message);
        })
    }, url)

    return { data, success, errorMsg };
}
 
export default useFetchData;