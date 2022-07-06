import {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { FindById } from './../services/ItemService'
const ItemDetail=()=>{
    const [item, setItem]=useState([])
    const {_id} = useParams()

    useEffect( () => {
        
        getItem()
       
    },[])

    const getItem = async ()=>{
        const data = await FindById(_id)
        setItem(data)
    }

    return (
        <div class="container-xl ">
            <div class="row ">
                <div class="col-10 align-self-center ">
                    <div class="card mb-3 " style={{maxWidth:'740px'}}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={item.img} class="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body" >
                                    <h5 class="card-title">{item.name}</h5>
                                    <p class="card-text">{item.description}</p>
                                    <p class="card-text">${item.price}</p>
                                    <div class="row">
                                        <a href={{}}class="btn btn-primary col-12">Add to cart</a>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail