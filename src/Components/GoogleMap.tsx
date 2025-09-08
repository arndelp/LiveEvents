import React, {useCallback, useState, useEffect} from 'react';
import {
  AdvancedMarker,
  AdvancedMarkerProps,
  APIProvider,
  InfoWindow,
  Map,  
  useAdvancedMarkerRef,
  AdvancedMarkerAnchorPoint
} from '@vis.gl/react-google-maps';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';


//Type de l'apiKey en string (ne pas oublier le point d'exclamation final)
export const apiKey : string = process.env.REACT_APP_GOOGLE_MAP!;

const GoogleMap = () => {




  
  //Récupération des données par l'API en utilisant une promesse
  useEffect( ()=>{
    const controller = new AbortController();

    const apiCallMarkers = async () => {
      try {
        const apiCallPromise = await fetch("https://concertslives.store/api/markers", 
          {
            signal: controller.signal,
          }
        );
        if (!apiCallPromise.ok) 
          throw new Error("Pas de connexion réseau");

        const apiCallObj = await apiCallPromise.json();
        setMarkerData(apiCallObj);     
      } catch (error) {
        if (error instanceof Error) {    // pour typescript
          if (error.name=== 'AbortError') {
          // Requête annulée
          return;
          }
          setErrorMessage("Impossible de charger les POI. Veuillez réessayer plus tard.");
        }       
      }
    };
     apiCallMarkers();   
      return () => { controller.abort();    
        };  
  }, []);





   
const [markerData, setMarkerData] = useState([]);  
const [selectedId, setSelectedId] = useState<string | null>(null);
const [selectedType, setSelectedType] = useState<string | null>(null);
const [selectedDetails, setSelectedDetails] = useState<string | null>(null);
const [selectedName, setSelectedName] = useState<string | null>(null); 
const [selectedMarker, setSelectedMarker] =
  useState<google.maps.marker.AdvancedMarkerElement | null>(null);
const [infoWindowShown, setInfoWindowShown] = useState(false);
const [showLinks, setShowLinks] = useState(false); 
const [errorMessage, setErrorMessage] = useState<string | null>(null); // état pour l'erreur du fetch

//Lors du click sur le marker, sélection de l'id, des détails et du nom du marker nécessaire à l'affichage de l'infowindow
const onMarkerClick = useCallback(
  (name: string | null, details: string | null, id: string | null, type: string,  marker ?: google.maps.marker.AdvancedMarkerElement) => {
    setSelectedId(id);
    setSelectedDetails(details);
    setSelectedName(name);
    setSelectedType(type);
    
    if (marker) {
      setSelectedMarker(marker);       
    }
    if (id !== selectedId) {        
      setInfoWindowShown(true);
    } else {
      setInfoWindowShown(isShown => !isShown);
    }
  },
  [selectedId]   
);
//Lors d'un click sur la map (autre que sur un marker), vidage des variables , fermeture de l'infowindow
const onMapClick = useCallback(() => {
  setSelectedId(null);
  setSelectedMarker(null);
  setInfoWindowShown(false);
  setSelectedType(null);
  setSelectedDetails(null);
  setSelectedName(null);
}, []);
//Fermeture de l'infowindow lorsqu'on click sur la croix de fermeture
const handleInfowindowCloseClick = useCallback(
  () => setInfoWindowShown(false),
  []
);
//Variables et fonctions pour les checkbox du menu
const [sceneChecked, setSceneChecked] =React.useState(true);
const handleChangeScene = () => {setSceneChecked(!sceneChecked)};

const [barChecked, setBarChecked] =React.useState(true);
const handleChangeBar = () => {setBarChecked(!barChecked)};

const [parkChecked, setParkChecked] =React.useState(true);
const handleChangePark = () => {setParkChecked(!parkChecked)};

const [exitChecked, setExitChecked] =React.useState(true);
const handleChangeExit = () => {setExitChecked(!exitChecked)};

const [shopChecked, setShopChecked] =React.useState(true);
const handleChangeShop = () => {setShopChecked(!shopChecked)};

const [wcChecked, setWcChecked] =React.useState(true);
const handleChangeWc = () => {setWcChecked(!wcChecked)};

const [campChecked, setCampChecked] =React.useState(true);
const handleChangeCamp = () => {setCampChecked(!campChecked)};

const handleShowLinks = () => {
  setShowLinks(!showLinks);    
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  return (   
    <APIProvider apiKey= {apiKey} libraries={['marker']}>
      <>
      <div className='backgroundMap' style={{overflow: "hidden"}}>        
                                 
        <div className="btn-group BurgerSituationMap" data-toggle="buttons-checkbox">                                  
          <button type="button" className="BurgerProg btn btn-default " onClick={handleShowLinks}>                        
            <img src={`${process.env.PUBLIC_URL}/assets/parametres-curseurs.png`} alt='burger' ></img>                        
          </button>                    
        </div>      
        
        {/* Affichage des checkbox du menu  */}
            
      <div className='Gmap'>                                   
        <div className={`  ${showLinks ? "d-block" : "d-none"} `}>  
          <div className='d-none d-lg-block'>
            <div className='ico'> 
              <input type="checkbox" checked={sceneChecked} onChange={handleChangeScene}/>
              <img src={`${process.env.PUBLIC_URL}/assets/POI/scene.png`} width="35em" height= "35em" alt="Scène"/>
              <input type="checkbox" checked={barChecked} onChange={handleChangeBar}/>
              <img src={`${process.env.PUBLIC_URL}/assets/POI/cocktail2.png`} width="35em" height= "35em" alt="bar"/>
              <input type="checkbox" checked={parkChecked} onChange={handleChangePark}/>
              <img src={`${process.env.PUBLIC_URL}/assets/POI/parking.png`} width="35em" height= "35em" alt="parking"/>
              <input type="checkbox" checked={exitChecked} onChange={handleChangeExit}/>
              <img src={`${process.env.PUBLIC_URL}/assets/POI/entrer.png`} width="35em" height= "35em" alt="exit"/>
              <input type="checkbox" checked={shopChecked} onChange={handleChangeShop}/>
              <img src={`${process.env.PUBLIC_URL}/assets/POI/boutique.png`} width="35em" height= "35em" alt="shop"/>
              <input type="checkbox" checked={wcChecked} onChange={handleChangeWc}/>
              <img src={`${process.env.PUBLIC_URL}/assets/POI/toilettes.png`} width="35em" height= "35em" alt="wc"/>
              <input type="checkbox" checked={campChecked} onChange={handleChangeCamp}/>
              <img src={`${process.env.PUBLIC_URL}/assets/POI/camping.png`} width="35em" height= "35em" alt="camping"/>
            </div>
          </div> 
          <div className='d-block d-lg-none'>
            <div > 
              <div className='icoMobile'>
                <input type="checkbox" checked={sceneChecked} onChange={handleChangeScene}/>
                <img src={`${process.env.PUBLIC_URL}/assets/POI/scene.png`} width="35em" height= "35em" alt="Scène"/>
                <input type="checkbox" checked={barChecked} onChange={handleChangeBar}/>
                <img src={`${process.env.PUBLIC_URL}/assets/POI/cocktail2.png`} width="35em" height= "35em" alt="bar"/>
                </div>
                <div className='icoMobile'>
                <input type="checkbox" checked={parkChecked} onChange={handleChangePark}/>
                <img src={`${process.env.PUBLIC_URL}/assets/POI/parking.png`} width="35em" height= "35em" alt="parking"/>   
                <input type="checkbox" checked={exitChecked} onChange={handleChangeExit}/>
                <img src={`${process.env.PUBLIC_URL}/assets/POI/entrer.png`} width="35em" height= "35em" alt="exit"/>
                </div>
                <div className='icoMobile'>
                <input type="checkbox" checked={shopChecked} onChange={handleChangeShop}/>
                <img src={`${process.env.PUBLIC_URL}/assets/POI/boutique.png`} width="35em" height= "35em" alt="shop"/>
                <input type="checkbox" checked={wcChecked} onChange={handleChangeWc}/>
                <img src={`${process.env.PUBLIC_URL}/assets/POI/toilettes.png`} width="35em" height= "35em" alt="wc"/>
                <input type="checkbox" checked={campChecked} onChange={handleChangeCamp}/>
                <img src={`${process.env.PUBLIC_URL}/assets/POI/camping.png`} width="35em" height= "35em" alt="camping"/>
              </div>
            </div>
          </div>
        </div>   

        { /* Affichage de l'erreur du fetch si nécessaire */}
        {errorMessage && (
          <div style={{ color: "red", textAlign: "center", margin: "1em" }}>
            {errorMessage}
          </div>
        )}

        {/* Affichage de la Map */}
      <Map
        mapId="d17a67bf932afd78"
        maxZoom={20}
        minZoom={10}
        defaultZoom={15.477}
        defaultCenter={{lat: 48.64627130950389,    lng: 1.8125529133067797}}
        gestureHandling={'auto'}
        onClick={onMapClick}
        clickableIcons={false}
        disableDefaultUI>

            
       
        {markerData.map(({id, latitude, longitude, type, zIndex, details, name}) => {  
                 
          // Affichage des icones avec condition de "type" et de la checkbox activée  
          if (type === "scene" && sceneChecked )            
            return (              
              <React.Fragment >                          
                <AdvancedMarkerWithRef                  
                  onMarkerClick={(
                    marker: google.maps.marker.AdvancedMarkerElement
                  ) => onMarkerClick(name,details,id,type, marker)}                        
                  position={{lat: parseFloat( latitude ),lng: parseFloat( longitude )}}
                  anchorPoint={AdvancedMarkerAnchorPoint['CENTER']}
                  zIndex={zIndex}>
                  <img src={`${process.env.PUBLIC_URL}/assets/POI/scene.png`} width={45} height={45} alt="scene"/>                                     
                </AdvancedMarkerWithRef>
              </React.Fragment>
            );
          

          if (type === 'bar' && barChecked) 
            return (                  
              <React.Fragment >                 
                <AdvancedMarkerWithRef
                  onMarkerClick={(
                    marker: google.maps.marker.AdvancedMarkerElement
                  ) => onMarkerClick(name,details,id,type, marker)}                        
                  position={{lat: parseFloat( latitude ),lng: parseFloat( longitude )}}
                  anchorPoint={AdvancedMarkerAnchorPoint['CENTER']}
                  zIndex={zIndex}>
                  <img src={`${process.env.PUBLIC_URL}/assets/POI/cocktail2.png`} width={40} height={40} alt="bar"/>                  
                </AdvancedMarkerWithRef>
              </React.Fragment>
            );
          

          if (type === 'parking' && parkChecked) 
            return (                  
              <React.Fragment >                 
                <AdvancedMarkerWithRef
                  onMarkerClick={(
                    marker: google.maps.marker.AdvancedMarkerElement
                  ) => onMarkerClick(name,details,id,type, marker)}                        
                  position={{lat: parseFloat( latitude ),lng: parseFloat( longitude )}}
                  anchorPoint={AdvancedMarkerAnchorPoint['CENTER']}
                  zIndex={zIndex}>
                  <img src={`${process.env.PUBLIC_URL}/assets/POI/parking.png`} width={30} height={30} alt="parking"/>                  
                </AdvancedMarkerWithRef>
              </React.Fragment>
            );
          

          if (type === 'door' && exitChecked) 
            return (                  
              <React.Fragment >                 
                <AdvancedMarkerWithRef
                  onMarkerClick={(
                    marker: google.maps.marker.AdvancedMarkerElement
                  ) => onMarkerClick(name,details,id,type, marker)}                        
                  position={{lat: parseFloat( latitude ),lng: parseFloat( longitude )}}
                  anchorPoint={AdvancedMarkerAnchorPoint['CENTER']}
                  zIndex={zIndex}>
                  <img src={`${process.env.PUBLIC_URL}/assets/POI/entrer.png`} width={30} height={30} alt="exit"/>                  
                </AdvancedMarkerWithRef>
              </React.Fragment>
            );
          

          if (type === 'shop' && shopChecked) 
            return (                  
              <React.Fragment >                 
                <AdvancedMarkerWithRef
                  onMarkerClick={(
                    marker: google.maps.marker.AdvancedMarkerElement
                  ) => onMarkerClick(name,details,id,type, marker)}                        
                  position={{lat: parseFloat( latitude ),lng: parseFloat( longitude )}}
                  anchorPoint={AdvancedMarkerAnchorPoint['CENTER']}
                  zIndex={zIndex}>
                  <img src={`${process.env.PUBLIC_URL}/assets/POI/boutique.png`} width={30} height={30} alt="shop"/>                  
                </AdvancedMarkerWithRef>
              </React.Fragment>
            );
          

          if (type === 'wc' && wcChecked) 
            return (                  
              <React.Fragment >                 
                <AdvancedMarkerWithRef
                  onMarkerClick={(
                    marker: google.maps.marker.AdvancedMarkerElement
                  ) => onMarkerClick(name,details,id,type, marker)}                        
                  position={{lat: parseFloat( latitude ),lng: parseFloat( longitude )}}
                  anchorPoint={AdvancedMarkerAnchorPoint['CENTER']}
                  zIndex={zIndex}>
                  <img src={`${process.env.PUBLIC_URL}/assets/POI/toilettes.png`} width={30} height={30} alt="wc"/>                  
                </AdvancedMarkerWithRef>
              </React.Fragment>
            );
          

          if (type === 'camping' && campChecked) 
            return (                  
              <React.Fragment >                 
                <AdvancedMarkerWithRef
                  onMarkerClick={(
                    marker: google.maps.marker.AdvancedMarkerElement
                  ) => onMarkerClick(name,details,id,type, marker)}                        
                  position={{lat: parseFloat( latitude ),lng: parseFloat( longitude )}}
                  anchorPoint={AdvancedMarkerAnchorPoint['CENTER']}
                  zIndex={zIndex}>
                  <img src={`${process.env.PUBLIC_URL}/assets/POI/camping.png`} width={30} height={30} alt="wc"/>                  
                </AdvancedMarkerWithRef>
              </React.Fragment>
            );
            
          return (null)
           
        }
        )}
          
         {/* condition d'affichage et contenu de l'infowindow  */}

         {infoWindowShown && selectedMarker && selectedType === "scene" && (
         
          <InfoWindow          
            anchor={selectedMarker}
            pixelOffset={[0, 0]}
            onCloseClick={handleInfowindowCloseClick}>
            <h4>{selectedName}</h4>
            <p>{selectedDetails}</p>  
            <Link to= "/LiveEvents/Programmation">            
              <Button className="checkRGPDLink" variant="link">Voir le programme</Button>
            </Link>   
          </InfoWindow>
          )}
        
        {infoWindowShown && selectedMarker  && (selectedType === "camping" || selectedType === "parking" || selectedType === "door" ) && (
         
          <InfoWindow          
            anchor={selectedMarker}
            pixelOffset={[0, 0]}
            onCloseClick={handleInfowindowCloseClick}>
            <h4>{selectedName}</h4>
            <p>{selectedDetails}</p>   
              <Link to="/LiveEvents/Informations">                  
                <Button className="checkRGPDLink" variant="link">&lsaquo;&lsaquo;Infos&rsaquo;&rsaquo;</Button>
              </Link>        
          </InfoWindow>
          )}
          
         {infoWindowShown && selectedMarker  && (selectedType === "bar" || selectedType === "wc" || selectedType === "shop" ) && (
         
          <InfoWindow          
            anchor={selectedMarker}
            pixelOffset={[0, 0]}
            onCloseClick={handleInfowindowCloseClick}>
            <h4>{selectedName}</h4>
            <p>{selectedDetails}</p>                      
          </InfoWindow>
          )}
        
      </Map>
    </div>        
  </div>
  </>      
  </APIProvider>    
  );  
};

// Définition du marker 
export const AdvancedMarkerWithRef = (
  props: AdvancedMarkerProps & {
    onMarkerClick: (marker: google.maps.marker.AdvancedMarkerElement) => void;
  }
) => {
const {children, onMarkerClick, ...advancedMarkerProps} = props;
const [markerRef, marker] = useAdvancedMarkerRef();

return (
  <AdvancedMarker
    onClick={() => {
      if (marker) {
        onMarkerClick(marker);
      }
    }}
    ref={markerRef}
    {...advancedMarkerProps}>
    {children}
  </AdvancedMarker>
  );
};

export default GoogleMap;

