import React, { useState, useEffect }  from 'react';
import Axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

export const apiURL = process.env.REACT_APP_API_URL;

function FormRegister() {
    const navigate = useNavigate()

    const [data, setData] =useState({
        lastname: '',
        firstname: '',
        email: '',
        password: '',
        style: '',
        streetnumber: '',
        street: '',
        postalcode: '',
        city: '',
        country: '',
        phone: '',        
    })

    const [countries, setCountries] = useState([]);
    const [loadingCountries, setLoadingCountries] = useState(true);

    const [value, setValue] = useState(null)
    //fonction affichage état du recaptcha
    
    //fonction submit utilisant le client HTTP Axios, permet le POST des data à l'url de l'api
    function submit(e){
        

        e.preventDefault(); //empêche la soumission du formulaire   
        Axios.post(`${apiURL}/api/customers`,{
            lastname: data.lastname,
            firstname: data.firstname,
            email: data.email,
            password: data.password,
            style: data.style,
            streetnumber: data.streetnumber,
            street: data.street,
            postalcode: data.postalcode,
            city: data.city,
            country: data.country,
            phone: data.phone,
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',                
            }
        })
        .then(res=>{            
            navigate('/Registered') // redirection vers la page de login après inscription
        })
        .catch(err => {
            if (err.response && err.response.data) {
                alert(err.response.data.error || 'Une erreur est survenue');
            } else {
                alert('Erreur serveur');
            }
        });
        
    }

    //fonction handle: Récupération des données entrées par l'utilisateur
    function handle(e){
        const newdata={...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        
    }



// Récupère les pays une seule fois au montage
    useEffect(() => {
        async function fetchCountries() {
            try {
                const res = await fetch('https://restcountries.com/v3.1/all?fields=name,cca2');
                const result = await res.json();

                const sorted = result
                .map(c => ({ code: c.cca2, name: c.name.common }))
                .sort((a, b) => a.name.localeCompare(b.name, 'fr'));

                setCountries(sorted);
            } catch (err) {
                console.error("Erreur de chargement des pays :", err);
            } finally {
                setLoadingCountries(false);
            }
        }
        fetchCountries();
    }, []);    


    return (
        <>
            <div className="contacth1">
                <h1>S'inscrire </h1>
            </div>
            <div >
                <form onSubmit={(e)=> submit(e)} >
                    <Form.Group className="pb-5">
                        <Form.Label className="label" htmlFor="lastname">Nom</Form.Label>
                        <Form.Control  className="field" onChange={handle} id="lastname" name="lastname" value={data.lastname} type="text" maxLength={30} required></Form.Control>

                        <Form.Label className="label"  htmlFor="firstname">Prénom</Form.Label>
                        <Form.Control className="field" onChange={handle} id="firstname" name="firstname" value={data.firstname} type="text" maxLength={30} required></Form.Control>
                        
                        <Form.Label className="label" htmlFor="email">email</Form.Label>
                        <Form.Control className="field" onChange={handle} id="email" name="email" value={data.email} type="email" maxLength={30} required></Form.Control>

                        <Form.Label className="label"  htmlFor="firstname">Mot de passe</Form.Label>
                        <Form.Control className="field" onChange={handle} id="password" name="password" value={data.password} type="text" maxLength={50} required></Form.Control>
                       
                        <Form.Label className="label" htmlFor="style">Style de musique préféré</Form.Label>
                        <Form.Select className="field" onChange={handle} id="style" name="style" value={data.style}  maxLength={20} required>
                            <option>Choisir...</option>
                            <option value="Électro">Électro</option>
                            <option value="Pop">Pop</option>
                            <option value="Rock">Rock</option>
                            <option value="Hip-hop / Rap">Hip-hop / Rap</option>
                            <option value="Reggae">Reggae</option>
                        </Form.Select>

                        <Form.Label className="label" htmlFor="phoneNumber">Téléphone</Form.Label>
                        <Form.Control className="field" onChange={handle} id="phone" name="phone" value={data.phone} type="text" maxLength={25} required></Form.Control>

                        <Form.Label className="label" htmlFor="streetNumber">Numéro de rue</Form.Label>
                        <Form.Control className="field" onChange={handle} id="streetnumber" name="streetnumber" value={data.streetnumber} type="text" maxLength={10} required></Form.Control>

                        <Form.Label className="label" htmlFor="street">Voie</Form.Label>
                        <Form.Control className="field" onChange={handle} id="street" name="street" value={data.street} type="text" maxLength={50} required></Form.Control>

                        <Form.Label className="label" htmlFor="postalCode">Code postal</Form.Label>
                        <Form.Control className="field" onChange={handle} id="postalcode" name="postalcode" value={data.postalcode} type="text" maxLength={10} required></Form.Control>

                        <Form.Label className="label" htmlFor="city">Ville</Form.Label>
                        <Form.Control className="field" onChange={handle} id="city" name="city" value={data.city} type="text" maxLength={10} required></Form.Control>

                        <Form.Label className="label" htmlFor="country">Pays</Form.Label>
                        <Form.Select className="field" onChange={handle} id="country" name="country" value={data.country}  maxLength={10} required>
                            <option value="">— Choisissez un pays —</option>
                            {loadingCountries && <option disabled>Chargement en cours…</option>}
                            {!loadingCountries &&
                            countries.map(c => (
                                <option key={c.code} value={c.name}>
                                {c.name}
                                </option>
                            ))}
                        </Form.Select>


                        <div>
                            <Form.Check className="checkRGPD " label={"En cochant cette case, je consens au traitement de mes données personnelles afin de permettre à LiveEvents de me répondre de la manière la plus pertinente et ce, conformément à la politique de confidentialité dont j’ai pris connaissance et que j’accepte sans réserve." } id={`checkBox`} required></Form.Check>
                        </div>
                        
                        <Link to="/Confidential" >
                            <Button className="checkRGPDLink" variant="link" >Lire la politique de confidentialité</Button>
                        </Link>
                        

                        
                        
                
                        <ReCAPTCHA
                            sitekey="6Lcm6PYrAAAAAEyOmP2dV7gskY8aNAD1PGt1Zf2a"
                            onChange={setValue}                            
                        /> 
                        

                        <div className="submitbutton ">
                            <Button variant="secondary" size="lg" className="boutonSubmit " type='submit' disabled={!value} >
                                S'inscrire
                            </Button>
                        </div> 
                        
                        
                       
                    </Form.Group>
                </form>
            </div>
            </>
    )
    
}
export default FormRegister;