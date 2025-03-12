import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



/*Function permettant l'affichage des premiers concerts du festival D1S1=Day1 Schedule1*/

export default function ConcertHomePage() {

  /*concerts est initialement vide*/
  const [concerts, setConcerts] = useState([])
/*envoi une requête et récupération des données dans 'dataConcerts.json' puis les stockent dans concerts avec setConcerts*/
  useEffect(()=>{
    fetch("https://concertslives.store/api/concerts") 
    
    .then((response)=>response.json())
    .then(data=>setConcerts(data.member))
    .catch(error => console.log(error))
  });


  /*on met dans Val les concerts ayant la date et l'horaire  */
  const day1sch1 = concerts.filter(Val =>
    Val.day.day === "09/07/2027" && Val.schedule.schedule === "18:00 - 19:00");  


/*on liste le contenu de Val , affichage dans des cards*/

  const listDay1Sch1 = day1sch1.map(Val =>
    
    <li key={Val.id}>
      <div class="card mb-3 mt-3" >
        <div class="row g-0">
          <div class="col-10">
            <img src={Val.fullImageUrl}  class="img-fluid rounded" alt={Val.name} />
          </div>
          <div class="col-md-10">
            <div class="card-body">
              <h5 class="card-title">{Val.name}</h5>
              <p class="card-text">{Val.schedule.schedule}</p>
              <p class="card-text"><small class="text-body-secondary">{Val.location.location}</small></p>
            </div>
          </div>
        </div>
      </div>
    </li>
    



















    // <li key={Val.id}>
      
    //   <div className="card mb-3" >
    //     <div className="row g-0">
    //       <div className="col-5  ">
       
    //         {/*Appelle de la fonction gerImageUrl pour récupérer l'image */}
    //         <img
    //           src={Val.fullImageUrl}     
    //           alt={Val.name}  
    //           className="img-fluid rounded"   
    //         />
    //       </div>
        
    //       <div className="col-7  cardHover rounded">
    //         <div className="card-body ">            
    //           <h5 className="card-title">{Val.name}</h5>
    //           <p className="card-text">{Val.location.location}</p>
    //           <p className="card-text">{Val.day.day}</p>
    //           <p className="card-text">{Val.schedule.schedule}</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
      
      
    // </li>
        
       
  );


 /*Affichage de la liste + lien vers Programmation */

return ( 

 
<Link to="/Programmation">
  <div className='row  g-0 kard'>
    <div className="card  pb-0 mt-8 " data-testId="concertHome">   
      <ul >{listDay1Sch1}</ul>
    </div>
  </div>
</Link>
)

   




}