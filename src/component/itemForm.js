import { useState } from "react"
import {AddItem} from './../services/ItemService'

export const ItemForm=()=>{
    const [name,setName]=useState('')
    const [description,setDescription]=useState('')
    const [img,setImg]=useState('')
    const [price,setPrice]=useState('')

    const onChange=(e)=>{
        switch (e.target.name){

            case 'name':
                setName(e.target.value)
            case 'img':
                setImg(e.target.value)
            case 'description':
                setDescription(e.target.value)
            case 'price':
                setPrice(e.target.value)
        }
    }


    const onSubmit=(e)=>{
        e.preventDefault()
        const isActive=true
        const imgsUrls=[]
        const datos={name,img,description,isActive,price,imgsUrls}
        AddItem(datos)
    }


    return (

        <div class="addItem-main-container">
        
          <div class="addItem-form-container ">
              <form  onSubmit={onSubmit}>
                  <div class="mb-3 text-center">

                        <h1>
                          Add item to <br/>
                          the Database
                        </h1>
                  </div>
                  <div class="mb-3">

                    <label for="itemName" class="form-label">Item Name</label>
                    <input type="text" class="form-control" id="itemName" name="name" onChange={onChange}/>
                    
                  </div>

                  <div class="mb-3">

                    <label for="itemImg" class="form-label">Item Image</label>
                    <input type="text" class="form-control" id="itemImg" name="img" onChange={onChange}/>

                  </div>

                  <div class="mb-3">

                    <label for="itemDescription" class="form-label">Item Description</label>
                    <input type="text" class="form-control" id="itemDescription" name="description" onChange={onChange}/>

                  </div>

                  <div class="mb-3">

                    <label for="itemPrice" class="form-label">Item Price</label>
                    <input type="text" class="form-control" id="itemPrice" name="price" onChange={onChange}/>

                  </div>
                        
                  <button type="submit" class="btn btn-primary w-100">Add Item</button>

                </form>
          </div>

      </div>



    )
}