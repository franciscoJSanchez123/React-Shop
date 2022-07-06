import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import {ReactComponent as HomeIcon} from './../icons/Home.svg';
import {ReactComponent as LogoutIcon} from './../icons/logOut.svg'
import {ReactComponent as Order} from './../icons/order.svg';
import {ReactComponent as User} from './../icons/user.svg';
import {ReactComponent as Add} from './../icons/add.svg';
import {ReactComponent as Update} from './../icons/update.svg';
import {ReactComponent as Delete} from './../icons/delete.svg';
import {GetUser,ClearAll} from './../services/LocalStorageService'
import {Link} from 'react-router-dom';

const SideBar=({user,LogOut})=>{
    
    

    const mostrar=()=>{
        return user ? 
        
        <div >
            <div class="row m-0 py-4 justify-content-center" >
                <User style={{width:'55%'}}/>
                {user.name}
            </div>
            <div class="row m-0 py-4 justify-content-center" >
                <Order style={{width:'60%', height:'30%'}}/>
                <Link  class="nav-link active text-black text-center" to="/Orders" >
                     Orders
                </Link>
            </div>
            <div class="row m-0 py-4 justify-content-center" >
                <Add style={{width:'55%', height:'30%'}}/>
                <Link  class="nav-link active text-black text-center" to="/AddItem" >
                     Add Item
                </Link>
            </div>
            <div class="row m-0 py-4 justify-content-center" >
                <Update style={{width:'65%', height:'30%'}}/>
                <Link  class="nav-link active text-black text-center" to="/UpdateItem" >
                     Update Item
                </Link>
            </div>
            <div class="row m-0 py-4 justify-content-center" >
                <Delete style={{width:'55%', height:'30%'}}/>
                <Link  class="nav-link active text-black text-center" to="/DeleteItem" >
                    Delete Item
                </Link>
            </div>
            
            
            
        </div>
        :'no hay'
    }
  
   
    return(
        <div class="col-1 bg-primary vh-100 position-fixed"  >

                
                    <div class="row m-0 py-4 justify-content-center" >
                        <HomeIcon/> 
                        Home
                    </div>

                    <div class="row m-0 py-4 justify-content-center" >
                        {mostrar()}
                    </div>
                    
                
                    <div class="row m-0 py-4 justify-content-center" onClick={LogOut} >
                        <LogoutIcon/> 
                        Cerrar Sesión
                        
                    </div>
          
           
         
            
        </div>
    )
}
export default SideBar