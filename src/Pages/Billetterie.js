import "../style/Billetterie.css"


function Billetterie() {

    function BilletD() {   
        return ( 
              
          <div className="card card-fond">
          <div className="card-body">
            <h5 className="card-title">Billet</h5>
            <p className="card-name">D</p>
            <p className="card-text">Valable le 10/07/2027 </p>
            <a href="/LiveEvents/" className="btn btn-danger bout">Complet</a>
          </div>
        </div>
      
            )
      }

      function BilletS() {   
        return ( 
              
          <div className="card card-fond" >
          <div className="card-body">
            <h5 className="card-title">Billet</h5>
            <p className="card-name">S</p>
            <p className="card-text">Valable le 10/07/2027 </p>
            <a href="/LiveEvents/" className="btn btn-danger">Complet</a>
          </div>
        </div>
      
            )
      }

      function BilletV() {   
        return ( 
              
          <div className="card card-fond">
          <div className="card-body">
            <h5 className="card-title">Billet</h5>
            <p className="card-name">V</p>
            <p className="card-text">Valable le 09/07/2027 </p>
            <a href="/LiveEvents/" className="btn btn-primary bout">Acheter</a>
          </div>
        </div>
      
            )
      }

      function Pass2joursSD() {   
        return ( 
              
          <div className="card card-fond">
          <div className="card-body">
            <h5 className="card-title">Pass 2 jours</h5>
            <p className="card-name">SD</p>
            <p className="card-text">Valable du 10/07/2027 </p>
            <p className="card-text">au 11/07/2027</p>
            <a href="/LiveEvents/" className="btn btn-primary">Acheter</a>
          </div>
        </div>
      
            )
      }

      function Pass2joursVS() {   
        return ( 
              
          <div className="card card-fond">
          <div className="card-body">
            <h5 className="card-title">Pass 2 jours</h5>
            <p className="card-name">VS</p>
            <p className="card-text">Valable du 09/07/2027 </p>
            <p className="card-text">au 10/07/2027</p>
            <a href="/LiveEvents/" className="btn btn-primary">Acheter</a>
          </div>
        </div>
      
            )
      }

      function Pass3joursVSD() {   
        return ( 
              
          <div className="card card-fond">
          <div className="card-body">
            <h5 className="card-title">Pass 3 jours</h5>
            <p className="card-name">VSD</p>
            <p className="card-text">Valable du 09/07/2027 </p>
            <p className="card-text">au 11/07/2027</p>
            <a href="/LiveEvents/" className="btn btn-primary">Acheter</a>
          </div>
        </div>
      
            )
      }





    

    return (      
<>
<div className="billetterie">
    <div className=" row ">   
   
        <div className="col-lg  col-12 bill">
            <BilletV />   
        </div>
        <div className="col-lg  col-12 bill">
            <BilletS/>   
        </div>
        <div className="col-lg  col-12 bill">
            <BilletD/>
        
        </div>
       
       </div>
    <div className="row">
    <div className="col-lg  col-12 bill">
            <Pass2joursVS/>
        </div>
        <div className="col-lg  col-12 bill">
            <Pass2joursSD/>
        </div>
        
        <div className="col-lg  col-12 bill">
            <Pass3joursVSD/>
        </div>
        </div>
</div>       
</>
    )

}

export default Billetterie;