import sponsor2 from "../assets/sponsor2.png";


function Informations () {

    return (
        <>
        <div className="textInfo">
            <h4>Horaires<br/></h4>
            <p>Ouverture des portes le vendredi 09/07/2027 17:00<br/></p>
            Fin des festivités le Dimanche 11/07/2027 24:00 <br />
            <br/>
            <br/>

            

            <h4>Accès au château de Rambouillet et son domaine</h4>
            <h5>En voiture <br/></h5>
            <p>Depuis Paris ouest : A13, A12, N10 <br/>
            Depuis Paris sud : A6, A10, A11, N10 <br/>
            50 minutes environ <br/></p>
            <p>Parkings 5€/jour, 12€/3jour <br/></p>
            <br/>
                
            <h5>À vélo <br/></h5>
            <p>La commune de Rambouillet se situe sur les itinéraires cyclables de : <br /> 
            La Véloscénie (de Paris au Mont-Saint-Michel)<br /> 
            Du Paris-Brest-Paris<br />
            <br/>
            Parc à vélo gratuit</p>
            <br/>
            
            <h5>En train <br/></h5>
            <p>TER REMI semi direct - départ gare de Montparnasse, arrêt Rambouillet (35 minutes)<br/>
            Ou Transilien N depuis Paris Montparnasse, arrêt Rambouillet (55 minutes)<br/></p>
            <p>PASS NAVIGO zone 5<br/> </p>
            À noter : PASS NAVIGO dézoné (sur les forfaits mensuels ou annuels) les weekends, jours fériés, petites vacances scolaires (zone C) et du 15 juillet au 15 août <br />
            <br/>
            <br/>
            <h4>Camping</h4>
            <p>Un camping est disponible sur place pour les festivaliers. Billet de concert obligatoire pour chaque campeur. <br />
            Tarif: 10€ par tente et par nuit.<br/>

            Les caravanes et habitats motorisés sont interdits.

            </p>
            
            <div className="sponsor">
                
                <div className="row">
                    <img src={sponsor2} alt="sponsors" ></img>
                </div>
            </div>  
                

        </div>
        </>
    )
}
export default Informations