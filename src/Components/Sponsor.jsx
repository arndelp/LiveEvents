import React, {useState, useEffect} from 'react';

const Sponsor = () => {

    const [pub, setPub] = useState([]);  
    const [errorMessage, setErrorMessage] = useState(null); //message d'erreur du fetch

    useEffect( ()=>{
            const controller = new AbortController();
    
            const apiCallSponsors = async () => {
            try {
                const apiCallPromise = await fetch("https://concertslives.store/api/sponsors", 
                {
                    signal: controller.signal,
                }
                );
                if (!apiCallPromise.ok) 
                throw new Error("Pas de connexion réseau");
    
                const apiCallObj = await apiCallPromise.json();
                setPub(apiCallObj);    
    
            } catch (error) {       
                if (error.name === 'AbortError') {
                // Requête annulée
                return;
                }
                setErrorMessage("Impossible de charger les partenaires. Veuillez réessayer plus tard.");
                }       
            }
            
            apiCallSponsors();   
                return () => { controller.abort();    
                };    
        }, []);

        const partenaires = pub.map(item =>  
        <div className="sponsor">
            <img key={item.id} src={item.fullImageUrl} alt={item.name} className=" pubLogo" />
        </div>  
    )
    
    return (
        <>
        {errorMessage && (
            <div style={{ color: "red", textAlign: "center", margin: "1em" }}>
                {errorMessage}
            </div>
        )}
        <div>      
            {partenaires}
        </div>
        </> 
    )

}

export default Sponsor