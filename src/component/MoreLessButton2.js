import   './MoreLessButton2.css';
 
 const MoreLessButton2=  (props)=>{
    

    return(

        <div id="button" >
            <div class="block">
                <button class="btn btn-primary row"  onClick={()=>props.UpdateItemQuantity(props.item,-1)}>
                    -
                </button>
            </div>
            <div class="block" >
                
                   
                        <input  type="number" value={props.item.quantity} />
                
                
            </div>
            <div class="block">
                <button class="btn btn-primary row"  onClick={()=>props.UpdateItemQuantity(props.item,1)}>
                    +
                </button>
            </div>
        </div>
    )
}

export default MoreLessButton2