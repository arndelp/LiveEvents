import React from "react";
import { useState, useEffect, } from "react";
import "../style/Programme.css";
import { Button } from "flowbite-react";



const Programme = ()  => {

  const [concert, setConcert] = useState([])   
    
    /*envoi une requête et récupération des données dans 'dataConcerts.json' puis les stockent dans concerts avec setConcerts*/
    useEffect( ()=>{
          const fetchItem = async () => {
           fetch(' https://concertslives.store/api/concerts ') 
          .then((response)=>response.json())
          .then(data=>setConcert(data.member))
          .catch(error => console.log(error))
          };
          
          fetchItem();
          
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



        /*changement d'état de checkbox*/
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
      
   





      const [dates, setDates] = React.useState([]);     /*Filtre DATE*/
      const [places, setPlaces] = React.useState([]);          /*Filtre Horaire*/
      const [times, setTimes] = React.useState([]);          /*Filtre Horaire*/
      

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
          const places = dates.filter((Val) => Val.location.location === "Scène CHÂTEAU");
          setPlaces(places);
          setDates([]);
          setTimes([]);
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
          setPlaces([]);;
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
        } else {
          setTimes(dates);                  
        }      
      };

      const listDates = dates.map((Val,i) => 
        <li key={Val.id}>
          <div class="card mb-3 mt-3" >
            <div class="row g-0">
              <div class="col-md-4 ">
                <img src={Val.fullImageUrl}  class="img-fluid rounded" alt={Val.name} />
              </div>
              <div class="col-md-8 ">
                <div class="card-body">
                  <h5 class="card-title">{Val.name}</h5>
                  <p class="card-text pb-2">{Val.schedule.schedule}</p>
                  <p class="card-text"><small class="text-body-secondary ">{Val.location.location}</small></p>
                </div>
              </div>
            </div>
          </div>
        </li>
      );

      const listPlaces = places.map((Val,i) => 
        <li key={Val.id}>
          <div class="card mb-3 mt-3" >
            <div class="row g-0">
              <div class="col-md-4 ">
                <img src={Val.fullImageUrl}  class="img-fluid rounded" alt={Val.name} />
              </div>
              <div class="col-md-8 ">
                <div class="card-body">
                  <h5 class="card-title">{Val.name}</h5>
                  <p class="card-text pb-2">{Val.schedule.schedule}</p>
                  <p class="card-text"><small class="text-body-secondary ">{Val.location.location}</small></p>
                </div>
              </div>
            </div>
          </div>
        </li>
      );

      const listTimes = times.map((Val,i) => 
        <li key={Val.id}>
          <div class="card mb-3 mt-3" >
            <div class="row g-0">
              <div class="col-md-4 ">
                <img src={Val.fullImageUrl}  class="img-fluid rounded" alt={Val.name} />
              </div>
              <div class="col-md-8 ">
                <div class="card-body">
                  <h5 class="card-title">{Val.name}</h5>
                  <p class="card-text pb-2">{Val.schedule.schedule}</p>
                  <p class="card-text"><small class="text-body-secondary ">{Val.location.location}</small></p>
                </div>
              </div>
            </div>
          </div>
        </li>
      );

      return (
       
        <div id="App" className="row ">
          <h1>Programmation</h1>
                                            {/*FILTRE DES DATES*/}
          <form id="filterDATE">
            <h5>Date</h5>
            <input type="checkbox" id="09/07/2027" value={true} name="09/07/2027" onChange={handleChecked1} onClick={handleChange1} checked = {status1 === 'true'}  />
            <label>09/07/2027</label> 
            
            <input type="checkbox" id="10/07/2027" value={true} name="10/07/2027" onChange={handleChecked2} onClick={handleChange2} checked = {status2 === 'true'}/>
            <label>10/07/2027</label>

            <input type="checkbox" id="11/07/2027" value={true} name="11/07/2027" onChange={handleChecked3} onClick={handleChange3} checked = {status3 === 'true'}/>
            <label>11/07/2027</label>
                        
          </form>


                                               {/*FILTRE DES SCENES*/}
          <form id="filterLOCATION">
            <h5>Scène</h5>
            
            <input type="checkbox" id="Scène CHÂTEAU" value={true} name="Scène CHÂTEAU" onChange={handleChecked4} onClick={handleChange4}   checked = {status4 === 'true'} />
            <label>Scène CHÂTEAU</label>

            <input type="checkbox" id="Scène GWERNIG" value={true} name="Scène GWERNIG" onChange={handleChecked5} onClick={handleChange5} checked = {status5 === 'true'}/>
            <label>Scène GWERNIG</label> 
            
            <input type="checkbox" id="Scène GLENMOR" value={true} name="Scène GLENMOR" onChange={handleChecked6} onClick={handleChange6} checked = {status6 === 'true'}/>
            <label>Scène GLENMOR</label>  

            <input type="checkbox" id="Scène KEROUAC" value={true} name="Scène KEROUAC" onChange={handleChecked7} onClick={handleChange7} checked = {status7 === 'true'}/>
            <label>Scène KEROUAC</label>

            <input type="checkbox" id="Scène GRALL" value={true} name="Scène GRALL" onChange={handleChecked8} onClick={handleChange8} checked = {status8 === 'true'}/>
            <label>Scène GRALL</label>

                        
          </form>



                                      {/*FILTRE DES HORAIRES*/}
          <form id="filterSCHEDULE">
            <h5>Horaire</h5>          
              

            <input type="checkbox" id="18:00 - 19:00" value={true} name="18:00 - 19:00" onChange={handleChecked9} onClick={handleChange9} checked = {status9 === 'true'}/>
            <label>18:00 - 19:00</label>

            <input type="checkbox" id="18:30 - 19:30" value={true} name="18:30 - 19:30" onChange={handleChecked10} onClick={handleChange10} checked = {status10 === 'true'}/>
            <label>18:30 - 19:30</label>

            <input type="checkbox" id="19:00 - 20:00" value={true} name="19:00 - 20:00" onChange={handleChecked11} onClick={handleChange11} checked = {status11 === 'true'}/>
            <label>19:00 - 20:00</label>

            <input type="checkbox" id="19:30 - 20:30" value={true} name="19:30 - 20:30" onChange={handleChecked12} onClick={handleChange12} checked = {status12 === 'true'}/>
            <label>19:00 - 20:00</label>

            <input type="checkbox" id="20:00 - 21:00" value={true} name="20:00 - 21:00" onChange={handleChecked13} onClick={handleChange13} checked = {status13 === 'true'} />
            <label>20:00 - 21:00</label>

            <input type="checkbox" id="20:30 - 21:30" value={true} name="20:30 - 21:30" onChange={handleChecked14} onClick={handleChange14} checked = {status14 === 'true'}/>
            <label>20:30 - 21:30</label> 
            
            <input type="checkbox" id="21:00 - 22:00" value={true} name="21:00 - 22:00" onChange={handleChecked15} onClick={handleChange15} checked = {status15 === 'true'}/>
            <label>21:00 - 22:00</label>

            <div>
              <Button color="failure" onClick={() => setDates([]) & setPlaces([]) & setTimes([]) & setStatus1(false) & setStatus2(false) & setStatus3(false) & setStatus4(false) & setStatus5(false) & setStatus6(false) & setStatus7(false) & setStatus8(false) & setStatus9(false) & setStatus10(false) & setStatus11(false) & setStatus12(false) & setStatus13(false) & setStatus14(false) & setStatus15(false)
                  }>
                Reset
              </Button>
              
            </div>
          </form>

{/*Affichage des résultats du filtre par date*/}
<div className='row  g-0 kard'>
    <div className="card  pb-0 mt-8 " data-testId="concertHome">   
      <ul >{listDates}</ul>
    </div>
  </div>

{/*Affichage des résultats du filtre par lieu*/}
<div className='row  g-0 kard'>
    <div className="card  pb-0 mt-8 " data-testId="concertHome">   
      <ul >{listPlaces}</ul>
    </div>
  </div>


{/*Affichage des résultats du filtre par heure*/}
<div className='row  g-0 kard'>
    <div className="card  pb-0 mt-8 " data-testId="concertHome">   
      <ul >{listTimes}</ul>
    </div>
  </div>


    </div>
      

  )
      }

 




  

export default Programme ;