import {GetToken} from './LocalStorageService'



/*------------------------------------------------------------------------------------------- */
/*petición get de todos los items de la base de datos*/

/*get request for all items in the database*/

export async function fetchAPI(){
      
    
    const res= await fetch('http://localhost:3000/items/list/All')
    const datos= await res.json()        
    return datos  
}

/*------------------------------------------------------------------------------------------- */
/*petición post para añadir item a  la base de datos*/

/*post request to add item to database*/

export async function AddItem(Data){
    const token= GetToken()
    console.log('aqui additem')
    console.log(token)
    console.log('aqui additem')
    const myHeader = new Headers()
    myHeader.set("Content-Type", "application/json");
    myHeader.set("Authorization", "BEARER "+ token)
    const options={
        method:'POST',
        headers: myHeader,
        body: JSON.stringify(Data)
    }
    await fetch('http://localhost:3000/items',options)
}
/*------------------------------------------------------------------------------------------- */
/*petición get para un item en la  base de datos segun su id*/

/*get request for an item in the database according to its id*/

export async function FindById(_id){
    
    

    const res=await fetch(`http://localhost:3000/items/${_id}`)
    const datos=await res.json()                  
    return datos      
}
/*------------------------------------------------------------------------------------------- */
/*petición put para actualizar un  item en la  base de datos segun su id*/

/*put request to update an item in the database according to its id*/

export const updateItem= async (_id,Data)=>{
    const token= GetToken()
    const myHeader = new Headers()
    myHeader.set("Content-Type", "application/json");
    myHeader.set("Authorization", "BEARER "+ token)
    const options={
        method:'PUT',
        headers: myHeader,
        body: JSON.stringify(Data)
    }
    await fetch(`http://localhost:3000/items/${_id}`,options)

}
/*------------------------------------------------------------------------------------------- */
/*petición delete para borrar un  item en la  base de datos segun su id*/

/*delete request to delete an item in the database according to its id*/

export const deleteItem=async (_id)=>{
    const token= GetToken()
    const myHeader = new Headers()
    myHeader.set("Content-Type", "application/json");
    myHeader.set("Authorization", "BEARER "+ token)
    const options={
        method:'DELETE',
        headers: myHeader,
        
    }
    await fetch(`http://localhost:3000/items/${_id}`,options)
}