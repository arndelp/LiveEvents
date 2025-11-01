import React, { useState}  from 'react';
import Axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

export const apiURL = process.env.REACT_APP_API_URL;

function FormContact() {
    const navigate = useNavigate()

    //définition des variables    
    const [data, setData] =useState({
        lastname: "",
        firstname: "",
        email: "",
        message:""         
    })
// état du recaptcha
   const [value, setValue] = useState(null)
    
    

// Fonction de soumission du formulaire de contact
// Utilise le client HTTP Axios pour envoyer les données (POST) vers l'API
    function submit(e){
        // Empêche le comportement par défaut du navigateur (rechargement de la page)
        e.preventDefault(); 
        // Envoi d'une requête POST vers l'API avec les données du formulaire   
        Axios.post(`${apiURL}/api/contacts`,{
            // Corps de la requête : informations saisies par l'utilisateur
            lastname: data.lastname,
            firstname: data.firstname,
            email: data.email,
            message: data.message
        }, {
            // En-têtes HTTP précisant le format des données envoyées et attendues
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',                
            }
        })
        // Si la requête réussit, on traite la réponse ici
        .then(res=>{            
            navigate('/Submitted')
        })
        // Si une erreur survient, on l'intercepte ici
        .catch(err => {
            console.error("Erreur lors de l'envoi :", err); // Journalisation de l'erreur
            alert("Une erreur s'est produite lors de l'envoi du message."); // Message d'erreur utilisateur
        });
                
    }   

     //fonction handle: Récupération des données entrées par l'utilisateur
    function handle(e){
        const newdata={...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        
    }


    return (
        <>
            <div class="contacth1">
                <h1>Besoin d'un renseignement?  <br></br> Contactez-nous! </h1>
            </div>
            <div >
                <form onSubmit={(e)=> submit(e)} >
                    <Form.Group className="pb-5">
                        <Form.Label className="label">Nom</Form.Label>
                        <Form.Control  className="field" onChange={(e)=>handle(e)} id="lastname" name="lastname" value={data.lastname} type="text" maxLength={50} required></Form.Control>

                        <Form.Label className="label">Prénom</Form.Label>
                        <Form.Control className="field" onChange={(e)=>handle(e)} id="firstname" name="firstname" value={data.firstname} type="text" maxLength={50} required></Form.Control>

                        <Form.Label className="label">email</Form.Label>
                        <Form.Control className="field" onChange={(e)=>handle(e)} id="email" name="email" value={data.email} type="email" maxLength={50} required></Form.Control>
                       
                        <Form.Label className="label">Message</Form.Label>
                        <Form.Control className="field" onChange={(e)=>handle(e)} id="message" name="message" value={data.message} as="textarea" rows={5} maxLength={500} required></Form.Control>
                        <div>
                            <Form.Check className="checkRGPD " label={"En cochant cette case, je consens au traitement de mes données personnelles afin de permettre à LiveEvents de me répondre de la manière la plus pertinente et ce, conformément à la politique de confidentialité dont j’ai pris connaissance et que j’accepte sans réserve." } id={`checkBox`} required></Form.Check>
                        </div>
                        
                        <Link to=" /Confidential" >
                            <Button className="checkRGPDLink" variant="link" >Lire la politique de confidentialité</Button>
                        </Link>
                        

                        <div >
                            <ReCAPTCHA
                                sitekey="6Lcm6PYrAAAAAEyOmP2dV7gskY8aNAD1PGt1Zf2a"
                                onChange={setValue}                                
                            />
                        </div>

                        <div class="submitbutton ">
                            <Button variant="secondary" size="lg" className="boutonSubmit" type='submit' disabled={!value} >
                                Envoyer
                            </Button>
                        </div>                  
                    </Form.Group>
                </form>
            </div>
            </>
    )
    
}
export default FormContact;