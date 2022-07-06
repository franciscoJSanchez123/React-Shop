import {useState, useEffect} from 'react'
import {fetchAPI} from './../services/ItemService';
import {Link} from 'react-router-dom'

export const ItemList = (props) => {
    const [data,setData]=useState([])
    
    /*---------------------------------------------------------- -----------------------------------------------------------------*/
    /*método para filtrar los item de la base de datos para hacer la paginación, ademas tambien funciona para la barra de busqueda
     hace la busqueda de un item en la base de datos*/

     /*method to filter the items of the database to do the pagination, it also works for the search bar
     does the search for an item in the database*/
    const filteredItems=()=>{
      if(props.search.length===0){
        return data.slice(props.currentPage, props.currentPage+2)
      }else{
        
        const filtered=data.filter(item=>item.name.includes(props.search))
        return filtered.slice(props.currentPage, props.currentPage+2)
      }
    
    }

 
    /*---------------------------------------------------------- -----------------------------------------------------------------*/
    /*cuando el componente renderisa, utiliza el método fetchAPI() del ItemServices para hacer una petición de todos los item de la base de datos */

    /*when the component renders,use the fetchAPI() method of the ItemServices to make a request of all the elements of the database */
    useEffect(async ()=>{

        setData( (await fetchAPI()))
    })

    /*---------------------------------------------------------- -----------------------------------------------------------------*/

    return(
        
        <div class="container my-5 " style={{minHeight:'80vh'}}>
          <div class="row ">
            {filteredItems().length?

                  filteredItems().map((e,index)=> 

                  <div class="col-3 " key={index}>
                      <div class="card " style={{width:'16rem'}} key={e._id}>
                        <Link to={`/items/${e._id}`}>
                        <img src={e.img} class="card-img-top" alt="..."/>
                        </Link>
                        <div class="card-body">

                          <h5 class="card-title">{e.name} ${e.price}</h5>
                          <p class="card-text"> {e.description}</p>
                          
                          <div class="row">
                            
                            <button class="btn btn-dark col-12" onClick={()=>props.AddToCart(e,1)}>
                                Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                  </div>


                  )
              :'There were no results'
            }
          </div>
          <div class="row justify-content-center">
              <button class="btn btn-dark col-2 mx-1"onClick={props.previusPage}>
                  previus
              </button>
              <button class="btn btn-dark col-2 mx-1" onClick={props.nextPage}>
                  next
              </button>
          </div>
       </div>
    )
}