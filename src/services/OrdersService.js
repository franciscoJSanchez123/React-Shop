
import {GetToken} from './LocalStorageService'
export const CreateOrder=async (user,items,total)=>{


    const token= GetToken()
    console.log('aqui additem')
    console.log(token)
    console.log('aqui additem')
    console.log(items)
    const status='en proceso'
    const Data={user,items,total,status}
    const myHeader = new Headers()
    myHeader.set("Content-Type", "application/json");
    myHeader.set("Authorization", "BEARER "+ token)
    const options={
        method:'POST',
        headers: myHeader,
        body: JSON.stringify(Data)
    }
    await fetch('http://localhost:3000/orders',options)
}

export const FindOrderById= async (_id)=>{

    const res=await fetch(`http://localhost:3000/orders/${_id}`)
    const datos=await res.json()
                     
    return datos
}