import { useState, useEffect } from "react";



/*Function permettant l'affichage des premiers concerts du festival D1S1=Day1 Schedule1*/

export default function ConcertHomePage() {

  /*concerts est initialement vide*/
  const [concerts, setConcerts] = useState([])

  const [errorMessage, setErrorMessage] = useState(null); //message d'erreur du fetch

/*envoi une requête et récupération des données dans 'dataConcerts.json' puis les stockent dans concerts avec setConcerts*/
  /*utilisation requêtes asynchrones*/
    useEffect(()=>{
       // création d'un controller d'annulation
      const controller = new AbortController();

      const apiCallConcerts = async () => {

        try {
          const apiCallPromise = await fetch("https://concertslives.store/api/concerts", 
          {
            signal: controller.signal,   // on passe l'objet controller avec la propriété signal au fetch, afin de pouvoir arrêter la requête plus tard avec controller.abort() 
          });

          if (!apiCallPromise.ok) throw new Error("Pas de réponse réseau");
          const apiCallObj = await apiCallPromise.json();
          setConcerts(apiCallObj);
        }catch (error) {
          if (error.name === 'AbortError') {
            // Requête annulée (pas grave)
            return;
            }
            // Message pour l'utilisateur
            setErrorMessage("Impossible de charger la liste des concerts. Veuillez réessayer plus tard.");
          }          
        };   
        apiCallConcerts();  
          // Nettoyage quand le composant se démonte :  
          return () => { controller.abort();    
        };             
      }, []);
     



      
  /*on met dans Val les concerts ayant la date et l'horaire  */
  const day1sch1 = concerts.filter(Val =>
    Val.day === "09/07/2027" && Val.schedule === "18:00 - 19:00");  


/*on liste le contenu de Val , affichage dans des cards*/

  const listDay1Sch1 = day1sch1.map(Val =>
    
    <li key={Val.id} className="listCard mt-2">
    <div class="card cardh" >
      <div class="row g-0">
        <div class="col-md-4 ">
          <img src={Val.fullImageUrl}  class="img-fluid rounded" alt={Val.name} />
        </div>
        <div class="col-md-8 ">
          <div class="card-body">
            <h5 class="card-title">{Val.name}</h5>
            <p class="card-text pb-2">{Val.schedule}</p>
            <p class="card-text"><small class="text-body-secondary ">{Val.location}</small></p>
          </div>
        </div>
      </div>
    </div>
  </li>     
       
  );


 /*Affichage de la liste + lien vers Programmation */

return ( 
  <div className='row  g-0 '>
    <div className="pb-0 mt-8 " data-testId="concertHome">   
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}  
      <ul >{listDay1Sch1}</ul>
    </div>
  </div>
)

   




}