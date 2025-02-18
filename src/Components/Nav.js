import React from 'react';
import "../style/Nav.css";
import {useState} from "react";
import { Link } from "react-router-dom";

/*Fonction l'affichage des liens vers les autres pages dans le header//Burger pour la version mobile */

function Nav() {

    const [showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

    return (   
       ////////////////////////Format Desktop///////////////////////////////////////////////////////
            <nav className="head row ">
                <div className="logo col-2 d-none d-lg-block">
                    <div >
                        <Link to="/">
                            <img src='../assets/logo.svg' alt="logo" className="logoSize" />
                        </Link>
                    </div>   
                </div>

                              
                <div className="d-none d-lg-block col-8"    >
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

{/* ////////////////////////Format mobile/////////////////////////////////////*/}
            <div class="row topBar">
                
                <div class=" col d-block d-lg-none">                       
                    <div class="btn-group" data-toggle="buttons-checkbox">
                        
                        <button type="button" class="Burger btn btn-default " onClick={handleShowLinks}>
                            
                            <img src='../assets/burger.png' alt='burger' ></img>
                            
                        </button>
                        
                    </div>                    
                </div>
                <div class="col-5 headTitle d-block d-lg-none">
                    <div className="" data-testId="titre">
                            <h1 >Nation Sounds</h1>
                    </div>
                </div>
                <div class="col  d-block d-lg-none">
                <div className="headLogoM">
                    <Link to="/">
                        <img src='../assets/logo.svg' alt="logo"  />
                    </Link>
                    </div>
                </div>   
               
            </div>
                
            
                    <div class={`row d-lg-none ${showLinks ? "d-block" : "d-none"} `}>   
                        
                        <ul className=" d-block d-lg-none">                   
                        
                        <li className="navbar__item">
                            <Link to="/Programmation">
                                <a href='/' className="navbar__link nbrArticle">Programmation</a>
                            </Link>
                        </li>
                        <li className="navbar__item">
                            <Link to="/Billetterie">
                                <a href='/'  className="navbar__link nbrArticle">Billetterie</a>
                             </Link>
                        </li>   
                        <li className="navbar__item">
                            <Link to="/Informations">
                                <a href='/' className="navbar__link nbrArticle">Informations</a>
                            </Link>
                        </li>        
                        <li className="navbar__item">
                            <Link to="/Plan">
                                <a href='/' className="navbar__link nbrArticle">Plan</a>
                                </Link>
                        </li>    
                        <li className="navbar__item">
                            <Link to="/Contact">
                                <a href='/'  className="navbar__link nbrArticle">Contact</a>
                             </Link>
                        </li>                    
                        </ul>

                    </div>
                  
                
                
            </nav>
            
    )
}
      
export default Nav;