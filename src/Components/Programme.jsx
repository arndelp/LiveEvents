import React from "react";
import { useState, useEffect} from "react";
import { Link} from "react-router-dom";
import { Button } from "flowbite-react";
import ScrollToTopButton from "./ScrollToTopButton";

export const apiURL = process.env.REACT_APP_API_URL;


const Programme = ()  => {

/////////////////////////////////Définition des variables/////////////////////////////////////

//lodash pour méthode _.uniqBy
const _ = require("lodash"); 
const [concerts, setConcerts] = useState([]);   
const [concertsFiltered, setConcertsFiltered] =useState([]); 
const [concertsFilteredDay, setConcertsFilteredDay] = useState([]); 
const [dayChecked, setDayChecked] =React.useState(false);
const [showLinks, setShowLinks] = useState(false);
const [showResults, setShowResults] = useState(true);
const [errorMessage, setErrorMessage] = useState(null); //message d'erreur du fetch



//////////////////////////////Conversions Filtres/////////////////////////////////////////
//classement des résultat par heure
const concertsFilteredOrderedSchedule = concertsFiltered.sort(function compare(a,b){
  if (a.schedule < b.schedule)
    return -1;
  if (a.schedule > b.schedule)
    return 1;
  return 0;
})

//classement des résultats pas jour
const concertsFilteredOrderedDay =  concertsFilteredOrderedSchedule.sort(function compare(a,b){
  if (a.day < b.day)
    return -1;
  if (a.day > b.day)
    return 1;
  return 0;
})



const handleCheckedDay = (e)=>{
  if (e.target.checked) {
    const concertsFilteredDay = concerts.filter((Val) => Val.day === e.target.value)
      setConcertsFilteredDay(concertsFilteredDay);
      setConcertsFiltered(concertsFilteredDay);  
      unCheckFilters();  
      setDayChecked(true);    
  } 
} 


      
//Création des filtres (retrait des doublons par la méthode .uniq de lodash)
const uniqDayConcert = _.uniqBy(concerts, 'day')
//trie des filtres par ordre alphabétique par la méthose .sort associée à une fonction de comparaison
const uniqDayConcerts = uniqDayConcert.sort(function compare(a,b){
  if (a.day < b.day)
    return -1;
  if (a.day > b.day)
    return 1;
  return 0;
})
// idem pour filtre horaire
const uniqScheduleConcert = _.uniqBy(concertsFilteredDay, 'schedule');
const uniqScheduleConcerts=uniqScheduleConcert.sort(function compare(a,b){
  if (a.schedule < b.schedule)
    return -1;
  if (a.schedule > b.schedule)
    return 1;
  return 0;
});

// idem pour les autres filtres, pas besoin de trie alphabétique
const uniqLocationConcerts = _.uniqBy(concertsFilteredDay , 'location' );  
const uniqStyleConcerts = _.uniqBy(concertsFilteredDay, 'style');


////////////////////////////////////////Fonctions//////////////////////////////////////

const handleShowResults = () => {
    setShowResults(true);
    setShowLinks(false);
    window.scrollTo({
      top: 0,      
      behavior: "smooth",
    });
}

const handleShowLinks = () => {
  setShowLinks(!showLinks);
  setShowResults(!showResults);
}

// Fonctions de désactivation des tries lors du changement de concert
const unCheckFilters = () => {
  let radioButtonsOther = document.getElementsByName("radio");  
  radioButtonsOther.forEach(value=>value.checked = false);  
};
//Désactivation de tout les radios
const reset = () => {
  let allRadioButtons = document.querySelectorAll(".checkBox");
  allRadioButtons.forEach(value=>value.checked = false);  
  setConcertsFiltered(concerts); 
  setDayChecked(false);
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

const handleCheckedOther = (e)=>{
  if (e.target.checked) {
  const concertsFilteredOther = concertsFilteredDay.filter((Val) =>  Val.schedule === e.target.value || Val.location === e.target.value || Val.style === e.target.value)
  setConcertsFiltered(concertsFilteredOther);    
  } 
} 

  // Récupération des données de l'API
  useEffect( ()=>{
    // Création d'un AbortController pour pouvoir annuler la requête si nécessaire
    const controller = new AbortController(); //API JavaScript native qui sert à annuler une requête réseau
    const apiCallConcerts = async () => {
      try {
           // On attache le signal du controller à la requête fetch pour pouvoir l'annuler plus tard
        const apiCallPromise = await fetch(`${apiURL}/api/concerts`, 
          {            
            signal: controller.signal,    
          }
        );
        //on doit forcer une erreur si le serveur répond avec un code http 4xx ou 5xx.        
        if (!apiCallPromise.ok) 
          throw new Error("Pas de réponse réseau");

        const apiCallObj = await apiCallPromise.json();
        setConcerts(apiCallObj)    
        setConcertsFiltered(apiCallObj) 
          
        // si une erreur se produit
        } catch (error) {
          if (error.name === 'AbortError') {
            // Requête annulée , on quitte simplement
            return;
            }
            // Message d'erreur pour l'utilisateur si la requête échoue
            setErrorMessage("Impossible de charger la liste des concerts. Veuillez réessayer plus tard.");
          }          
        };
         // Appel de la fonction async pour récupérer les concerts
      apiCallConcerts();
      // Nettoyage : on annule la requête si le composant se démonte ( optimisation du réseau.)
      return () => { controller.abort();    
    };    
  }, []); 

    

     
// Vignette d'affichage et lien vers détails avec props          
const Details= ({id ,name, style, location, schedule, day, fullImageUrl, details, details2}) => {    
    return (
      < Link to='/Programmation/ProgrammeDetails' state={{id, name, style, location, schedule, day, fullImageUrl, details, details2}}>            
          <div class="row card cardh mb-3 mt-3" >
            <div class="row g-0">
              <div class="col-md-4 ">
                <img src={fullImageUrl}  class="img-fluid rounded" alt={name} />
              </div>
              <div class="col-md-8 ">
                <div class="card-body progBody">
                  <h2 class="card-title">{name}</h2>
                  <p class="card-text pb-2">{style}</p>
                  <p class="card-text pb-2">{day}</p>
                  <p class="card-text pb-2">{schedule}</p>
                  <p class="card-text"><small class="text-body-secondary ">{location}</small></p>
                </div>
              </div>
            </div>
          </div>
      
      </Link>
    ); 
  }
   
const ListConcert = ({concerts}) => {    
  return (
  /*transformation de l'objet item en tableau Val */ 
    <div class={`  ${showResults ? "d-block" : "d-none"} `}>     
      <div className="row  g-0 kardProg">
        <div  className="cardProg pb-0" >
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}  
          {concerts.map((Val) => {                    
            return (                   
          /* définition des variables name, day, shedule, fullImageUrl, details pour la variable Details*/                         
              <Details name={Val.name}
                style={Val.style}
                location={Val.location}
                day={Val.day}
                schedule={Val.schedule}
                fullImageUrl={Val.fullImageUrl}
                details={Val.details} 
                details2={Val.details2} />             
            );
          })}
        </div>
      </div>  
    </div>  
  );
}    

  return (
    <>
      <div className="fullpageProg">                
        <div>                       
          <div class="btn-group BurgerSituation  " data-toggle="buttons-checkbox">                                  
            <button type="button" class="BurgerProg btn btn-default " onClick={handleShowLinks}>   
              <h2 className="h2BurgerProg">Filtres</h2>                     
              <img src={`${process.env.PUBLIC_URL}/assets/parametres-curseurs.png`} alt='curseur' ></img>                        
            </button>                    
          </div>                    
        </div>            
        
        <div class={`  ${showLinks ? "d-block" : "d-none"} `}>  
          <div className="menuFilter">
            <h2  className="titleFilter ">Choisir le jour:</h2>
            {uniqDayConcerts.map((Val) => {
              return (
                <>
                  <div>                                            
                    <p className="listCheck">
                      <input className="checkBox" class="checkBox" type="radio"  value={Val.day} name="radioDay"   onClick={handleCheckedDay} />
                      <label>{Val.day}</label> 
                    </p>  
                                      
                  </div>
                </>
              );
            })} 
          </div>
          
          <div class={`${dayChecked ? "d-block" : "d-none"} `}>   
            <div className="menuFilter">
              <h2 className="titleFilter">Filtrer par horaire:</h2> 
                {uniqScheduleConcerts.map((Val) => {        
                  return (
                    <>           
                      <div>                                   
                        <p className="listCheck">
                          <input className="checkBox"  type="radio" value={Val.schedule} name="radio"  onChange={handleCheckedOther}    />
                          <label>{Val.schedule}</label> 
                        </p>                        
                      </div>
                    </>
                  );
                })} 

              <h2 className="titleFilter">Filtrer par style:</h2>    
                {uniqStyleConcerts.map((Val) => {                             
                  return (
                    <>                            
                      <div>              
                        <p className="listCheck">                  
                          <input className="checkBox" type="radio"  value={Val.style} name="radio" onChange={handleCheckedOther} />
                          <label>{Val.style}</label>              
                        </p>                 
                      </div>                
                    </>
                  );      
                })} 

              <h2  className="titleFilter">Filtrer par scène:</h2>  
              {uniqLocationConcerts.map((Val) => {        
                return (
                  <>
                    <div>                       
                      <p className="listCheck">
                        <input className="checkBox" type="radio"  value={Val.location} name="radio" onChange={handleCheckedOther} />
                        <label>{Val.location}</label> 
                      </p>                      
                    </div>
                  </>
                );        
              })}  
            </div>
          </div>
          <div className="boutonLegend">
            <Button  color="failure" className="boutonFilterErase" onClick={reset}>Effacer les filtres</Button>
            <Button  color="blue" className="boutonFilterResult" onClick={handleShowResults}>Voir les résultats</Button>
          </div>
        </div>  
        <div  class={`  ${showResults ? "d-block" : "d-none"} `}>
          <div className="kard pb-0 mt-8 " data-testId="concertHome">               
            <ListConcert concerts={concertsFilteredOrderedDay} />          
          </div>
          <div className="retour">
            <ScrollToTopButton />
          </div> 
        </div>    
      </div>
    </>
  )
}

export default Programme ;
      

 




  

