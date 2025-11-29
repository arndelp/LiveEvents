import React from 'react';
import {useState, useContext} from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";



  


/*Fonction l'affichage des liens vers les autres pages dans le header//Burger pour la version mobile */
export default function Nav() {

    const [showLinks, setShowLinks] = useState(false)
    const { customer, logout, isAuthenticated } = useContext(AuthContext);

    //fonction qui gère l'affichage des liens (pour le burger)
    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

    
   

    return (   
       ////////////////////////Format Desktop///////////////////////////////////////////////////////
            <nav className="head ">
                <div className="logo col-2 d-none d-xl-block ">
                    <div >
                        <Link to="/">
                            <img src={`${process.env.PUBLIC_URL}/assets/logo.svg`} alt="logo" className="logoSize" width={30} height={30}/>
                        </Link>
                    </div>   
                </div>

                              
                <div className="d-none d-xl-block col-8" >
                    <ul className="navbar__links ">              
                       
                        <li className="navbar__item">
                            <Link to="/Programmation">
                                <h3>Programmation</h3>
                            </Link>
                        </li>
                        <li className="navbar__item">
                            <Link to="/Billetterie">
                                <h3>Billetterie</h3>
                             </Link>
                        </li>   
                        <li className="navbar__item">
                            <Link to="/Informations">
                            <h3>Informations</h3>
                            </Link> 
                        </li>        
                        <li className="navbar__item">
                        <Link to="/Plan">
                            <h3>Plan</h3>
                            </Link>
                        </li>    
                        <li className="navbar__item">
                            <Link to="/Contact">
                                <h3>Contact</h3>
                             </Link>
                        </li>   
                                
                    </ul>
                </div>

                <div className="logo col-2 d-none d-xl-block ">
                    <div >
                        {isAuthenticated() ? (
                        <>
                            <div className='headUserD'>
                                <div className="headLogoDuserConnectedFirstname">
                                    <img src={`${process.env.PUBLIC_URL}/assets/face-smile-solid-full.svg`} alt="logo-user" className='headLogoMuserConnectedSmiley' width={30} height={30}/>
                                    {customer?.firstname || "Utilisateur"}
                                    
                                </div>
                                <div>
                                    <Link to="/" onClick={logout} title="Se déconnecter">
                                        <div className="headLogoDuserDisconnect">                                    
                                                Déconnexion                                
                                        </div>
                                        <div className="headLogoDuserDisconnectLogo">
                                            
                                                <img src={`${process.env.PUBLIC_URL}/assets/user-slash-solid-full.svg`} alt="logo-user" width={30} height={30} />                                
                                            
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </>
                    ) : (
                    <div className="headLogoMuser">
                        <Link to="/Login">
                            <img src={`${process.env.PUBLIC_URL}/assets/circle-user-regular.svg`} alt="logo-user" width={30} height={30} />
                        </Link>
                    </div>
                    )}
                    </div>   
                </div>

{/* ////////////////////////Format mobile/////////////////////////////////////*/}
            
            {showLinks && <div className="backdrop" onClick={handleShowLinks}></div>}
            <div className="topBar">
                {/*Burger */}
                <div className=" col-3 d-block d-xl-none mt-4">                       
                    <div className="btn-group" data-toggle="buttons-checkbox">                        
                        <button type="button" className="Burger btn btn-default " onClick={handleShowLinks}>                            
                                <img src={`${process.env.PUBLIC_URL}/assets/burger.png`} alt='burger' width={30} height={30}></img>                            
                        </button>                        
                    </div>                    
                </div>
                {/*Logo mobile */}
                <div className="col-6 headTitle d-block d-xl-none">
                    <div className="headLogoM">
                        <Link to="/">
                            <img src={`${process.env.PUBLIC_URL}/assets/logo.svg`} alt="logo" className='logoM' width={35} height={20} />  
                        </Link>
                    </div>
                </div>
                {/*Icon user mobile */}
                <div className="col-3 pt-2  d-block d-xl-none ">
                    {isAuthenticated() ? (
                        <>
                        <div className="headUserM">
                            <div className="headLogoMuserConnectedFirstname">
                                <img src={`${process.env.PUBLIC_URL}/assets/face-smile-solid-full.svg`} alt="logo-user" className='headLogoMuserConnectedSmiley'/>
                                {customer?.firstname || "Utilisateur"}
                                
                            </div>
                            <Link to="/" onClick={logout} title="Se déconnecter">
                                <div className="headLogoMuserDisconnect">                                    
                                    Se&nbsp;déconnecter                               
                                    <img src={`${process.env.PUBLIC_URL}/assets/user-slash-solid-full.svg`} alt="logo-user" className='headLogoDuserDisconnectLogo' width={30} height={30}/>                               
                                </div>
                                
                                
                            </Link>
                            </div>
                        </>
                    ) : (
                    <div className="headLogoMuser">
                        <Link to="/Login">
                            <img src={`${process.env.PUBLIC_URL}/assets/circle-user-regular.svg`} alt="logo-user" width={50} height={50} />
                        </Link>
                    </div>
                    )}
                </div>   
               
            </div>
                
            
                    <div className={`row d-xl-none overlay ${showLinks ? "show" : ""} `}>   
                        
                        <ul className=" d-block d-xl-none mobileMenu">  
                            <li>
                                <button type="button" className="Burger btn btn-default pt-4" onClick={handleShowLinks}>                            
                                    <img src={ `${process.env.PUBLIC_URL}/assets/croix.png` } alt='burger' width={50} height={50}></img>                              
                                </button>   
                            </li>                 
                            <li className="navbar__item">
                                <Link 
                                    to="/"
                                    className="navbar__link "
                                    onClick={handleShowLinks}
                                    >
                                        Accueil
                                </Link>
                            </li>
                            <li className="navbar__item">
                                <Link 
                                    to="/Programmation"
                                    className="navbar__link " 
                                    onClick={handleShowLinks}
                                    >
                                        Programmation
                                </Link>
                            </li>
                            <li className="navbar__item">
                                <Link to="/Billetterie"
                                    className="navbar__link" 
                                    onClick={handleShowLinks}
                                    >
                                        Billetterie
                                </Link>
                            </li>   
                            <li className="navbar__item">
                                <Link to="/Informations"
                                    className="navbar__link " 
                                    onClick={handleShowLinks}
                                    >
                                        Informations
                                </Link>
                            </li>        
                            <li className="navbar__item">
                                <Link to="/Plan"
                                    className="navbar__link "
                                    onClick={handleShowLinks}
                                    >
                                        Plan
                                </Link>
                            </li>    
                            <li className="navbar__item">
                                <Link to="/Contact"
                                    className="navbar__link "
                                    onClick={handleShowLinks}
                                    >
                                        Contact
                                </Link>
                            </li>                    
                        </ul>

                    </div>
                  
                
                
            </nav>
            
    )
}
      
