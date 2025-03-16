import React from "react";
import { useState, useEffect, } from "react";
import '../style/Programme.css';







const Programme = ()  => {

  const [DATA, setDATA] = useState([])   
    
    /*envoi une requête et récupération des données dans 'dataConcerts.json' puis les stockent dans concerts avec setConcerts*/
    useEffect( ()=>{
          const fetchItem = async () => {
           fetch(' http://127.0.0.1:8000/api/concerts ') 
          .then((response)=>response.json())
          .then(data=>setDATA(data.member))
          .catch(error => console.log(error))
          };
          
          fetchItem();
          
        }, []);

    
      /*Désactivation automatique des checkbox*/
      const [status1, setStatus1] = React.useState(false)
      const [status2, setStatus2] = React.useState(false)
      const [status3, setStatus3] = React.useState(false)

      const handleChange1 = (e) => setStatus1(e.target.value);
      const handleChange2 = (e) => setStatus2(e.target.value);
      const handleChange3 = (e) => setStatus3(e.target.value);

   
   

      const [rows, setRows] = React.useState([]);

      /*Condition des CHeckBox*/
        /*uniquement 09/07/2027*/
      const handleChecked1 = (e) => {
        if (e.target.checked) {
          /*décocher les autres cases*/
          setStatus2(false)
          setStatus3(false)
          /*Appliquer les filtres*/
          const rows = DATA.filter((Val) => Val.day.day === "09/07/2027");
          setRows(rows);
        } else {
          const rows = DATA.filter((Val) => Val.day.day === "09/07/2027" || "10/07/2027" || "11/07/2027" );
          setRows(rows);
          console.log(rows);         
        }
      };      
        /*uniquement 10/07/2027*/
      const handleChecked2 = (e) => {
        if (e.target.checked) {
          /*décocher les autres cases*/
          setStatus1(false)
          setStatus3(false)
          /*Appliquer les filtres*/
          const rows = DATA.filter((Val) => Val.day.day === "10/07/2027");
          setRows(rows);
        } else {
          const rows = DATA.filter((Val) => Val.day.day === "09/07/2027" || "10/07/2027" || "11/07/2027" );
          setRows(rows);
          console.log(rows);         
        }
      };
        /*uniquement 11/07/2027*/
      const handleChecked3 = (e) => {
        if (e.target.checked) {
          /*décocher les autres cases*/
          setStatus1(false)
          setStatus2(false)
          /*Appliquer les filtres*/
          const rows = DATA.filter((Val) => Val.day.day === "11/07/2027");
          setRows(rows);
        } else {
          const rows = DATA.filter((Val) => Val.day.day === "09/07/2027" || "10/07/2027" || "11/07/2027" );
          setRows(rows);
          console.log(rows);         
        }
      };




      React.useEffect(() => {
        setRows(DATA);
        
      },[]);

      return (
       
        <div id="App">
          <h1>Programmation</h1>
          <form id="filter">
            <h5>Date</h5>
            <label>09/07/2027</label>
            <input type="checkbox" id="09/07/2027" value={true} name="09/07/2027" onChange={handleChecked1} onClick={handleChange1}   checked = {status1 === 'true'} />
              
            <label>10/07/2027</label>
            <input type="checkbox" id="10/07/2027" value={true} name="10/07/2027" onChange={handleChecked2} onClick={handleChange2} checked = {status2 === 'true'}/>
              
            <label>11/07/2027</label>
            <input type="checkbox" id="11/07/2027" value={true} name="11/07/2027" onChange={handleChecked3} onClick={handleChange3} checked = {status3 === 'true'}/>
              
            
            <button type="reset" onClick={() => setRows(DATA)}>
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
              {rows.map((Val,i) => (
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