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

    const [value, setValue] = useState(null)
    //fonction affichage état du recaptcha
    

    //fonction submit utilisant le client HTTP Axios, permet le POST des data à l'url de l'api
    function submit(e){
        e.preventDefault(); //empêche la soumission du formulaire        
        Axios.post(url,{
            lastname: data.lastname,
            firstname: data.firstname,
            email: data.email,
            message: data.message
        })
        .then(res=>{
            console.log(res.data)
        })
        navigate('/LiveEvents/Submitted')
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
                        <Form.Control  className="field" onChange={(e)=>handle(e)} id="lastname" name="lastname" value={data.lastname} type="text" required></Form.Control>

                        <Form.Label className="label">Prénom</Form.Label>
                        <Form.Control className="field" onChange={(e)=>handle(e)} id="firstname" name="firstname" value={data.firstname} type="text" required></Form.Control>

                        <Form.Label className="label">email</Form.Label>
                        <Form.Control className="field" onChange={(e)=>handle(e)} id="email" name="email" value={data.email} type="email" required></Form.Control>
                       
                        <Form.Label className="label">Message</Form.Label>
                        <Form.Control className="field" onChange={(e)=>handle(e)} id="message" name="message" value={data.message} as="textarea" rows={5} required></Form.Control>
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