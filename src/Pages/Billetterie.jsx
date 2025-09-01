import { Button, Card } from "flowbite-react";


function Billetterie() {

      function BilletD() {   
        return ( 
              
          <Card className="max-w-sm vignetteBillet">
            <h5 className="text-l font-bold tracking-tight text-red-600 dark:text-white ">
            Billet
            </h5 >
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              D
            </h1>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Valable le 11/07/2027
            </p>
          <Button>
            Acheter           
          </Button>
        </Card>
      
            )
      }

      function BilletS() {   
        return ( 
              
          <Card className="max-w-sm vignetteBillet">
          <h5 className="text-l font-bold tracking-tight text-red-600 dark:text-white ">
          Billet
          </h5 >
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            S
          </h1>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Valable le 10/07/2027
          </p>
        <Button color="failure">
          Complet           
        </Button>
      </Card>
      
            )
      }

      function BilletV() {   
        return ( 
              
          <Card className="max-w-sm vignetteBillet">
            <h5 className="text-l font-bold tracking-tight text-red-600 dark:text-white ">
            Billet
            </h5 >
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              V
            </h1>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Valable le 9/07/2027
            </p>
          <Button>
            Acheter           
          </Button>
        </Card>
      
            )
      }

      function Pass2joursSD() {   
        return ( 
              
          <Card className="max-w-sm vignetteBillet">
            <h5 className="text-l font-bold tracking-tight text-red-600 dark:text-white ">
            Billet
            </h5 >
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              SD
            </h1>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Valable du 10/07/2027 
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              au 11/07/2027 
            </p>
          <Button>
            Acheter           
          </Button>
        </Card>
      
            )
      }

      function Pass2joursVS() {   
        return ( 
              
          <Card className="max-w-sm vignetteBillet">
            <h5 className="text-l font-bold tracking-tight text-red-600 dark:text-white ">
            Billet
            </h5 >
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              VS
            </h1>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Valable du 9/07/2027 
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              au 10/07/2027 
            </p>
          <Button>
            Acheter           
          </Button>
        </Card>
      
            )
      }

      function Pass3joursVSD() {   
        return ( 
              
          <Card className="max-w-sm vignetteBillet">
          <h5 className="text-l font-bold tracking-tight text-red-600 dark:text-white ">
          Billet
          </h5 >
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            VSD
          </h1>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Valable du 9/07/2027 
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            au 11/07/2027 
          </p>
        <Button>
          Acheter           
        </Button>
      </Card>
      
            )
      }
    

    return (      
<>
  <div className="contacth1">
      <h1> Billetterie </h1>
  </div>
  <div className="billetterie d-block d-lg-none" >
    <div className=" vignette">   
    
      <div className="col  vignette">
          <BilletV />   
      </div>
      <div className="col  vignette">
          <BilletS/>   
      </div>
      <div className="col vignette">
          <BilletD/>    
      </div>      
    </div>
    <div className="vignette">
      <div className="col  vignette">
        <Pass2joursVS/>
      </div>
      <div className="col  vignette">
        <Pass2joursSD/>
      </div>        
      <div className="col  vignette">
        <Pass3joursVSD/>
      </div>
    </div>
  </div>   

  <div className="billetterie d-none d-lg-block" >
    <div className=" bill">       
      <div className="col  bill">
        <BilletV />   
      </div>
      <div className="col  bill">
        <BilletS/>   
      </div>
      <div className="col bill">
        <BilletD/>          
      </div>        
    </div>
    <div className="bill">
      <div className="col  vignette">
        <Pass2joursVS/>
      </div>
      <div className="col  vignette">
        <Pass2joursSD/>
      </div>          
      <div className="col  vignette">
        <Pass3joursVSD/>
      </div>
    </div>
  </div>
</>
    )

}

export default Billetterie;