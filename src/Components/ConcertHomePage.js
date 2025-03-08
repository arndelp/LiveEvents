import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "flowbite-react";


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
  <div class="row " >
    <Card className="max-w-sm drop-shadow-md  pl-0 pr-0" imgSrc={Val.fullImageUrl} imgAlt={Val.name} horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {Val.name}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      {Val.location.location}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      {Val.day.day}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      {Val.schedule.schedule}
      </p>
    </Card>
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