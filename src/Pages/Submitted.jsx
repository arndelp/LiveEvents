import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function Contact() {
  
  return (
    <div class="contact">
        <div class="row">
            <div class="contacth1">
                <h1>Merci pour l'intérêt dont vous nous portez ! </h1>
                <p class="textSubmitted">  nous vous répondrons dans les plus brefs délais </p>
                <div class="submittedHome"> 
                    <Link to="/LiveEvents/">
                        <Button variant="primary" size="lg">
                            Accueil
                        </Button>
                    </Link>
                </div>
            </div>
        </div>            
    </div>
  );
}
export default Contact;