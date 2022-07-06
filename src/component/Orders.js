import {useState, useEffect} from 'react'
import { FindOrderById } from '../services/OrdersService'

export const Orders=(props)=>{
    const [orders,setOrders]=useState([])

   
    /*------------------------------------------------------------------------------------------------ */
    /*----------------method that requests each of the user's purchase orders----------------------- */
    const FindOrders=async()=>{
        
        const ordenes= await  Promise.all(props.user.ordersId.map(async (Id)=>{
            const order=await FindOrderById(Id)
            console.log(order)
            return order  
        })) 

        console.log( 'aqui todas las ordenes:',ordenes)
        return   ordenes
        
    }
    /*---------------------------------------------------------------- */
    useEffect( async()=>{
      
      setOrders(await FindOrders())   
        
        
    },[])

    /*---------------------------------------------------------------- */
    return(

        <div class="container my-3" style={{minHeight:'92vh'}}>
            <div class="row text-center"><h1>Your Orders</h1></div>
            <div class="row">
                {orders.length? 

                    <div>{orders.map((order,index)=>
                    
                        <div key={index} className='order'>

                            <div className='order-header'>
                                <div>
                                    id de la compra: {order._id}
                                </div>

                                <div>
                                    status de la compra: {order.status}
                                </div>

                                <div>
                                    monto total de la compra: ${order.total}
                                </div>
                            </div>

                            <div className='order-body'>{order.items.map((item,index2)=>

                                <div key={index2} className="order-item">
                                    <div className="order-item-img">
                                        <img src={item.img} class="img-fluid rounded-start" alt="..."/>
                                    </div>
                                    <div className="order-item-data">
                                        <div className="order-item-data-name">
                                            {item.name}
                                        </div>
                                        <div className='order-item-data-price'>
                                            {item.quantity} x ${item.price} 
                                        </div>
                                    </div>
                                </div>

                            )}
                              
                            </div>
                        
                        </div>)}
                        
                    </div>
                    
                    : "you don't have purchase orders, make one"}
            </div>
        </div>
    )
}