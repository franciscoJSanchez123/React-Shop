import SneiderLogo from './../images/schneider.png'
import SiemensLogo from './../images/siemens.jpg'
import {useState, useEffect} from 'react';
import   './slide.css'

const Slide=()=>{

    const[tamaño,setTamaño]=useState(0);
    const[time,setTime]=useState(10);
    const[state,setState]=useState('running')
    /*
    var acum=0
    var timer=0
    var changeTamaño=()=>{
        acum+=5
        setTamaño(acum)
        
        if(acum===105){
            acum=0;
            setTamaño(acum)
            clearTimeout(timer)
            
        }
         timer=setTimeout(()=> changeTamaño(), 1000)
        
        
    }
    


    useEffect( () => {
        
       changeTamaño()
       
    },[])
    
    
    */   
    const stop=()=>{
        setState('paused')
        console.log('stop')
    }
    
    const start=()=>{
        setState('running')
        console.log('start')
    }
    const style={ 
        animationPlayState:`${state}`,
        animation: `slider ${time}s infinite`,
        /*transform:`translateX(${tamaño}%)`*/
    }
        
    

    
    
    return(
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                
                <div class="carousel-item active" style={style}>
                    <img src={SneiderLogo} class="d-block w-100" alt="..."/>
                    <button onClick={()=>stop()}>stop</button>
                    <button onClick={()=>start()}>start</button>
                </div>
                <div class="carousel-item " >
                    
                    <img src={SiemensLogo} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item ">
                    <img src={SneiderLogo} class="d-block w-100" alt="..."/>
                </div>
            </div>
        </div>
    )
}
export default Slide