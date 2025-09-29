import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export default function VerificationFailedPage() {
  return (
  <>
  <h1>Lien de vérification invalide ou expiré </h1>
  <div className="contact">
        <div className="row">
            <div className="contacth1">
                <h1>Vous êtes maintenant enregistré</h1>
                <p className="textSubmitted"> Veuillez vérifier votre adresse e-mail avant de vous connecter </p>
                <div className="submittedHome">                     
                    <Link to="/LiveEvents/Register">
                        <Button variant="primary" size="lg" >
                            <p className='submittedHometext'>S'enregistrer</p>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>            
    </div>
    </>
  );
}