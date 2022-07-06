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
import {Link, useHistory} from 'react-router-dom';

const SideBar2=({user,LogOut})=>{
    
    
   const history=useHistory()
   const onLogout=()=>{
    LogOut();
    history.push("/")
   }
  
   
    return(
        <div class="sideBar"  >

                    {user?
                        <div class="sideBar-block text-white" >
                     
                          {/*<User style={{width:'10%', height:'10%'}}/>*/}
                          {user.name}

                        </div>
                    :' '
                    
                    }
 

                    <div class="sideBar-block " >
                         {/*<HomeIcon/> */}
                         <Link class="nav-link active" to="/">
                            Home
                         </Link>
                    </div>

                    {user?
                         <div class="sideBar-block" >
                            {/*<Order style={{width:'20%', height:'30%'}}/>*/}
                            <Link  class="nav-link active  text-center" to="/Orders" >
                                Orders
                            </Link>
                        </div>
                    :' '

                    }
                    {user? 
                        user.admin?
                            <div class="sideBar-block" >
                                {/*<Add style={{width:'20%', height:'30%'}}/>*/}
                                <Link  class="nav-link active  text-center" to="/AddItem" >
                                    Add Item
                                </Link>
                            </div>
                        
                        :''
                         
                    :' '

                    }
                    {user?
                        user.admin?
                        <div class="sideBar-block" >
                            {/*<Update style={{width:'20%', height:'30%'}}/>*/}
                            <Link  class="nav-link active  text-center" to="/UpdateItem" >
                                Update Item
                            </Link>
                        </div>
                        
                        :''
                    :' '

                    }
                     {user? 
                        user.admin?
                            <div class="sideBar-block" >
                                {/*<Delete style={{width:'20%', height:'30%'}}/>*/}
                                <Link  class="nav-link active  text-center" to="/DeleteItem" >
                                    Delete Item
                                </Link>
                            </div>
                        
                        :''
                         
                    :' '

                    }
                       
                
                    <div class="sideBar-block nav-link active" onClick={onLogout} >
                          {/*<LogoutIcon/> */}
                        Sign Out
                        
                    </div>
          
           
         
            
        </div>
    )
}
export default SideBar2