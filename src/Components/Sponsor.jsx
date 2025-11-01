import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

export const apiURL = process.env.REACT_APP_API_URL;

const Sponsor = () => {

    // Tableau des sponsors récupérés depuis l'API
    const [sponsors, setSponsors] = useState([]);
    // Message d'erreur en cas de problème de fetch
    const [errorMessage, setErrorMessage] = useState(null);


    // Fetch des sponsors depuis l'API
    useEffect( ()=>{
        const controller = new AbortController();

        const fetchSponsors = async () => {
        try {
            const response = await fetch(`${apiURL}/api/sponsors`, 
            {
                signal: controller.signal,
            }
            );

            if (!response.ok) throw new Error("Pas de connexion réseau");

            const data = await response.json();
            setSponsors(data);    

        } catch (error) {       
            if (error.name === 'AbortError') {
            // Requête annulée
            return;
            }
            setErrorMessage("Impossible de charger les partenaires. Veuillez réessayer plus tard.");
            }       
        }
        
        fetchSponsors();   
            return () => { controller.abort();    // Nettoyage en cas de démontage du composant
            };    
    }, []);

    //reduce construit un objet regroupant les sponsors par type.
    //accumulateur: variable qui stocke le sponsor.type au fur et à mesure des itérations
    //sponsor: élément en cour d'itération
    const sponsorsByType = sponsors.reduce((accumulateur, sponsor) => {
        const type = sponsor.type || "Autre"; // Si pas de type, on met "Autre"
         
        if (!accumulateur[type]) {
            accumulateur[type] = []; // Crée un tableau pour ce type s'il n'existe pas
        }
        // ajout le sponsor courant dans le tableau du bon type
        accumulateur[type].push(sponsor);

        return accumulateur; // Retourne l'objet pour la prochaine itération
        
    }, {}); // {}= valeur initiale de accumulateur (objet vide)   
    
    return (
        <>
            {/* Affichage du message d'erreur */}
            {errorMessage && (
                <div style={{ color: "red", textAlign: "center", margin: "1em" }}>
                    {errorMessage}
                </div>
            )}

            {/* Affichage des sponsors par type */}
            <div className="row">
                {/*Object.keys : méthode native je JS qui renvoie un tableau avec les clé énumérable de sponsorByType*/}
                {Object.keys(sponsorsByType)
                //Tri alphabétique des types
                .sort((a,b) => a.localeCompare(b)) 
                // Pour chaque type, on génère un bloc d'affichage 
                .map(type => (
                    <div key={type} className={ `sponsor-type sponsor-type-${type.toLowerCase()}`}>
                        <h3>{type}</h3>
                        <div className="sponsor ">
                            {sponsorsByType[type].map(sponsor => (
                                <Link key={sponsor.id} to={sponsor.link}>
                                    <img src={sponsor.fullImageUrl} alt={sponsor.name} />
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>  
    )

}

export default Sponsor