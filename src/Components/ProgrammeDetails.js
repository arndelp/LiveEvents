import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "../style/Programme.css";



/*Utilisation de la méthose useLocation de react router pour récupérer les données de Programme */

export default function ProgrammeDetails () {
  const location = useLocation();
  
  const name = location.state.name;
  const day = location.state.day;
  const place = location.state.location
  const fullImageUrl = location.state.fullImageUrl
  const details = location.state.details
  const details2 = location.state.details2



  const navigate = useNavigate();
  return (
    <>
    <div className="row">
     
      <div class= "col-12 bigCard">
    
   
<Card style={{ width: '80vh' }}>
    <div class="container">
      <Card.Img variant="top" src={fullImageUrl} class="imageDetails " />
      </div>
      <Card.Body>
        <Card.Title class="fs-1 lh-sm link-danger" >{name}</Card.Title>
        <Card.Text class="fs-3 lh-sm">
          {day}
        </Card.Text>
        <Card.Text class="fs-3 lh-sm">
          {place}
        </Card.Text>
        <Card.Text  class="fs-4 lh-sm">
          {details}
        </Card.Text>
        <Card.Text  class="fs-5 lh-sm">
          {details2}
        </Card.Text>

{/*Bouton Retour, utilisation de la méthode react useNavigate */}
        <Button variant="primary" onClick={() => navigate(-1)}>Retour</Button>
      </Card.Body>
    </Card>
    </div>
    
    </div>
    
        </>
  )
}




