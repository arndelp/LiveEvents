import React from "react";
import { useState, useEffect, } from "react";
import '../style/Programme.css';







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
      
      /*LOCATION*/
      const [status4, setStatus4] = React.useState(false)   /* Scène CHÂTEAU */
      const [status5, setStatus5] = React.useState(false)   /* Scène GWERNIG */
      const [status6, setStatus6] = React.useState(false)   /* Scène GLENMOR */
      const [status7, setStatus7] = React.useState(false)   /* Scène KEROUAC */
      const [status8, setStatus8] = React.useState(false)   /* Scène GRALL */
      

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
   
   

      const [rows, setRows] = React.useState([concert]);
      const [rows2, setRows2] = React.useState([rows]);
      

      /*filtre des données en fonction de l'état de la checkbox*/
        /*uniquement 09/07/2027*/
      const handleChecked1 = (e) => {
        if (e.target.checked) {
          /*décocher les autres cases*/
          setStatus2(false)
          setStatus3(false)
          /*Appliquer les filtres*/
          const rows = concert.filter((Val) => Val.day.day === "09/07/2027");
          setRows(rows);
        } else {
          const rows = concert.filter((Val) => Val.day.day === "09/07/2027" || "10/07/2027" || "11/07/2027" );
          setRows(rows);
                 
        }
      };      
        /*uniquement 10/07/2027*/
      const handleChecked2 = (e) => {
        if (e.target.checked) {
          /*décocher les autres cases*/
          setStatus1(false)
          setStatus3(false)
          /*Appliquer les filtres*/
          const rows = concert.filter((Val) => Val.day.day === "10/07/2027");
          setRows(rows);
        } else {
          const rows = concert.filter((Val) => Val.day.day === "09/07/2027" || "10/07/2027" || "11/07/2027" );
          setRows(rows);
          
        }
      };
        /*uniquement 11/07/2027*/
      const handleChecked3 = (e) => {
        if (e.target.checked) {
          /*décocher les autres cases*/
          setStatus1(false)
          setStatus2(false)
          /*Appliquer les filtres*/
          const rows = concert.filter((Val) => Val.day.day === "11/07/2027");
          setRows(rows);
        } else {
          const rows = concert.filter((Val) => Val.day.day === "09/07/2027" || "10/07/2027" || "11/07/2027" );
          setRows(rows);
                   
        }
      };

      /*uniquement Scène CHÂTEAU*/
      const handleChecked4 = (e) => {
        if (e.target.checked) {
          /*décocher les autres cases*/
          setStatus5(false)
          setStatus6(false)
          setStatus7(false)
          setStatus8(false)
          
          /*Appliquer les filtres*/
          const rows2 = rows.filter((Val) => Val.location.location === "Scène CHÂTEAU");
          setRows2(rows2);
        } else {
          const rows2 = rows.filter((Val) => Val.location.location === "Scène CHÂTEAU" || "Scène GWERNIG" || "Scène GLENMOR" || "Scène KEROUAC" || "Scène GRALL"  );
          setRows2(rows2);
                  
        }
      };

      /*uniquement Scène GWERNIG*/
      const handleChecked5 = (e) => {
        if (e.target.checked) {
          /*décocher les autres cases*/
          setStatus4(false)
          setStatus6(false)
          setStatus7(false)
          setStatus8(false)
          
          /*Appliquer les filtres*/
          const rows2 = rows.filter((Val) => Val.location.location === "Scène GWERNIG");
          setRows2(rows2);
        } else {
          const rows2 = rows.filter((Val) => Val.location.location === "Scène CHÂTEAU" || "Scène GWERNIG" || "Scène GLENMOR" || "Scène KEROUAC" || "Scène GRALL"  );
          setRows2(rows2);
                  
        }
      };

      /*uniquement Scène GLENMOR*/
      const handleChecked6 = (e) => {
        if (e.target.checked) {
          /*décocher les autres cases*/
          setStatus4(false)
          setStatus5(false)
          setStatus7(false)
          setStatus8(false)
          
          /*Appliquer les filtres*/
          const rows2 = rows.filter((Val) => Val.location.location === "Scène GLENMOR");
          setRows2(rows2);
        } else {
          const rows2 = rows.filter((Val) => Val.location.location === "Scène CHÂTEAU" || "Scène GWERNIG" || "Scène GLENMOR" || "Scène KEROUAC" || "Scène GRALL"  );
          setRows2(rows2);
                   
        }
      };

      /*uniquement Scène KEROUAC*/
      const handleChecked7 = (e) => {
        if (e.target.checked) {
          /*décocher les autres cases*/
          setStatus4(false)
          setStatus5(false)
          setStatus6(false)
          setStatus8(false)
          
          /*Appliquer les filtres*/
          const rows2 = rows.filter((Val) => Val.location.location === "Scène KEROUAC");
          setRows2(rows2);
        } else {
          const rows2 = rows.filter((Val) => Val.location.location === "Scène CHÂTEAU" || "Scène GWERNIG" || "Scène GLENMOR" || "Scène KEROUAC" || "Scène GRALL"  );
          setRows2(rows2);
                   
        }
      };

      /*uniquement Scène GRALL*/
      const handleChecked8 = (e) => {
        if (e.target.checked) {
          /*décocher les autres cases*/
          setStatus4(false)
          setStatus5(false)
          setStatus6(false)
          setStatus7(false)
          
          /*Appliquer les filtres*/
          const rows2 = rows.filter((Val) => Val.location.location === "Scène GRALL");
          setRows2(rows2);
        } else {
          const rows2 = rows.filter((Val) => Val.location.location === "Scène CHÂTEAU" || "Scène GWERNIG" || "Scène GLENMOR" || "Scène KEROUAC" || "Scène GRALL"  );
          setRows2(rows2);
                   
        }
       
      };




    

      return (
       
        <div id="App">
          <h1>Programmation</h1>
                                            {/*FILTRE DES DATES*/}
          <form id="filterDATE">
            <h5>Date</h5>
            <input type="checkbox" id="09/07/2027" value={true} name="09/07/2027" onChange={handleChecked1} onClick={handleChange1}   checked = {status1 === 'true'} />
            <label>09/07/2027</label> 
            
            <input type="checkbox" id="10/07/2027" value={true} name="10/07/2027" onChange={handleChecked2} onClick={handleChange2} checked = {status2 === 'true'}/>
            <label>10/07/2027</label>

            <input type="checkbox" id="11/07/2027" value={true} name="11/07/2027" onChange={handleChecked3} onClick={handleChange3} checked = {status3 === 'true'}/>
            <label>11/07/2027</label>

            
            <button type="reset" onClick={() => setRows(concert)}>
              Supprimer les filtres
            </button>
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

            
            <button type="reset" onClick={() => setRows2(concert)}>
              Supprimer les filtres
            </button>
          </form>

          <table id="records">
            <thread>
              <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Jour</th>
                <th>Scène</th>
                <th>Horaire</th>
              </tr>
            </thread>
            <tbody>
              {rows2.map((Val,i) => (
                
                <tr key={i}>
                  <td>{Val.id}</td>
                  <td>{Val.name}</td>
                  <td>{Val.day.day}</td>
                  <td>{Val.location.location}</td>
                  <td>{Val.schedule.schedule}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
      )


      }

 










  

export default Programme ;