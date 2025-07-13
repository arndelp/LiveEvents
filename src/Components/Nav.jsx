import React from 'react';
import {useState} from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.svg';
import burger from '../assets/burger.png';
/*Fonction l'affichage des liens vers les autres pages dans le header//Burger pour la version mobile */

function Nav() {

    const [showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }
    return (   
       ////////////////////////Format Desktop///////////////////////////////////////////////////////
        <nav className="head row ">
            <div className="logo col-2 d-none d-lg-block ">
                <div >
                    <Link to="/LiveEvents/">
                        <img src={logo} alt="logo" className="logoSize" />
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

{/* ////////////////////////Format mobile/////////////////////////////////////*/}
            <div class="row topBar">
                
                <div class=" col d-block d-lg-none mt-4">                       
                    <div class="btn-group" data-toggle="buttons-checkbox">                        
                        <button type="button" class="Burger btn btn-default " onClick={handleShowLinks}>                            
                            <img src={burger} alt='burger' ></img>                            
                        </button>                        
                    </div>                    
                </div>
                <div class="col-6 headTitle d-block d-lg-none">
                    <div className="" data-testId="titre">
                        <h1 >Nation Sounds</h1>
                    </div>
                </div>
                <div class="col-3 pr-0 d-block d-lg-none">
                <div className="headLogoM">
                    <Link to="/LiveEvents/">
                        <img src={logo} alt="logo"  />
                    </Link>
                    </div>
                </div>                  
            </div>
            
        
           <div className={`row d-lg-none ${showLinks ? "d-block" : "d-none"} `}>                           
                <ul className=" d-block d-lg-none mobileMenu">                   
                    <li className="navbar__item">
                        <Link 
                            to="/LiveEvents/"
                            className="navbar__link nbrArticle"
                            onClick={handleShowLinks}
                            >
                                Accueil
                        </Link>
                    </li>
                    <li className="navbar__item">
                        <Link 
                            to="/LiveEvents/Programmation"
                            className="navbar__link nbrArticle" 
                            onClick={handleShowLinks}
                            >
                                Programmation
                        </Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/LiveEvents/Billetterie"
                            className="navbar__link nbrArticle" 
                            onClick={handleShowLinks}
                            >
                                Billetterie
                        </Link>
                    </li>   
                    <li className="navbar__item">
                        <Link to="/LiveEvents/Informations"
                            className="navbar__link nbrArticle" 
                            onClick={handleShowLinks}
                            >
                                Informations
                        </Link>
                    </li>        
                    <li className="navbar__item">
                        <Link to="/LiveEvents/Plan"
                            className="navbar__link nbrArticle"
                            onClick={handleShowLinks}
                            >
                                Plan
                        </Link>
                    </li>    
                    <li className="navbar__item">
                        <Link to="/LiveEvents/Contact"
                            className="navbar__link nbrArticle"
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
export default Nav;