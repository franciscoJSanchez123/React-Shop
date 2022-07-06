GetItems=()=>{
    const data = cart.slice()
    return data
  }

  GetItemsIds=()=>{
    const data = cart.map(item=> item._id);
    return data
  }

  ADDItem=(item,quantity)=>{
    if(!item.quantity){
      Object.defineProperty(item,'quantity',{value:1,writable:true,enumerable: true,configurable: true})
    }
    console.log('aqui state.cart')
    console.log(item)
    console.log(cart)
    console.log('aqui state.cart')
    let data=this.GetItems()
    if(this.GetItemsIds().includes(item._id)){
        data.map(cartItem=>{
            if (cartItem._id===item._id){
              cartItem.quantity+=quantity
              console.log('aumentar cantidad')
            }

        })
    }else{
        data.push(item)

    }

    setCart(data)
    this.GetTotal()
  }

  RemoveItem = (item)=>{
    
    let data=this.GetItems()
    const index = data.findIndex(elemt=>elemt===item); 
    data.splice(index,1)
    setCart(data)
    this.GetTotal()


  }

  UpdateItemQuantity=(item,quantity)=>{
    let data=this.GetItems()
    data.map(cartItem => {

      if(cartItem._id===item._id){

        cartItem.quantity+=quantity
      }

    })

    setCart(data)
    this.GetTotal()
  }

  GetTotal=()=>{
    let data=this.GetItems()
    let total=0;

    data.map(cartItem=>{

       total += (cartItem.price)*(cartItem.quantity)
    })

    setTotal(total);

  }


  ClearCart=()=>{

    setCart([]); 


  }