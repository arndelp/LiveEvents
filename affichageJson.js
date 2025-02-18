import { useState, useEffect } from "react";
import Card from "./Card";


import './DisplayData.css';





 export default function DisplayData() {

  const [concerts, setConcerts] = useState([])

  useEffect(()=>{
    fetch('dataConcerts.json')
    .then(response=>response.json())
    .then(data=>setConcerts(data.concerts))
    .catch(error => console.log(error))
  },[]);

  function ListConcerts(){
    return concerts.map((element)=>{
      return(
<>      
          <h3>{element.name}</h3>   

</>
)   
  })
}
return(
  <ListConcerts/>
)



};