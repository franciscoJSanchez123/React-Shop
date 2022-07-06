import {ReactComponent as Shipping} from './../icons/shipping.svg';
import {ReactComponent as Support} from './../icons/support.svg';
import {ReactComponent as Boxes} from './../icons/boxes.svg';
import {ReactComponent as Payment} from './../icons/payment.svg';
const Features=()=>{
    return(
        <div class="container my-5">
            <div class='row'>
                <div class="col-6">
                    <div class="row text-white justify-content-center">
                        <div class="col-5 mx-2 ">
                           
                           <div class="row bg-success my-3 rounded-3 ">
                                
                                <Shipping class="pt-5 pb-3" style={{height:'35%',width:'35%'}}/>
                                <span class="fs-4 pb-1">Free Shipping</span>
                                <p class="fs-6">We ship your products for FREE nationwide</p>
                           </div>
                           <div class="row bg-info my-3 rounded-3">
                                
                                <Support class="pt-5 pb-3" style={{height:'35%',width:'35%'}}/>
                                <span class="fs-4 pb-1"> Support</span>
                                <p class="fs-6">Our operators are always online and give you all information you are interested in. </p>
                           </div>
                        </div>
                        <div class="col-5  mx-2 pt-5 ">
                            
                            <div class="row bg-success my-3 rounded-3">
                                
                                <Boxes class="pt-5 pb-3" style={{height:'35%',width:'35%'}}/>
                                <span class="fs-4 pb-1">wholesale</span>
                                <p class="fs-6 pb-4">Check our wholesale prices</p>
                           </div>
                           <div class="row bg-success my-3 rounded-3">
                                
                                <Payment class="pt-5 pb-3" style={{height:'35%',width:'35%'}}/>
                                <span class="fs-4 pb-1">diversity of payments</span>
                                <p class="fs-6 ">We have various payment methods, all payments are made very quickly</p>
                           </div>
                        </div>

                    </div>
                </div>
                <div class="col-6 bg-primary position-relative">
                    <div class="row justify-content-center  ">
                        <h1 class=" fw-bold  text-white display-3 " > CHOOSE OUR </h1>
                        <span class="fw-bold  text-black text-black display-3 ">COMPANY</span>
                        <p class="">
                            We are a company specialized in the commercialization of protection, control and automation products,
                            we offer products for the industrial, commercial and residential sectors and
                            we have a team of professionals who will assist you in your purchase
                        </p>
                        <button type="button" class="btn btn-secondary btn-lg w-75 mb-3 position-absolute bottom-0">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Features