
import './App.css';
import {useState, useEffect} from 'react'
import Chat from './component/chat';
import {Header} from './component/header';
import Footer2 from './component/footer2';
import {Home} from './component/home';
import {ItemList} from './component/itemList';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import UserAuthForm from './component/UserAuthForm';
import ItemDetail2 from './component/itemDetail2';
import Cart from './component/cart';
import SideBar2 from './component/sideBar2';
import SignUp from './component/signUp';

import {GetUser,ClearAll} from './services/LocalStorageService'
import { ItemForm } from './component/itemForm';
import { UpdateItem } from './component/updateItem';
import { DeleteItem } from './component/DeleteItem';
import { CreateOrder } from './services/OrdersService';
import { Orders } from './component/Orders';



 const App=()=> {

  const [total,setTotal]=useState(0);     //for item cart
  const [cart,setCart]=useState([]);      //for item cart, array of items in the item cart
  const [hidesideBar,setHidesideBar]=useState(true); //for side bar 
  const [user,setUser]=useState();         //for user, contains the data of the logged-in user
  const [search,setSearch]=useState('');         //for search bar
  const [currentPage,setCurrentPage]=useState(0);//for pagination
  

  useEffect(async ()=>{

    setUser((await getUser()))


},[])

/**---------------------------------------------------------------------------------------- ------------------------*/


/*-----------------métodos para el  Item Cart-------------------------------- */

/*-------------------methods for Item Cart ------------------------------------*/


/*return a copy of the array containing the shopping cart items*/
  const GetItems=()=>{
    const data = cart.slice()
    return data
  }



/*return a array containing the ids of shopping cart items*/
  const GetItemsIds=()=>{
    const data = cart.map(item=> item._id);
    return data
  }


/*add a item to the shopping cart */ 
  const ADDItem=(item,quantity)=>{
    if(!item.quantity){
      Object.defineProperty(item,'quantity',{value:1,writable:true,enumerable: true,configurable: true})
    }
    console.log('aqui state.cart')
    console.log(item)
    console.log(cart)
    console.log('aqui state.cart')
    let data=GetItems()
    if(GetItemsIds().includes(item._id)){
        data.map(cartItem=>{
            if (cartItem._id===item._id){
              cartItem.quantity+=quantity
              console.log('aumentar cantidad')
            }

        })
    }else{
        data.push(item)

    }
    GetTotal(data)
    setCart(data)
    
  }
    

/*remove a item of the shopping cart */ 
  const RemoveItem = (item)=>{
    
    let data=GetItems()
    const index = data.findIndex(elemt=>elemt===item); 
    data.splice(index,1)
    GetTotal(data)
    setCart(data)
    


  }


  /*update  quantity of a item in the shopping cart */ 
  const UpdateItemQuantity=(item,quantity)=>{
    let data=GetItems()
    data.map(cartItem => {

      if(cartItem._id===item._id){

        cartItem.quantity+=quantity
      }

    })
    GetTotal(data)
    setCart(data)
    
  }


  /*calculate the total amount of the shopping cart*/ 
  const GetTotal=(data)=>{
    
    let total=0;

    data.map(cartItem=>{

       total += (cartItem.price)*(cartItem.quantity)
    })

    setTotal(total);

  }


  /*clear  the shopping cart*/ 
  const ClearCart=()=>{

    setCart([]); 


  }
  
/**---------------------------------------------------------------------------------------- -------------------------------*/
  const HideSideBar=()=>{
    if(hidesideBar){
      
      setHidesideBar(false)
      document.getElementsByTagName('html')[0].style.overflow="hidden";
      document.getElementsByTagName('body')[0].style.overflow="hidden";
     
    }else{
      
      setHidesideBar(true)
     
      document.getElementsByTagName('html')[0].style.overflow="auto";
      document.getElementsByTagName('body')[0].style.overflow="auto";
       
    }
  }

/**----------------------------------------------------------------------------------------------------------------------- */
/*---------methods for user data ------------*/
  const getUser=async()=>{
    const data=await GetUser()
    
    return data
}

  const getUserData=  (data)=>{
    console.log('get user')
    console.log(data)
    console.log('get user')
    setUser( data)
}



/**----------------------------------------------------------------------------------------------------------------------- */


  const LogOut=()=>{
    console.log('aui logout')
    ClearAll()
    setUser()
    
  }
/**----------------------------------------------------------------------------------------------------------------------- */

  const Buy=()=>{
    CreateOrder(user,cart,total)
    
  }
  /**----------------------------------------------------------------------------------------------------------------------*/
/*métodos para barra de busqueda y paginación */

/*methods for search bar and pagination */

  const onSearchChange=(e)=>{

    console.log(e.target.value)
    setCurrentPage(0)
    setSearch(e.target.value)
    
  }

  const nextPage=()=>{

    setCurrentPage(currentPage+2)
  }

  const previusPage=()=>{
    if(currentPage>0)
    setCurrentPage(currentPage-2)
  }

/**---------------------------------------------------------------------------------------- */
  const sideBarStyle={
    display: hidesideBar? 'none':'block',
    position: 'absolute', 
    zIndex:'1000',
    float: 'left',
    height:'100%',
    paddingLeft:'1'
  }

  return (
    <div >
      <Router>
        <Header HideSideBar={HideSideBar} onSearchChange={onSearchChange}/>
        <div class="row justify-content-center position-relative">

            <div style={sideBarStyle}>
                <SideBar2 user={user} LogOut={LogOut}/>
               
            </div>
            <div class="col-12 ">
              <Switch>
              
                  <Route exact path="/" component={Home}/>

                  <Route exact path="/materiales" > <ItemList AddToCart={ADDItem} search={search} nextPage={nextPage} previusPage={previusPage} currentPage={currentPage}/></Route>

                  <Route exact path="/SignUp" component={SignUp}/>

                  <Route exact path="/login" ><UserAuthForm getUserData={getUserData}/></Route>

                  <Route exact path="/items/:_id"> <ItemDetail2 AddToCart={ADDItem}/></Route>

                  <Route exact path="/AddItem" ><ItemForm /></Route>

                  <Route exact path="/UpdateItem" ><UpdateItem/></Route>

                  <Route exact path="/DeleteItem" ><DeleteItem/></Route>

                  <Route exact path="/Orders" ><Orders user={user}/></Route>

                  <Route exact path="/Cart" > 
                            
                      <Cart 
                        total={total}
                        user={user}
                        items={cart} 
                        RemoveItem={RemoveItem}
                        UpdateItemQuantity={UpdateItemQuantity}
                        ClearCart={ClearCart}
                        Buy={Buy}
                      />
                    
                  </Route>

              </Switch>
            </div>
        </div>
        <Footer2/>
      </Router>  
      
    </div>
  );
}

export default App


