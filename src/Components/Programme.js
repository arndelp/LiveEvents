import React from "react";
import { useState, useEffect, } from "react";
import "../style/Programme.css";
import { Button } from "flowbite-react";
import "../style/Home.css";
import burger from '../assets/parametres-curseurs.png';
import ScrollToTopButton from "./ScrollToTopButton";
import { Link} from "react-router-dom";


const Programme = ()  => {

  const [concert, setConcert] = useState([])   
    
    /*envoi une requête et récupération des données dans 'dataConcerts.json' puis les stockent dans concerts avec setConcerts*/
    useEffect( ()=>{
          const fetchItem = async () => {
           fetch("http://127.0.0.1:8000/api/concerts") 
          .then((response)=>response.json())
          .then(data=>setConcert(data.member))
          .catch(error => console.log(error))
          };
          
          fetchItem();
          
        }, []);

/* concert2 : Pour avoir tout les concert sur lors de l'arrièvée sur la page*/
  const [concert2, setConcert2] = useState([])

    useEffect( ()=>{
      const fetchItem2 = async () => {
        fetch("http://127.0.0.1:8000/api/concerts") 
      .then((response)=>response.json())
      .then(data=>setConcert2(data.member))
      .catch(error => console.log(error))
      };
      
      fetchItem2();
      
    }, []);
    

    
  /*Désactivation pardéfaut des checkbox*/
  /*DATE */
  const [status1, setStatus1] = React.useState(false)  /* 09/07/2027*/
  const [status2, setStatus2] = React.useState(false)   /* 10/07/2027*/
  const [status3, setStatus3] = React.useState(false)   /* 11/07/2027*/
      
  /*SCENE*/
  const [status4, setStatus4] = React.useState(false)   /* Scène CHÂTEAU */
  const [status5, setStatus5] = React.useState(false)   /* Scène GWERNIG */
  const [status6, setStatus6] = React.useState(false)   /* Scène GLENMOR */
  const [status7, setStatus7] = React.useState(false)   /* Scène KEROUAC */
  const [status8, setStatus8] = React.useState(false)   /* Scène GRALL */
  
  /*HORAIRE*/
  const [status9, setStatus9] = React.useState(false)     /* 18:00 19:00 */
  const [status10, setStatus10] = React.useState(false)   /* 18:30 19:30 */
  const [status11, setStatus11] = React.useState(false)   /* 19:00 20:00 */
  const [status12, setStatus12] = React.useState(false)   /* 19:30 20:30 */
  const [status13, setStatus13] = React.useState(false)   /* 20:00 21:00 */
  const [status14, setStatus14] = React.useState(false)   /* 20:30 21:30 */
  const [status15, setStatus15] = React.useState(false)   /* 21:00 22:00 */



    /*changement d'état de checkbox lors des clicks*/
    /*DATE*/
  const handleChange1 = (e) => setStatus1(e.target.value);   /* 09/07/2027*/
  const handleChange2 = (e) => setStatus2(e.target.value);   /* 10/07/2027*/
  const handleChange3 = (e) => setStatus3(e.target.value);   /* 11/07/2027*/
    /*LOCATION*/
  const handleChange4 = (e) => setStatus4(e.target.value);    /* Scène CHÂTEAU */
  const handleChange5 = (e) => setStatus5(e.target.value);    /* Scène GWERNIG */
  const handleChange6 = (e) => setStatus6(e.target.value);    /* Scène GLENMOR */
  const handleChange7 = (e) => setStatus7(e.target.value);    /* Scène KEROUAC */
  const handleChange8 = (e) => setStatus8(e.target.value);    /* Scène GRALL */
    /*HORAIRE*/
  const handleChange9 = (e) => setStatus9(e.target.value);    /* 18:00 19:00 */
  const handleChange10 = (e) => setStatus10(e.target.value);    /* 18:30 19:30 */
  const handleChange11 = (e) => setStatus11(e.target.value);    /* 19:00 19:30 */
  const handleChange12 = (e) => setStatus12(e.target.value);    /* 19:30 20:00 */
  const handleChange13 = (e) => setStatus13(e.target.value);    /* 20:30 21:30 */
  const handleChange14 = (e) => setStatus14(e.target.value);    /* 21:00 22:00 */
  const handleChange15 = (e) => setStatus15(e.target.value);    /* 21:00 22:00 */
      
   


/*//////////////////VARIABLES POUR LES FILTRES///////////////////////////////////*/

  const [dates, setDates] = React.useState([]);     /*Filtre DATE*/
  const [places, setPlaces] = React.useState([]);          /*Filtre Horaire*/
  const [times, setTimes] = React.useState([]);          /*Filtre Horaire*/
      

/*//////////////////////REGLES POUR LES CHECKBOX////////////////////////////////*/

  /*filtre des données en fonction de l'état de la checkbox*/
    /*uniquement 09/07/2027*/
  const handleChecked1 = (e) => {
    if (e.target.checked) {
      /*décocher les autres cases*/
      setStatus2(false)
      setStatus3(false)
      setStatus4(false)
      setStatus5(false)
      setStatus6(false)
      setStatus7(false)
      setStatus8(false)
      setStatus9(false)
      setStatus10(false)
      setStatus11(false)
      setStatus12(false)
      setStatus13(false)
      setStatus14(false)
      setStatus15(false)
      /*Appliquer les filtres*/
      const dates = concert.filter((Val) => Val.day.day === "09/07/2027");          
      setDates(dates);
      setTimes([]);
      setConcert2([])
    } else {
      //const dates = concert.filter((Val) => Val.day.day === "09/07/2027" || "10/07/2027" || "11/07/2027" );
      setDates(concert);
              
    }
  };      
    /*uniquement 10/07/2027*/
  const handleChecked2 = (e) => {
    
    if (e.target.checked) {
      /*décocher les autres cases*/
      
      setStatus1(false)
      setStatus3(false)
      setStatus4(false)
      setStatus5(false)
      setStatus6(false)
      setStatus7(false)
      setStatus8(false)
      setStatus9(false)
      setStatus10(false)
      setStatus11(false)
      setStatus12(false)
      setStatus13(false)
      setStatus14(false)
      setStatus15(false)
      /*Appliquer les filtres*/
      const dates = concert.filter((Val) => Val.day.day === "10/07/2027");
      setDates(dates);
      setTimes([]);
      setConcert2([])
    } else {
      setDates(concert);
      
    }
  };
    /*uniquement 11/07/2027*/
  const handleChecked3 = (e) => {
    if (e.target.checked) {
      /*décocher les autres cases*/
      setStatus1(false)
      setStatus2(false)
      setStatus4(false)
      setStatus5(false)
      setStatus6(false)
      setStatus7(false)
      setStatus8(false)
      setStatus9(false)
      setStatus10(false)
      setStatus11(false)
      setStatus12(false)
      setStatus13(false)
      setStatus14(false)
      setStatus15(false)
      /*Appliquer les filtres*/
      const dates = concert.filter((Val) => Val.day.day === "11/07/2027");
      setDates(dates);
      setTimes([]);
      setConcert2([])
    } else {
      setDates(concert);
                
    }
  };

  /*uniquement Scène CHÂTEAU*/
  const handleChecked4 = (e) => {
    if (e.target.checked) {
      /*décocher les autres cases*/
      setStatus1(false)
      setStatus2(false)
      setStatus3(false)
      setStatus5(false)
      setStatus6(false)
      setStatus7(false)
      setStatus8(false)
      setStatus9(false)
      setStatus10(false)
      setStatus11(false)
      setStatus12(false)
      setStatus13(false)
      setStatus14(false)
      setStatus15(false)
      
      /* les filtres*/
      const places = concert.filter((Val) => Val.location.location === "Scène CHÂTEAU");
      setPlaces(places);
      setDates([]);
      setTimes([]);
      setConcert2([])
    } else {
      setPlaces(dates);
              
    }
  };

  /*uniquement Scène GWERNIG*/
  const handleChecked5 = (e) => {
    if (e.target.checked) {
      /*décocher les autres cases*/
      setStatus1(false)
      setStatus2(false)
      setStatus3(false)
      setStatus4(false)
      setStatus6(false)
      setStatus7(false)
      setStatus8(false)
      setStatus9(false)
      setStatus10(false)
      setStatus11(false)
      setStatus12(false)
      setStatus13(false)
      setStatus14(false)
      setStatus15(false)
      
      /*Appliquer les filtres*/
      const places = concert.filter((Val) => Val.location.location === "Scène GWERNIG");
      setPlaces(places);
      setDates([]);
      setTimes([]);
      setConcert2([])
    } else {
      setPlaces(dates);
              
    }
  };

  /*uniquement Scène GLENMOR*/
  const handleChecked6 = (e) => {
    if (e.target.checked) {
      /*décocher les autres cases*/
      setStatus1(false)
      setStatus2(false)
      setStatus3(false)
      setStatus4(false)
      setStatus5(false)
      setStatus7(false)
      setStatus8(false)
      setStatus9(false)
      setStatus10(false)
      setStatus11(false)
      setStatus12(false)
      setStatus13(false)
      setStatus14(false)
      setStatus15(false)
      
      /*Appliquer les filtres*/
      const places = concert.filter((Val) => Val.location.location === "Scène GLENMOR");
      setPlaces(places);
      setDates([]);
      setTimes([]);
      setConcert2([])
    } else {
      setPlaces(dates);
                
    }
  };

  /*uniquement Scène KEROUAC*/
  const handleChecked7 = (e) => {
    if (e.target.checked) {
      /*décocher les autres cases*/
      setStatus1(false)
      setStatus2(false)
      setStatus3(false)
      setStatus4(false)
      setStatus5(false)
      setStatus6(false)
      setStatus8(false)
      setStatus9(false)
      setStatus10(false)
      setStatus11(false)
      setStatus12(false)
      setStatus13(false)
      setStatus14(false)
      setStatus15(false)
      
      /*Appliquer les filtres*/
      const places = concert.filter((Val) => Val.location.location === "Scène KEROUAC");
      setPlaces(places);
      setDates([]);
      setTimes([]);
      setConcert2([])
    } else {
      setPlaces(dates);                
    }
  };

  /*uniquement Scène GRALL*/
  const handleChecked8 = (e) => {
    if (e.target.checked) {
      /*décocher les autres cases*/
      setStatus1(false)
      setStatus2(false)
      setStatus3(false)
      setStatus4(false)
      setStatus5(false)
      setStatus6(false)
      setStatus7(false)
      setStatus9(false)
      setStatus10(false)
      setStatus11(false)
      setStatus12(false)
      setStatus13(false)
      setStatus14(false)
      setStatus15(false)
      
      /*Appliquer les filtres*/
      const places = concert.filter((Val) => Val.location.location === "Scène GRALL");
      setPlaces(places);
      setDates([]);
      setTimes([]);
      setConcert2([])
    } else {
      setPlaces(dates);                   
    }       
  };

/* FILTRE HORAIRE*/

  const handleChecked9 = (e) => {
    if (e.target.checked) {
      /*décocher les autres cases*/
      setStatus1(false)
      setStatus2(false)
      setStatus3(false)
      setStatus4(false)
      setStatus5(false)
      setStatus6(false)
      setStatus7(false)
      setStatus8(false)
      setStatus10(false)
      setStatus11(false)
      setStatus12(false)
      setStatus13(false)
      setStatus14(false)
      setStatus15(false)
      
      /*Appliquer les filtres*/
      const times = concert.filter((Val) => Val.schedule.schedule === "18:00 - 19:00");
      setTimes(times);
      setDates([]);
      setPlaces([]);
      setConcert2([])
    } else {
      setTimes(dates);                  
    }      
  };

  const handleChecked10 = (e) => {
    if (e.target.checked) {
      /*décocher les autres cases*/
      setStatus1(false)
      setStatus2(false)
      setStatus3(false)
      setStatus4(false)
      setStatus5(false)
      setStatus6(false)
      setStatus7(false)
      setStatus8(false)
      setStatus9(false)
      setStatus11(false)
      setStatus12(false)
      setStatus13(false)
      setStatus14(false)
      setStatus15(false)
      
      /*Appliquer les filtres*/
      const times = concert.filter((Val) => Val.schedule.schedule === "18:30 - 19:30");
      setTimes(times);
      setDates([]);
      setPlaces([]);
      setConcert2([])
    } else {
      setTimes(dates);                  
    }      
  };

  const handleChecked11 = (e) => {
    if (e.target.checked) {
      /*décocher les autres cases*/
      setStatus1(false)
      setStatus2(false)
      setStatus3(false)
      setStatus4(false)
      setStatus5(false)
      setStatus6(false)
      setStatus7(false)
      setStatus8(false)
      setStatus9(false)
      setStatus10(false)
      setStatus12(false)
      setStatus13(false)
      setStatus14(false)
      setStatus15(false)
      
      /*Appliquer les filtres*/
      const times = concert.filter((Val) => Val.schedule.schedule === "19:00 - 20:00");
      setTimes(times);
      setDates([]);
      setPlaces([]);
      setConcert2([])         

    } else {
      setTimes(dates);                  
    }      
  };

  const handleChecked12 = (e) => {
    if (e.target.checked) {
      /*décocher les autres cases*/
      setStatus1(false)
      setStatus2(false)
      setStatus3(false)
      setStatus4(false)
      setStatus5(false)
      setStatus6(false)
      setStatus7(false)
      setStatus8(false)
      setStatus9(false)
      setStatus10(false)
      setStatus11(false)
      setStatus13(false)
      setStatus14(false)
      setStatus15(false)
      
      /*Appliquer les filtres*/
      const times = concert.filter((Val) => Val.schedule.schedule === "19:30 - 20:30");
      setTimes(times)  ;
      setDates([]);
      setPlaces([]);
      setConcert2([])
      
    } else {
      setTimes(dates);                  
    }      
  };

  const handleChecked13 = (e) => {
    if (e.target.checked) {
      /*décocher les autres cases*/
      setStatus1(false)
      setStatus2(false)
      setStatus3(false)
      setStatus4(false)
      setStatus5(false)
      setStatus6(false)
      setStatus7(false)
      setStatus8(false)
      setStatus9(false)
      setStatus10(false)
      setStatus11(false)
      setStatus12(false)
      setStatus14(false)
      setStatus15(false)
          
      /*Appliquer les filtres*/
  const times = concert.filter((Val) => Val.schedule.schedule === "20:00 - 21:00");
      setTimes(times);
      setDates([]);
      setPlaces([]);
      setConcert2([])
    } else {
      setTimes(dates);                  
    }      
  };

  const handleChecked14 = (e) => {
    if (e.target.checked) {
      /*décocher les autres cases*/
      setStatus1(false)
      setStatus2(false)
      setStatus3(false)
      setStatus4(false)
      setStatus5(false)
      setStatus6(false)
      setStatus7(false)
      setStatus8(false)
      setStatus9(false)
      setStatus10(false)
      setStatus11(false)
      setStatus12(false)
      setStatus13(false)
      setStatus15(false)
      
      /*Appliquer les filtres*/
      const times = concert.filter((Val) => Val.schedule.schedule === "20:30 - 21:30");
      setTimes(times);
      setDates([]);
      setPlaces([]);
      setConcert2([])
    } else {
      setTimes(dates);                  
    }      
  };

  const handleChecked15 = (e) => {
    if (e.target.checked) {
      /*décocher les autres cases*/
      setStatus1(false)
      setStatus2(false)
      setStatus3(false)
      setStatus4(false)
      setStatus5(false)
      setStatus6(false)
      setStatus7(false)
      setStatus8(false)
      setStatus9(false)
      setStatus10(false)
      setStatus11(false)
      setStatus12(false)
      setStatus13(false)
      setStatus14(false)
      
      
  /*Appliquer les filtres*/
  const times = concert.filter((Val) => Val.schedule.schedule === "21:00 - 22:00");
    setTimes(times);
    setDates([]);
    setPlaces([]);
    setConcert2([]);
      
  } else {
    setTimes(dates);                  
  }      
  };
/*////////////POUR LINK////////////////////////////////*/





/*////////////DISPOSITION DES RESULTATS EN CARD////////////////////////////////////////////*/


   
                  

  const Details= ({id ,name, location, schedule, day, fullImageUrl, details, details2}) => { 

    return (
      < Link to='/LiveEvents/Programmation/ProgrammeDetails' state={{id, name, location, schedule, day, fullImageUrl, details, details2}}>
        
          <div class="card mb-3 mt-3" >
            <div class="row g-0">
              <div class="col-md-4 ">
                <img src={fullImageUrl}  class="img-fluid rounded" alt={name} />
              </div>
              <div class="col-md-8 ">
                <div class="card-body">
                  <h5 class="card-title">{name}</h5>
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

  const ListConcert = ({ concert2 }) => {     

    return (
/*transformation de l'objet item en tableau Val */     
      <div className="row  g-0 kardProg">
          <div  className="cardProg pb-0" >
              {concert2.map((Val) => {
                
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

  const ListDates = ({ dates }) => {     
        
    return (
/*transformation de l'objet item en tableau Val */     
      <div className="row  g-0 kardProg">
          <div  className="cardProg pb-0" >
              {dates.map((Val) => {
                
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
    

  const ListPlaces = ({ places }) => {     
        
    return (
/*transformation de l'objet item en tableau Val */     
      <div className="row  g-0 kardProg">
          <div  className="cardProg pb-0" >
              {places.map((Val) => {
                
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

  const ListTimes = ({ times }) => {     
        
    return (
/*transformation de l'objet item en tableau Val */     
      <div className="row  g-0 kardProg">
          <div  className="cardProg pb-0" >
              {times.map((Val) => {
                
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

  
      
/* /////////////////////////////////////FILTRE///////////////////////////////////////////////////////// 

      /*Burger des filtres*/
const [showLinks, setShowLinks] = useState(false)

const handleShowLinks = () => {
    setShowLinks(!showLinks)
    }
return (
       <>
        <div id="App" >
          <div className="boutonLegendH1">
          <h1>Programmation</h1>
          </div>
          <div>                
            <div>                       
              <div class="btn-group BurgerSituation" data-toggle="buttons-checkbox">                                  
                <button type="button" class="BurgerProg btn btn-default " onClick={handleShowLinks}>                        
                  <img src={burger} alt='burger' ></img>                        
                </button>                    
              </div>                    
            </div>            
          </div>   
          </div>         
          <div class={`  ${showLinks ? "d-block" : "d-none"} `}>                          
            <ul className="FilterSituation">                   
              <h5>Dates:</h5>
              <li className="navbar__item">
                <div className="listCheck">
                  <input className="checkBox" type="checkbox" id="09/07/2027" value={true} name="09/07/2027" onChange={handleChecked1} onClick={handleChange1}  checked = {status1 === 'true'}  />
                  <label>09/07/2027</label> 
                </div>             
                <div className="listCheck">
                  <input className="checkBox" type="checkbox" id="10/07/2027" value={true} name="10/07/2027" onChange={handleChecked2} onClick={handleChange2} checked = {status2 === 'true'}/>
                  <label>10/07/2027</label>
                </div>
                <div className="listCheck">
                  <input className="checkBox" type="checkbox" id="11/07/2027" value={true} name="11/07/2027" onChange={handleChecked3} onClick={handleChange3} checked = {status3 === 'true'}/>
                  <label>11/07/2027</label>         
                </div>
              </li>
              <h5>Scènes:</h5>
              <li>              
                <div className="listCheck">
                  <input className="checkBox" type="checkbox" id="Scène CHÂTEAU" value={true} name="Scène CHÂTEAU" onChange={handleChecked4} onClick={handleChange4}   checked = {status4 === 'true'} />
                  <label>Scène CHÂTEAU</label>
                </div>
                <div className="listCheck">
                  <input className="checkBox" type="checkbox" id="Scène GWERNIG" value={true} name="Scène GWERNIG" onChange={handleChecked5} onClick={handleChange5} checked = {status5 === 'true'}/>
                  <label>Scène GWERNIG</label> 
                </div>
                <div className="listCheck">
                  <input className="checkBox" type="checkbox" id="Scène GLENMOR" value={true} name="Scène GLENMOR" onChange={handleChecked6} onClick={handleChange6} checked = {status6 === 'true'}/>
                  <label>Scène GLENMOR</label>  
                </div>
                <div className="listCheck">
                  <input className="checkBox" type="checkbox" id="Scène KEROUAC" value={true} name="Scène KEROUAC" onChange={handleChecked7} onClick={handleChange7} checked = {status7 === 'true'}/>
                  <label>Scène KEROUAC</label>
                </div>
                <div className="listCheck">
                  <input className="checkBox" type="checkbox" id="Scène GRALL" value={true} name="Scène GRALL" onChange={handleChecked8} onClick={handleChange8} checked = {status8 === 'true'}/>
                  <label>Scène GRALL</label>
                </div>
              </li>
              <h5>Horaire:</h5>
              <li>
                <div className="listCheck">
                  <input className="checkBox" type="checkbox" id="18:00 - 19:00" value={true} name="18:00 - 19:00" onChange={handleChecked9} onClick={handleChange9} checked = {status9 === 'true'}/>
                  <label>18:00 - 19:00</label>
                </div>
                <div className="listCheck">
                  <input className="checkBox" type="checkbox" id="18:30 - 19:30" value={true} name="18:30 - 19:30" onChange={handleChecked10} onClick={handleChange10} checked = {status10 === 'true'}/>
                  <label>18:30 - 19:30</label>
                </div>
                <div className="listCheck">
                  <input className="checkBox" type="checkbox" id="19:00 - 20:00" value={true} name="19:00 - 20:00" onChange={handleChecked11} onClick={handleChange11} checked = {status11 === 'true'}/>
                  <label>19:00 - 20:00</label>
                </div>
                <div className="listCheck">
                  <input className="checkBox" type="checkbox" id="19:30 - 20:30" value={true} name="19:30 - 20:30" onChange={handleChecked12} onClick={handleChange12} checked = {status12 === 'true'}/>
                  <label>19:00 - 20:00</label>
                </div>
                <div className="listCheck">
                  <input className="checkBox" type="checkbox" id="20:00 - 21:00" value={true} name="20:00 - 21:00" onChange={handleChecked13} onClick={handleChange13} checked = {status13 === 'true'} />
                  <label>20:00 - 21:00</label>
                </div>
                <div className="listCheck">
                  <input className="checkBox" type="checkbox" id="20:30 - 21:30" value={true} name="20:30 - 21:30" onChange={handleChecked14} onClick={handleChange14} checked = {status14 === 'true'}/>
                  <label>20:30 - 21:30</label> 
                </div>
                <div className="listCheck">
                  <input className="checkBox" type="checkbox" id="21:00 - 22:00" value={true} name="21:00 - 22:00" onChange={handleChecked15} onClick={handleChange15} checked = {status15 === 'true'}/>
                  <label>21:00 - 22:00</label>
                </div>
              </li>  
              <li>
                <div className="boutonLegend">
                    
                  <Button className=" ml-2  mr-2 mt-2 mb-2 " color="blue"  onClick={handleShowLinks}>
                    Voir les résultats
                  </Button>  
                  <Button className="mt-2 mb-2 " color="failure"  onClick={() =>   setDates([]) & setPlaces([]) & setTimes([]) & setStatus1(false) & setStatus2(false) & setStatus3(false) & setStatus4(false) & setStatus5(false) & setStatus6(false) & setStatus7(false) & setStatus8(false) & setStatus9(false) & setStatus10(false) & setStatus11(false) & setStatus12(false) & setStatus13(false) & setStatus14(false) & setStatus15(false)
                      }>
                    Reset
                  </Button>           
                </div>
              </li>                                               
            </ul>
          </div>
       
{/*//////////////////////////////FIN DES FILTRES//////////////////////////*/}
        
                
{/*Affichage des résultats sans filtres*/}
<div >
  <div className="kard pb-0 mt-8 " data-testId="concertHome">  
      <ListConcert concert2={concert2} />
      <ListDates dates={dates} />
      <ListPlaces places={places} />
      <ListTimes times={times} />

  </div>
</div>





<div className="retour">
  <ScrollToTopButton />
</div>       
</>
  )
};
  export default Programme ;
      

 




  

