import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';
import './index.css';

const CompCardGroup = (props) => {
    const index = props.index;
    const data = props.data.filter((elem) => elem["id"] - 1 < 6*index && elem["id"] -1 >= 6*index-6);

    return (  
        <div className='my-2'>
            
            <CardGroup>
                {data.map((elem) => (
                    
                    <Card className='mx-2'>
                        <Link to={"/games/" + elem["id"]}>
                        <Card.Img variant='top' src={elem["gender"]}></Card.Img>
                        </Link>
                        <Card.Body>
                            <Card.Title>Game Title: {elem["title"]}</Card.Title>
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