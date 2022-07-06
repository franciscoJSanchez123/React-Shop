
 
 const MoreLessButton=  (props)=>{
    

    return(

        <div class="row justify-content-center">
            <div class="col-3">
                <button class="btn btn-dark row"  onClick={()=>props.UpdateItemQuantity(props.item,-1)}>
                    -
                </button>
            </div>
            <div class="col-3 " >
                
                
                    
                    
                        <input  type="number" value={props.item.quantity} style={{width:'100%'}}/>
                    

                
            </div>
            <div class="col-3">
                <button class="btn btn-dark row"  onClick={()=>props.UpdateItemQuantity(props.item,1)}>
                    +
                </button>
            </div>
        </div>
    )
}

export default MoreLessButton