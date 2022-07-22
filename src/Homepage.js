import Container from "react-bootstrap/esm/Container";
import Image from 'react-bootstrap/Image'
import DisplayItems from "./displayItems";
import compCarousel from "./compCarousel";
import 'bootstrap/dist/css/bootstrap.min.css';

const Homepage = () => {
    return ( 
        <div className="Home">

                <h1 className="text-center my-4">Welcome To Gameify! Click on an image of game to check information of games!</h1>
                <h3 className="my-5 text-muted text-center">Here is a list of some of our featured games...</h3>
                <Container className="lg justify-content-center">
                    <DisplayItems index={1}></DisplayItems>
                    <div className="my-4 text-center text-muted h3"> Here are some other games:</div>
                    <DisplayItems index={2}></DisplayItems>

                </Container>



        </div>
     );
}
 
export default Homepage;