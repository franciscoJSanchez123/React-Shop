export const SaveToken=(token)=>{
    localStorage.setItem('access_token',token)
}

export const GetToken=()=>{
    const token=localStorage.getItem('access_token');
    console.log('local storahe')
    console.log(token)
    console.log('local storahe')
    return token
}

export const ClearToken=()=>{
    localStorage.removeItem('access_token')
}

export const SaveUser=(user)=>{
    localStorage.setItem('user',JSON.stringify(user))
}

export const GetUser=async()=>{
    const usuario=localStorage.getItem('user')
    const user=await JSON.parse(usuario)
    return user
}

export const ClearUser=()=>{
    localStorage.removeItem("user");
}

export const ClearAll=()=>{
    localStorage.removeItem('access_token')
    localStorage.removeItem("user")
}

export const SaveOrders=(orders)=>{
    localStorage.setItem('orders',JSON.stringify(orders))
}

export const GetOrders=async()=>{
    const orders=localStorage.getItem('orders')
    const Orders=await JSON.parse(orders)
    return Orders
}