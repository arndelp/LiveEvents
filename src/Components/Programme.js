import React from "react";
import { useState, useEffect, } from "react";

import '../style/Programme.css';
import ScrollToTopButton from "./ScrollToTopButton";




const Programme = ()  => {

    /*concerts est initialement vide*/
    const [concerts, setConcerts] = useState([])
    /*item est vide au début */
  const [item, setItem] = useState([]);

    /*envoi une requête et récupération des données dans 'dataConcerts.json' puis les stockent dans concerts avec setConcerts*/
    useEffect(()=>{
      const fetchItem = async () => {
      fetch(' https://concertslives.store/api/concerts ') 
      .then((response)=>response.json())
      .then(data=>setConcerts(data.member))
      .catch(error => console.log(error))
      };
      fetchItem();
    }, []);

/*Filtre des donnée */

/* Définition de variable */

/*dayItems = toutes les dates de concerts contenues dans Val. Val= tableau des données résultant de l'utilisation de la méthode map()   */
  const dayItems = [...new Set(concerts.map((Val) => Val.day.day))];
/*locItems = toutes les scènes de concerts contenues dans Val.   */
  const locItems = [...new Set(concerts.map((Val) => Val.location.location))];
/*schItems = toutes les heures de concerts contenues dans Val   */
  const schItems = [...new Set(concerts.map((Val) => Val.schedule.schedule))]


  /* Filtre par jour avec la méthode filter()*/
   const filterItemDay = (curcat) => {
        const newItem = concerts.filter((newVal) => {
          
          return newVal.day.day === curcat;
        });
        setItem(newItem)      
      };

  /*Filtre par lieux avec la méthode filter() */
    const filterItemLoc = (curcat2) => {
        const newItem = concerts.filter((newVal) => {
          
          return newVal.location.location === curcat2 
        });
        setItem(newItem)      
      };

  /*FIltre par horaire avec la méthode filter() */
      const filterItemSch = (curcat3) => {
        const newItem = concerts.filter((newVal) => {
          
          return newVal.schedule.schedule === curcat3 ;
        });
        setItem(newItem)
      };

/** FIltre des données */


const Buttons = ({ filterItemLoc,filterItemDay,filterItemSch, setItem, dayItems, locItems, schItems  }) => {
  /*concerts est initialement vide*/
  const [concerts, setConcerts] = useState([])
  /*envoi une requête et récupération des données dans tabla concerts de l'Api*/
  useEffect(()=>{
    fetch(' https://concertslives.store/api/concerts') 
    .then((response)=>response.json())
    .then(data=>setConcerts(data.member))
    .catch(error => console.log(error))
  });
    return (
  
      <>  
      {/**MEnu déroulant filtrant le jour du concert */}
      <div  className=" row">
        <div className="col-lg-2 offset-lg-5" >
          <h6>Filtrer par date:</h6>
        </div>
        <div className="col-1 Drop">
          <select> 
            {/*Ajout de l'option All (pas de filtre), lors du click affichage de tout les concerts du JSON*/}
            <option>
              Selectionner
            </option>
            <option
                className="btn-white text-black p-1 px-3 mx-5 fw-bold btn"
                onClick={() => setItem(concerts)}          
              >
              All
            </option>        
            {dayItems.map((Val, id) => {          
              
              return (
                <option
                  className="btn-white text-black p-1 px-2 mx-5 btn fw-bold" 
                  /*Appel de la fonction  filtre par jour lors du click */
                  onClick={() => filterItemDay(Val)}
                  key={id}             
                >
                  {/*Liste des options possible */}
                  {Val}
                </option>
              );
            })}
                 
          </select> 
        </div>
      </div> 
  
  
  {/*FIltre par lieu */}
      <div className="row">
        <div className="col-lg-2 offset-lg-5">
            <h6>Filtrer par lieu:</h6>
        </div>
        <div className="col-1 Drop">
          <select 
           label="Scène" 
           >
            <option>
                Selectionner
            </option>
            <option
                className="btn-white text-black p-1 px-3 mx-5 fw-bold btn"
                onClick={() => setItem(concerts)}
              >
                All
            </option>    
              {locItems.map((Val, id) => {
            
              return (
                <option
                  className="btn-white text-black p-1 px-2 mx-5 btn fw-bold"
                  onClick={() => filterItemLoc(Val)}
                  key={id}              
                >
                  {Val}
                </option>
            );
          })}              
          </select>       
        </div>
      </div>
  
  
  {/*Filtre par horaire */}
      <div className="row">
        <div className="col-lg-2 offset-lg-5">
          <h6>Filtrer par horaire:</h6>
        </div>
        <div className="col-1 Drop">
          <select
            >
          <option>
              Selectionner
            </option>
            <option
                  className="btn-white text-black p-1 px-3 mx-5 fw-bold btn"
                  onClick={() => setItem(concerts)}
                >
                  All
            </option>    
            { schItems.map((Val, id) => {          
              
              return (
                <option
                  className="btn-white text-black p-1 px-2 mx-5 btn fw-bold"
                  onClick={() => filterItemSch(Val) }
                  key={id}
                >
                  {Val}
                </option>
              );
            })}
                
          </select>       
        </div>
      </div>
      </>
    );
  };  

/*Affichage des données dans de Card  et envoi dans le composant ProgrammeDetails avec Link */
const Details= ({name, location, schedule, day, fullImageUrl, details, details2}) => {          
      
  return (       

<div>
  {name}
</div>


    // <Link to='/LiveEvents/Programmation/ProgrammeDetails' state={{name, location, schedule, day, fullImageUrl, details, details2}}>    
    // {/* Format desktop*/   }
    //   <div className="row  d-none d-lg-block">
    //     <div className=" ml-0 mr-0 mt-2 mb-2">
    //       <Card className="max-w-xs" imgSrc={fullImageUrl} horizontal>
    //             <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //               {name}
    //             </h5>
    //             <p className="font-normal text-gray-700 dark:text-gray-400">
    //               {day}
    //             </p>
    //             <p className="font-normal text-gray-700 dark:text-gray-400">
    //               {location}
    //             </p>
    //             <p className="font-normal text-gray-700 dark:text-gray-400">
    //               {schedule}
    //             </p>
    //       </Card>
    //     </div>
    //   </div>

    // {/* Format mobile */}
    //   <div className="row d-block d-lg-none">
    //     <Card className="max-w-sm">
    //       <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //         {name}}
    //       </h5>
    //       <p className="font-normal text-gray-700 dark:text-gray-400">
    //         {location}
    //       </p>    
    //       <p className="font-normal text-gray-700 dark:text-gray-400">
    //         {schedule}
    //       </p>          
    //     </Card>
    //   </div>
    // </Link>
  );     
  }

  const CardItem = ({ item }) => {            
    
    return (
/*transformation de l'objet item en tableau Val */     
      <div className="row  g-0 kardProg">
          <div>
              {item.map((Val) => {
                
                  return (                      
     
/* définition des variables name, day, shedule, fullImageUrl, details pour la constante Details*/                         
                  
                      <Details name={Val.name}
                        location={Val.location.location}
                        day={Val.day.day}
                        schedule={Val.schedule.schedule}
                        fullImageUrl={Val.fullImageUrl}
                        details={Val.details} 
                        details2={Val.details2} />                
              );
            })}
          </div>
      </div>    
    );
  }  
    
return (
    /* Appel de la fonction  Button en incluant les props filtre*/
    <div className="container-fluid  kardProg">
    <div className="row">
   
      <h1 className="col-12 text-center my-3 fw-bold programmationh1">Programmation</h1>

  <div className="dropdown">
      <Buttons 
      
        filterItemDay={filterItemDay} 
        filterItemLoc={filterItemLoc}
        filterItemSch={filterItemSch}
 
        setItem={setItem}
        dayItems={dayItems}
        locItems={locItems}
        schItems={schItems}
  
/>

{/*Appel de la fonction Details en incluant les props Item */}
  </div>  
    <div className="CardAProg">
      <CardItem  item={item}/> 
    </div>
    <ScrollToTopButton />
  </div>
  
</div>
);
}

export default Programme ;