import SneiderLogo from './../images/schneider.png'
import SiemensLogo from './../images/siemens.jpg'
import SonOff from './../images/Sonoff.png'
import {useState} from 'react';
import   './slide.css'

const Slide2=()=>{
    
    const[tamaño,setTamaño]=useState(0);
    const[time,setTime]=useState(10);
    
    
       
    const stop=()=>{
        setTamaño(tamaño-10)
       
    }
    
    const start=()=>{
        setTamaño(tamaño+10)
        
    }
    const style={ 
        transform: `translate3d(${tamaño}%, 0, 0)`,
        transition:' All 0.3s',
        width:'200%',
        /*animation: `slider ${time}s infinite`,
        transform:`translateX(${tamaño}%)`*/
    }
      
    

    
    
    return(
       
        <div class="row justify-content-center background position-relative ">

        <div class="col-6" >
            
                <img src={SonOff} class="w-100 " alt="..."/>  
                            
        </div>

        <div class="col-12 position-absolute top-0 ">

            <div class="mt-5 ms-5 ">

                <h1 class=" fw-bold  text-black display-3  " > Wi-Fi SMART SWITCH </h1>
                <span class="fw-bold  text-white text-black display-3 ">SONOFF</span>

            </div>

            <div class="mt-3 ms-5 position-relative">

                <div class="position-absolute start-0">
                    <h2 class="text-success "> $11.00 </h2>
                </div>

                <div class="position-absolute end-0">
                    <h5 >
                        BASICR2  <br/>
                        Compatible with Amazon Alexa,  <br/>
                        Google Assistant, SmartThings, and Alice. <br/>
                            
                    </h5>
                </div>

            </div>

            
        </div>

        <div class="col-3 position-absolute bottom-0 align-self-center margin" >
                <button class="btn btn-dark w-100">Add to Cart</button>
        </div>
    </div>
    )
}
export default Slide2