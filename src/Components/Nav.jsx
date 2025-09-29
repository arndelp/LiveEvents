import React from 'react';
import {useState, useEffect, useContext} from "react";
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

     // Bloquer le scroll du body quand le menu est ouvert
    useEffect(() => {
        if (showLinks) {
        document.body.classList.add("no-scroll");
        } else {
        document.body.classList.remove("no-scroll");
        }
    }, [showLinks]);



    return (   
       ////////////////////////Format Desktop///////////////////////////////////////////////////////
            <nav className="head row ">
                <div className="logo col-2 d-none d-lg-block ">
                    <div >
                        <Link to="/LiveEvents/">
                            <img src={`${process.env.PUBLIC_URL}/assets/logo.svg`} alt="logo" className="logoSize" />
                        </Link>
                    </div>   
                </div>

                              
                <div className="d-none d-lg-block col-8" >
                    <ul className="navbar__links ">              
                       
                        <li className="navbar__item">
                            <Link to="/LiveEvents/Programmation">
                                <h3>Programmation</h3>
                            </Link>
                        </li>
                        <li className="navbar__item">
                            <Link to="/LiveEvents/Billetterie">
                                <h3>Billetterie</h3>
                             </Link>
                        </li>   
                        <li className="navbar__item">
                            <Link to="/LiveEvents/Informations">
                            <h3>Informations</h3>
                            </Link> 
                        </li>        
                        <li className="navbar__item">
                        <Link to="/LiveEvents/Plan">
                            <h3>Plan</h3>
                            </Link>
                        </li>    
                        <li className="navbar__item">
                            <Link to="/LiveEvents/Contact">
                                <h3>Contact</h3>
                             </Link>
                        </li>   
                                
                    </ul>
                </div>

                <div className="logo col-2 d-none d-lg-block ">
                    <div >
                        {isAuthenticated() ? (
                        <>
                            <div className='headUserD'>
                                <div className="headLogoDuserConnectedFirstname">
                                    <img src={`${process.env.PUBLIC_URL}/assets/face-smile-solid-full.svg`} alt="logo-user" className='headLogoMuserConnectedSmiley'/>
                                    {customer?.firstname || "Utilisateur"}
                                    
                                </div>
                                <div>
                                    <Link to="/LiveEvents/" onClick={logout} title="Se déconnecter">
                                        <div className="headLogoDuserDisconnect">                                    
                                                Déconnexion                                
                                        </div>
                                        <div className="headLogoDuserDisconnectLogo">
                                            
                                                <img src={`${process.env.PUBLIC_URL}/assets/user-slash-solid-full.svg`} alt="logo-user"  />                                
                                            
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </>
                    ) : (
                    <div className="headLogoMuser">
                        <Link to="/LiveEvents/Login">
                            <img src={`${process.env.PUBLIC_URL}/assets/circle-user-regular.svg`} alt="logo-user"  />
                        </Link>
                    </div>
                    )}
                    </div>   
                </div>

{/* ////////////////////////Format mobile/////////////////////////////////////*/}
            
            {showLinks && <div className="backdrop" onClick={handleShowLinks}></div>}
            <div className="row topBar">
                {/*Burger */}
                <div className=" col-3 d-block d-lg-none mt-4">                       
                    <div className="btn-group" data-toggle="buttons-checkbox">                        
                        <button type="button" className="Burger btn btn-default " onClick={handleShowLinks}>                            
                                <img src={`${process.env.PUBLIC_URL}/assets/burger.png`} alt='burger' ></img>                            
                        </button>                        
                    </div>                    
                </div>
                {/*Logo mobile */}
                <div className="col-6 headTitle d-block d-lg-none">
                    <div className="headLogoM">
                        <Link to="/LiveEvents/">
                            <img src={`${process.env.PUBLIC_URL}/assets/logo.svg`} alt="logo"  />
                        </Link>
                    </div>
                </div>
                {/*Icon user mobile */}
                <div className="col-3 pt-2  d-block d-lg-none ">
                    {isAuthenticated() ? (
                        <>
                        <div className="headUserM">
                            <div className="headLogoMuserConnectedFirstname">
                                <img src={`${process.env.PUBLIC_URL}/assets/face-smile-solid-full.svg`} alt="logo-user" className='headLogoMuserConnectedSmiley'/>
                                {customer?.firstname || "Utilisateur"}
                                
                            </div>
                            <Link to="/LiveEvents/" onClick={logout} title="Se déconnecter">
                                <div className="headLogoMuserDisconnect">                                    
                                    Se&nbsp;déconnecter                               
                                    <img src={`${process.env.PUBLIC_URL}/assets/user-slash-solid-full.svg`} alt="logo-user" className='headLogoDuserDisconnectLogo' />                               
                                </div>
                                
                                
                            </Link>
                            </div>
                        </>
                    ) : (
                    <div className="headLogoMuser">
                        <Link to="/LiveEvents/Login">
                            <img src={`${process.env.PUBLIC_URL}/assets/circle-user-regular.svg`} alt="logo-user"  />
                        </Link>
                    </div>
                    )}
                </div>   
               
            </div>
                
            
                    <div className={`row d-lg-none overlay ${showLinks ? "show" : ""} `}>   
                        
                        <ul className=" d-block d-lg-none mobileMenu">  
                            <li>
                                <button type="button" className="Burger btn btn-default pt-4" onClick={handleShowLinks}>                            
                                    <img src={ `${process.env.PUBLIC_URL}/assets/croix.png` } alt='burger' ></img>                              
                                </button>   
                            </li>                 
                            <li className="navbar__item">
                                <Link 
                                    to="/LiveEvents/"
                                    className="navbar__link "
                                    onClick={handleShowLinks}
                                    >
                                        Accueil
                                </Link>
                            </li>
                            <li className="navbar__item">
                                <Link 
                                    to="/LiveEvents/Programmation"
                                    className="navbar__link " 
                                    onClick={handleShowLinks}
                                    >
                                        Programmation
                                </Link>
                            </li>
                            <li className="navbar__item">
                                <Link to="/LiveEvents/Billetterie"
                                    className="navbar__link" 
                                    onClick={handleShowLinks}
                                    >
                                        Billetterie
                                </Link>
                            </li>   
                            <li className="navbar__item">
                                <Link to="/LiveEvents/Informations"
                                    className="navbar__link " 
                                    onClick={handleShowLinks}
                                    >
                                        Informations
                                </Link>
                            </li>        
                            <li className="navbar__item">
                                <Link to="/LiveEvents/Plan"
                                    className="navbar__link "
                                    onClick={handleShowLinks}
                                    >
                                        Plan
                                </Link>
                            </li>    
                            <li className="navbar__item">
                                <Link to="/LiveEvents/Contact"
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
      
