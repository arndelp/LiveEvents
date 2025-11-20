import React from "react";
import { useLocation, Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { Button } from "flowbite-react";





/*Utilisation de la fonction useLocation de react router pour récupérer les données de Programme */

export default function ProgrammeDetails () {
  const location = useLocation();
  
  const name = location.state.name;
  const day = location.state.day;
  const place = location.state.location
  const fullImageUrl = location.state.fullImageUrl
  const details = location.state.details
  const details2 = location.state.details2
  const style = location.state.style

  




  return (
    <>
          
        <div >              
          <Card className= "kard pt-4">
            
            <div className="imageDetailsContainer">
              <Card.Img variant="top" src={fullImageUrl} className="imageDetails mt-2 " />
            </div>
             
            <Card.Body>
              <Card.Title className="fs-1 lh-sm link-danger" >{name}</Card.Title>
              <Card.Text className="fs-3 lh-sm">
                {day}
              </Card.Text>
              <Card.Text className="fs-3 lh-sm">
                {place}
              </Card.Text>
              <Card.Text className="fs-3 lh-sm">
                {style}
              </Card.Text>
              <Card.Text  className="fs-6 lh-sm mt-3">
                {details}
              </Card.Text>
              <Card.Text  className="fs-6 lh-sm mt-3">
                {details2}
              </Card.Text>

        {/*Bouton Retour, utilisation de la méthode react useNavigate */}
              <Link to='/Programmation'>
                <Button color="blue"  className="boutonRetourDetail">Retour</Button>
              </Link>
            </Card.Body>
          </Card>          
        </div>      
          
    </>
  )
}




