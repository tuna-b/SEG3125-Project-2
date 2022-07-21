import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';
import './index.css';

const CompCardGroup = (props) => {
    const index = props.index;
    const data = props.data.filter((elem) => elem["id"] - 1 < 6*index && elem["id"] -1 >= 6*index-6);
    console.log(data)
    return (  
        <div>
            
            <CardGroup>
                {data.map((elem) => (
                    
                    <Card className='mx-2'>
                        <Link to={"/games/" + elem["id"]}>
                        <Card.Img variant='top' src={elem["gender"]}></Card.Img>
                        </Link>
                        <Card.Body>
                            <Card.Title>{elem["title"]}</Card.Title>
                            <Card.Text>Genre: {elem["genre"]}</Card.Text>
                            <Card.Text>Description: This is placeholder text for each game</Card.Text>
                        </Card.Body>
                    </Card>
                
            ))}
            </CardGroup>
        </div>
    );
}
 
export default CompCardGroup;