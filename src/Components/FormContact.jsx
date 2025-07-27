import React, { useState}  from 'react';
import Axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";


function FormContact() {
    const navigate = useNavigate()

    //définition des variables
    const url ="https://concertslives.store/api/contacts" 

    const [data, setData] =useState({
        lastname: "",
        firstname: "",
        email: "",
        message:""         
    })
// état du recaptcha
    const [value, setValue] = useState(null)
    
    

    //fonction submit utilisant le client HTTP Axios, permet le POST des data à l'url de l'api
    function submit(e){
        e.preventDefault(); //empêche la soumission du formulaire   
        Axios.post(url,{
            lastname: data.lastname,
            firstname: data.firstname,
            email: data.email,
            message: data.message
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',                
            }
        })
        .then(res=>{
            console.log(res.data)
            navigate('/LiveEvents/Submitted')
        })
        .catch(err => {
            console.error("Erreur lors de l'envoi :", err);
            if (err.response) {
                console.error("Statut HTTP :", err.response.status);
                console.error("Données de la réponse :", err.response.data);
            } else {
                console.error("Pas de réponse serveur");
            }
        });        
    }   

     //fonction handle: Récupération des données entrées par l'utilisateur
    function handle(e){
        const newdata={...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
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
                        
                        <Link to="/LiveEvents/Confidential" >
                            <Button className="checkRGPDLink" variant="link" >Lire la politique de confidentialité</Button>
                        </Link>
                        

                        <div >
                            <ReCAPTCHA
                                sitekey="6LfQ-NwqAAAAAPQ7zlhsVFa-88bdAJT7v0QwOWsy"
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