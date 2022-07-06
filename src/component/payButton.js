
const PayButton=({items, user})=>{

    /*--------------------------------------------------------------------------------------- */
    //en este metodo manejamos el evento que se genera cuando se presiona el boton checkout
    //lo que hacemos es llamar a la funcion createSessión que se describe mas abajo y pasarle el arreglo  
    //con productos de la compra, tambien deberiamos pasarle los datos del usuario que esta haciendo la compra
    // createSession nos devuelve el url para redireccionar al cliente 
    const handleOnClick=async ()=>{

        const result= await createSession(items)
        console.log(items)
        console.log(user)
        console.log(result)
        if(result.url){
            //result.url contiene el url de la pagina checkout de Stripe donde se hará el pago
            //con la instruccion window.location.href=result.url lo que hacemos es 
            //redirigir al cliente hacia ese url 
             window.location.href=result.url
             console.log(result.url)
        }else{
            console.log(result)
        }
        
        
    }
    /*--------------------------------------------------------------------------------------- */
    // en este metodo enviamos una peticion post al backend al endpoint creado para abrir 
    //la pagina checkout de stripe, este metodo retornará un objeto con datos de la sesion
    //en el que se encuentra el url de la sesion de checkout a la que redirigiremos al cliente
    
    const createSession=async (Data)=>{
        const options={
            method:'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
            body: JSON.stringify(Data)
        }
        const res= await fetch('http://localhost:3000/payments/create-checkout-session',options)
        const  data=await res.json()
        return data
    }

    
    /*--------------------------------------------------------------------------------------- */
    return(

        <>
        <button class="btn btn-success col-12"  onClick={()=>handleOnClick()}>checkout</button>
        </>  
        
        )
}

export default PayButton