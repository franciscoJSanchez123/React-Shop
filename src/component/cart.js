import {useState, useEffect} from 'react';
import MoreLessButton2 from './MoreLessButton2'
import { useHistory  } from "react-router-dom";
import PayButton from './payButton'

const Cart = (props) =>{
    const history=useHistory()

    const buy=()=>{
        
        props.user? props.Buy(): history.push("/login")
        
      }


    const areThereItems=()=>{

       return props.items.length ? ((props.items.map(cartItem=>
        <div class="row justify-content-center text-center " >
            <div class="col-2">
                <img src={cartItem.img} class="card-img-top" alt="..."/>
            </div>
            <div class="col-2 ">
                {cartItem.name}
            </div>
            <div class="col-2">
                ${cartItem.price}
            </div>
            <div class="col-2 justify-content-center ">

            <MoreLessButton2 item={cartItem} UpdateItemQuantity={props.UpdateItemQuantity}/>
                
            </div>
            <div class="col-2">
                ${cartItem.quantity*cartItem.price}
            </div>
            <div class="col-2">
                <button class="btn btn-danger col-4" onClick={()=>props.RemoveItem(cartItem)}>
                    x
                </button>
            </div>

        </div>
        
    ))):
    <div class="row justify-content-center text-center">
        <h4>
             there are no items 
        </h4>
    </div>;

       

    }

    return (
        <div class="container " style={{minHeight:'80vh'}}>
                
            
                <div class="row py-5 ">

                    <div class="col-9  py-3 " style={{boxShadow: '0px 10px 10px -6px black'}}>
                            <div class="row justify-content-center text-center pb-5 fw-bold">
                                <div class="col-4">item</div>
                                <div class="col-2">price</div>
                                <div class="col-2">quantity</div>
                                <div class="col-2">subtotal</div>
                                <div class="col-2">remove</div>
                            </div>
                        {areThereItems()}
                    </div>
                    <div class="col-2  mx-3 " style={{boxShadow: '0px 10px 10px -6px black',height:'30vh'}}>
                           <div class="row pb-5 pt-3 fw-bold justify-content-center text-center">Total: ${props.total}</div>
                           
                           <button class="btn btn-success col-12" onClick={()=>buy()}>
                            Buy
                            </button>
                            <PayButton items={props.items} user={props.user}/>
                    </div>

                </div>
        
        </div>
    )
}

export default Cart