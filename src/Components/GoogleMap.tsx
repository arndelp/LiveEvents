import React from "react";
import {useState} from "react";
import {APIProvider, Map, MapCameraChangedEvent} from '@vis.gl/react-google-maps';
import Markers from "./Markers";
import MarkersScene from "./MarkersScene";
import "../style/Map.css";






////API Key///////////



export default function GoogleMap  () {
  //const {latitude, longitude, error} = usePosition();
  const API_KEY = 'AIzaSyDyFJl07pOphogij6mYHfO311l_LpvJ85g'
  const mapId = 'd17a67bf932afd78'
  const [currentPosition] = useState({ lat: 48.64627130950389,    lng: 1.8125529133067797 });
  const [currentZoom] = useState(15.477);
 
// GEO LOCALISATION avec Use position
  // useEffect(() => {
  //   console.log("use eff");
  //   if (latitude && longitude && !error) {
  //     // Fetch weather data here.
  //     setCurrentPosition({ lat: latitude, lng: longitude });
  //     setCurrentZoom(17);
  //   }
  // }, [latitude, longitude, error]);

  return (
    //////////////////////////// Affichage de la carte GoogleMap///////////
     
    <APIProvider apiKey={API_KEY} libraries={['marker']} onLoad={() => console.log('Maps API has loaded.')}>

{/*En premier les markers pour que la légende soit en haut de la carte*/}
    
      <div className="checkboxes">
        <div className= "checkbox">
          {/*ici les markers*/}
          <MarkersScene />
          <Markers  />
          

        </div>    
      </div>
      

{/*Ensuite la carte, avec une taille de 100% de largeur de l'écran et 100% de hauteur de l'écran */}
{/*Définition de la position par défaut du centre de la carte et du zoom par défaut, puis des options pour le mouvement de la carte */}
    
      <Map
        className="Gmap"
        defaultCenter={currentPosition}
        defaultZoom={currentZoom}
        mapId={mapId}
        gestureHandling={'greedy'}
        disableDefaultUI 
        /*Affichage dans la console des coordonnées du centre de la carte lors des mouvements */ 
        onCameraChanged={ (ev: MapCameraChangedEvent) =>
        console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)}
        >       
      </Map>
      
    </APIProvider>
    
  );
};





 
