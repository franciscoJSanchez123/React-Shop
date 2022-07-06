


      const GetItems=(datos)=>{
        const data = datos.slice()
        return data
      }
    
      const GetItemsIds=(datos)=>{
        const data = datos.map(item=> item._id);
        return data
      }
    
    
      export const AddItem=(item,quantity,cart)=>{
        if(!item.quantity){
          Object.defineProperty(item,'quantity',{value:1,writable:true,enumerable: true,configurable: true})
        }
        console.log('aqui state.cart')
        console.log(item)
        console.log(cart)
        console.log('aqui state.cart')
        let data=cart.slice()
        let ids=cart.map(item=> item._id)
        if(ids.includes(item._id)){
            data.map(cartItem=>{
                if (cartItem._id===item._id){
                  cartItem.quantity+=quantity
                  console.log('aumentar cantidad')
                }
    
            })
        }else{
            data.push(item)
    
        }
        /*
        setCart(data)
        GetTotal()
        */
       return data
      }
    /*
      const RemoveItem = (item)=>{
        
        let data=GetItems()
        const index = data.findIndex(elemt=>elemt===item); 
        data.splice(index,1)
        setCart(data)
        GetTotal()
    
    
      }
    
      const UpdateItemQuantity=(item,quantity)=>{
        let data=GetItems()
        data.map(cartItem => {
    
          if(cartItem._id===item._id){
    
            cartItem.quantity+=quantity
          }
    
        })
    
        setCart(data)
        GetTotal()
      }
    
      const GetTotal=()=>{
        let data=GetItems()
        let total=0;
    
        data.map(cartItem=>{
    
           total += (cartItem.price)*(cartItem.quantity)
        })
    
        setTotal(total);
    
      }
    
      const ClearCart=()=>{
    
        setCart([]); 
    
    
      }*/
