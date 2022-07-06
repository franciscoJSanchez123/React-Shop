import {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { FindById } from './../services/ItemService';
import {ReactComponent as CartIcon} from './../icons/cart.svg';
import {ReactComponent as HeartIcon} from './../icons/heart.svg';
import MoreLessButton from './MoreLessButton'
const ItemDetail2=(props)=>{
    const [item, setItem]=useState([])
    const [itemImgs, setItemImgs]=useState([])
    const [imgActive, setImgActive]=useState('')
    const {_id} = useParams()

    useEffect( () => {
        
        getItem()
       
    },[])

    const getItem = async ()=>{
        const data = await FindById(_id)
        setItem(data)
        setImgActive(data.img)
        setItemImgs(data.imgsUrls)
    }

    const changeImg=(img)=>{
        setImgActive(img)
    }

   

    return (
        <div class="container-xl ">
            <div class="row position-relative justify-content-center bg-black my-5 overflow-hidden" style={{height: '80vh', boxShadow: '8px 10px 10px -6px black'}}>
                <div class="position-absolute top-0 bg-primary h-100 " style={{transform: 'skew(-30deg)', right:'65%', zIndex: '100'}}></div>
                <div class="col-12 " style={{zIndex: '100'}} >
                        <div class="row h-100">
                            <div class="col-6 text-center h-100">
                                <div>
                                    <img src={imgActive} class="w-75 " alt="..."/>
                                </div>
                                <div class="d-flex flex-row pt-2">
                                    {itemImgs.map(img=> 
                                    
                                    
                                    <div class="w-25">
                                           <img src={img} class="w-50" alt="..." onClick={()=>changeImg(img)}/> 
                                    </div>
                                        
                                        
                                    )}
                                </div>
                            </div>
                            <div class="col-6">
                                
                                <h1 class=" fw-bold  text-white display-3 " > {item.name}</h1>
                                
                                <p class=" fw-bold  text-white display-5 ">{item.description}</p>
                                <p class=" fw-bold  text-success display-5 ">${item.price}</p>
                                <ul class=" fw-bold  text-white  ">
                                    <li>cualidad 1</li>
                                    <li>cualidad 2</li>
                                    <li>cualidad 3</li>
                                </ul>

                                <div class=" d-flex  flex-row text-center justify-content-center my-3">
                                    <div class="rounded-circle bg-primary mx-2 " style={{width:'35px',height:'35px', boxShadow: '0px 10px 10px -6px black'}}>
                                        <CartIcon class=" " style={{width:'45%',heigth:'45%',top:'10%', right:'5%',position:'relative'}}/>
                                    </div> 
                                    <div class="rounded-circle bg-primary mx-2 " style={{width:'35px',height:'35px', boxShadow: '0px 10px 10px -6px black'}}>
                                        <HeartIcon class="" style={{width:'40%',height:'40%',top:'10%',position:'relative'}}/>
                                    </div>
                                </div>
                                
                                
                                
                                <button class="btn btn-primary col-12" onClick={()=>props.AddToCart(item,1)}>
                                    Add to cart
                                </button>
                                
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail2