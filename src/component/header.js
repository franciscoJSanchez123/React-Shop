import {NavBar} from './navbar';
import {Link} from 'react-router-dom';


 export const Header = (props)=>{

    return(
        <div class="container-xxl m-0 p-0 ">
        
            <div class="row justify-content-center h-100" >
            
                
                <div class="col-9 text-center m-0 p-0" >
                    <NavBar HideSideBar={props.HideSideBar} onSearchChange={props.onSearchChange}/>
                </div>
                <div class="col-3 text-center bg-dark m-0 p-0" >
                    <div class="row mt-2">
                        <div class="col-4 text-center " >
                            <Link class="nav-link active text-light" to="/SignUp" >Sign up</Link>
                        </div>
                        <div class="col-4 text-center" >
                            <Link class="nav-link active text-light" to="/login" >Log in</Link>
                        </div>
                        <div class="col-4 text-center" >
                            <Link class="nav-link active text-light" to="/Cart" >Cart</Link>
                        </div>
                    </div>
                </div>

            </div>
      
        </div>
    )
}