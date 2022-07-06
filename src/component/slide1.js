import SneiderLogo from './../images/schneider (1).png'
import SiemensLogo from './../images/siemens (1).jpg'
import   './slide.css'

const Slide1=()=>{

    
           
  
    const style={ 
        
      
        animation: `slider 30s infinite linear alternate `,
       
    }
        
    

    
    
    return(
        <div class="row overflow-hidden my-5">
            <div class="d-flex flex-row" style={style}>
                
                <div >
                    <img src={SneiderLogo} alt="..."/>                   
                </div>
                <div   >                   
                    <img src={SiemensLogo} alt="..."/>
                </div>
                <div  >
                    <img src={SneiderLogo}  alt="..."/>
                </div>
                <div   >                   
                    <img src={SiemensLogo} alt="..."/>
                </div>
                <div  >
                    <img src={SneiderLogo}  alt="..."/>
                </div>
                <div   >                   
                    <img src={SiemensLogo} alt="..."/>
                </div>
                <div  >
                    <img src={SneiderLogo}  alt="..."/>
                </div>
                <div   >                   
                    <img src={SiemensLogo} alt="..."/>
                </div>
                <div  >
                    <img src={SneiderLogo}  alt="..."/>
                </div>
            </div>
        </div>
    )
}
export default Slide1