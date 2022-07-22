import Container from "react-bootstrap/esm/Container";
import { useParams, Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import useFetchData from "./fetchData";
import {useHistory} from 'react-router-dom';
import Button from "react-bootstrap/esm/Button";
import { useEffect, useState } from "react";

const Write = (props) => {

    const {id} = useParams();
    const [review, setReview] = useState();
    const [test, setTest] = useState();
    const history = useHistory();
    const [pending, setPending] = useState(false);

    const {data, success, error} = useFetchData("https://serene-basin-23665.herokuapp.com/data/");

    useEffect(() => {
        setTest(id);
    }, [])

    const handleClick = () => {
        const tmp = [...data[test-1]["reviews"], review];


        if (test === undefined) return;
        else {

            fetch('http://localhost:8000/data/' + test, {
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify( 
                    { 
                        title: data[test-1]["title"],
                        studio: data[test-1]["studio"],
                        price: data[test-1]["price"],
                        genre: data[test-1]["genre"],
                        gender: data[test-1]["gender"],
                        reviews: tmp,
                    }
                     )
            }).then(() => {
                setPending(true);
                setTimeout(() => {history.push('/');}, 3000);
                
            })

        }
    }


    return ( 
        <Container className="sm-6 my-5">
            <Form>

                <Form.Group controlId="formID">
                    <Form.Label>ID (will be autofilled if writing review directly from game)</Form.Label>
                    <Form.Control type="text" value={test} placeholder="Write the ID of the game you would like to review" onChange={(e) => setTest(e.target.value)}></Form.Control>
                </Form.Group>     

                <Form.Group controlId="formReview">
                    <Form.Label>Review</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Write your review here" value={review} onChange={(e) => setReview(e.target.value)}></Form.Control>
                </Form.Group> 

            </Form>

            {!pending && <div className="text-center my-4">
            <Button onClick={() => handleClick()}>Submit</Button>
            <div className="my-3 start mx-5">
                <Link to={"/games/"+id}><Button>Go Back</Button></Link>
            </div>
            </div>}

            {pending && <div className="text-center my-4">
            <h1>Review Submitted! going back to Homepage in 3 seconds...</h1>
            </div>}
        </Container>
     );
}
 
export default Write;