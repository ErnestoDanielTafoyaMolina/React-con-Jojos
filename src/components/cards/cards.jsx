import React from "react";
import { Card, Button } from 'react-bootstrap';
import './cards.css';

const JojoCards = (props) =>{

    const titulo=props.JojoPart;
    const portada=props.Portada;
    const protagonista=props.Jojo;
    const habilidad=props.Habilidad;
    const villano=props.Villano;

    return(<>

            <Card className="card-content" >
                <Card.Title className="title">{titulo}</Card.Title>
                <Card.Img variant="top" src={portada} className='card-img'/>
                <Card.Body>
                    <Card.Text>

                        El jojo de esta parte es { protagonista }, su habilidad principal es { habilidad } y 
                        el villano principal es { villano }

                    </Card.Text>
                    <Button variant="success">Ver más...</Button>
                </Card.Body>
            </Card>

    </>);
};

export default JojoCards;