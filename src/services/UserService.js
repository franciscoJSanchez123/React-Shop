import {SaveToken, GetToken, SaveUser,GetUser} from './LocalStorageService'

/**---------------------------------------------------------------------------------- */
/*este metodo es la autenticacion de usuario vieja esta mal hecha, no la estoy usando */
export async function UserAuth(Data){
    let user
    const options={
        method:'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify(Data)
    }
    console.log('data')
    console.log(options)
    console.log('data')
    await fetch('http://localhost:3000/auth/login',options)
    .then(res=>{
        if (res.ok){
            console.log('todo bien con la peticion')
            res.json()
            .then(async(token)=>{
                SaveToken(token.access_token)
                
                const myHeader = new Headers()
                myHeader.set("Content-Type", "application/json");
                myHeader.set("Authorization", "BEARER "+ token.access_token)
                
                const options={
                    method:'GET',
                    headers: myHeader,
                        
                }
                await fetch('http://localhost:3000/auth/profile',options)
                    .then(res=>res.json())
                    .then(data=>{
                        SaveUser(data)
                        console.log('aqui user service')
                        console.log(data)
                        console.log('aqui user service')
                        user=data
                        console.log(user)
                        
                        
                    });console.log('esto se ejecuta')
                    
                    
            })

        }else{
            console.log('Respuesta de red OK pero respuesta HTTP no OK')
        }
    })
    .catch(e=>{
        console.log('Hubo un problema con la petición Fetch:' + e.message)
    })
    
}
/**---------------------------------------------------------------------------------- */
/*este método no esta siendo utilizado */
export async function UserProfile(){
    let datos={}
    const token= GetToken()
    const myHeader = new Headers({
        'Authorization': 'BEARER'+token
        })
    const options={
        method:'GET',
        headers: myHeader,
        
    }
    await fetch('http://localhost:3000/auth/profile',options)
        .then(res=>res.json())
        .then(data=>{datos=data;console.log(datos)})

 return datos   
}
/**---------------------------------------------------------------------------------- */
export const CreateUser= async (Data)=>{
    const options={
        method:'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify(Data)
    }
    await fetch('http://localhost:3000/users',options)
}
/**---------------------------------------------------------------------------------- */
/*autenticacion de usuario actual, esta en uso */
export const  UserAuth2= async (Data)=>{
    
    
    const options={
        method:'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify(Data)
    }
    const res = await fetch('http://localhost:3000/auth/login',options)
    const token2=await res.json()
    SaveToken(token2.access_token)


    const myHeader = new Headers()
    myHeader.set("Content-Type", "application/json");
    myHeader.set("Authorization", "BEARER "+ token2.access_token)
    console.log('token')
    console.log(token2)
    console.log('token')
    const options2={
        method:'GET',
        headers: myHeader,
            
    }
    const res2= await fetch('http://localhost:3000/auth/profile',options2)
    const user= await res2.json()
    SaveUser(user)
    console.log('nueva funcion')
    console.log(user)
    console.log('nueva funcion')


    return user  
}