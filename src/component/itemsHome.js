import Contactor from './../images/contactor-usfull-sin-fondo.png'
import Breaker from './../images/3breakers-usfull-sinFondo.png'
import SonOff from './../images/Sonoff.png'
import {ReactComponent as CartIcon} from './../icons/cart.svg'
import {ReactComponent as HeartIcon} from './../icons/heart.svg'
const ItemsHome=()=>{
    return (
        <div class="my-5">
            <div class="container-xl ">
                 <div class="row text-center">
                    <div class="col-6 ">
                        <img src={Breaker} class="w-75" alt="..."/> 
                        <h5 class="fw-bold text-primary">BREAKER </h5>
                        <h6 class="fw-bold">BREAKER  USFULL DZ47 MCB</h6>
                         Price:<spam class="text-success">$5.00</spam>
                         
                        <div class=" d-flex  flex-row text-center justify-content-center my-2">
                            <div class="rounded-circle bg-primary mx-2 " style={{width:'35px',height:'35px', boxShadow: '0px 10px 10px -6px black'}}>
                                <CartIcon class=" " style={{width:'45%',heigth:'45%',top:'10%', right:'5%',position:'relative'}}/>
                            </div> 
                            <div class="rounded-circle bg-primary mx-2 " style={{width:'35px',height:'35px', boxShadow: '0px 10px 10px -6px black'}}>
                                <HeartIcon class="" style={{width:'40%',height:'40%',top:'10%',position:'relative'}}/>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="row border border-dark mb-5" style={{boxShadow: '0px 10px 10px -6px black'}}>
                            <div class="col-6">
                                <img src={Contactor} class="w-100 " alt="..."/> 
                            </div>
                            <div class="col-6 align-self-center">
                                <h5 class="fw-bold text-primary">CONTACTOR </h5>
                                <h6 class="fw-bold">CONTACTOR  USFULL LC1D</h6>
                                Price:<spam class="text-success">$11.00</spam>
                                <ul>
                                    <li>cualidad 1</li>
                                    <li>cualidad 2</li>
                                    <li>cualidad 3</li>
                                </ul>
                                <div class=" d-flex  flex-row text-center justify-content-center my-3">
                                    <div class="rounded-circle bg-primary mx-2 " style={{width:'35px',height:'35px', boxShadow: '0px 10px 10px -6px black'}}>
                                        <CartIcon class=" " style={{width:'45%',heigth:'45%',top:'10%', right:'5%',position:'relative'}}/>
                                    </div> 
                                    <div class="rounded-circle bg-primary mx-2 " style={{width:'35px',height:'35px', boxShadow: '0px 10px 10px -6px black'}}>
                                        <HeartIcon class="" style={{width:'40%',height:'40%',top:'10%',position:'relative'}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <h6 class="fw-bold text-primary">SWITCH </h6>
                                
                                <img src={SonOff} class="w-50 " alt="..."/>
                                <h6 class="fw-bold">SMART SWITCH  SONOFF BASICR2</h6>
                                Price:<spam class="text-success">$11.00</spam>
                            </div>
                            <div class="col-6">
                                <h6 class="fw-bold text-primary">CONTACTOR </h6>
                                <img src={Contactor} class="w-50 " alt="..."/>
                                <h6 class="fw-bold">CONTACTOR  USFULL LC1D</h6>
                                Price:<spam class="text-success">$11.00</spam>
                            </div>
                        </div>
                    </div>


                 </div>
            </div>
        </div>
    )

}
export default ItemsHome