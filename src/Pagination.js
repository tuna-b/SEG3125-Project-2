import Pagination from 'react-bootstrap/Pagination';

const compPagination = (props) => {

    const data = props.data;

    return (  
        <Pagination>
            <Pagination.First/>
            <Pagination.Prev/>
            {() => {
                for (let x = 0; x < data.length; x++) {
                    return(
                        <Pagination.Item>{x}</Pagination.Item>
                    )
                    
                }
            }}
            <Pagination.Next />
            <Pagination.Last />
        </Pagination>
    );
}
 
export default compPagination;