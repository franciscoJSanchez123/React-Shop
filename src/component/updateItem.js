import { useState } from "react";
import { FindById, updateItem} from './../services/ItemService';



export const UpdateItem=()=>{
    const [id,setId]=useState('')
    const [item,setItem]=useState({})

    const [name,setName]=useState('')
    const [description,setDescription]=useState('')
    const [img,setImg]=useState('')
    const [price,setPrice]=useState('')

         
    const onChange=(e)=>{
        if(e.target.name==='id'){
            setId(e.target.value)
        }else{
            setItem({...item,[e.target.name]:e.target.value})
        }

    }
    /*
    const onChange=(e)=>{
        switch (e.target.name){
            case 'id':
                setId(e.target.value)
            case 'name':
                setItem({...item,name:e.target.value})
            case 'img':
                setItem({...item,img:e.target.value})
            case 'description':
                setItem({...item,description:e.target.value})
            case 'price':
                setItem({...item,price:e.target.value})
        }
        
    }*/
    const onSubmit1= async (e)=>{
        e.preventDefault()
        console.log('aqui')
        const data= await FindById(id)
        setItem(data)
        console.log(data)
    }

    const onSubmit2=async (e)=>{
        e.preventDefault()
        const {_id,...result}=item
        updateItem(id,result)
        console.log(price)
        console.log(item)
        console.log(description)
    }
    return (

        <div class= 'updateItem-main-container'>

            <div class="updateItem-form-container">
                <form onSubmit={onSubmit1}>
                    <div class="mb-3 text-center">
                        <h1>
                            Update item in <br/>
                            the database
                        </h1>
                    </div>
                    <div class="mb-3">

                       
                        <label for="itemid" class="form-label">Search item by id:</label>
                        <input type="text" class="form-control" id="itemid" name="id" onChange={onChange}/>

                    </div>
                    
                    <button type="submit" class="btn btn-primary w-100">Submit</button>
                </form>
            </div>
               
            
                {item.img?

                <div class="updateItem-form-container">
                    <form onSubmit={onSubmit2}>
                        <div class="mb-3 text-center">

                            <img src={item.img} class="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div class="mb-3">

                            <label for="itemName" class="form-label">Item Name:</label>
                            <input type="text" class="form-control" id="itemName" name="name" placeholder={item.name} onChange={onChange}/>

                        </div>

                        <div class="mb-3">

                            <label for="itemImg" class="form-label">Item Image:</label>
                            <input type="text" class="form-control" id="itemImg" name="img" placeholder={item.img} onChange={onChange}/>

                        </div> 

                        <div class="mb-3">

                            <label for="itemDescription" class="form-label">Item Description:</label>
                            <input type="text" class="form-control" id="itemDescription" name="description" placeholder={item.description} onChange={onChange}/>

                        </div>

                        <div class="mb-3">

                            <label for="itemPrice" class="form-label">Item Price:</label>
                            <input type="text" class="form-control" id="itemPrice" name="price" placeholder={item.price} onChange={onChange}/>

                        </div>
                        <button type="submit" class="btn btn-primary w-100">Update</button>
                    </form>
                </div>


                :''}

                
            </div>
            
        
    )
}