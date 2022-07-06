import {Link,useHistory} from 'react-router-dom';
import {ReactComponent as MenuIcon} from './../icons/menu.svg';
export const NavBar = (props)=>{
    const history=useHistory()
    const sutmit=(e)=>{
        e.preventDefault()
        history.push("/materiales")
    }

    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark m-0" style={{height:'10vh' }}>
          <div class="container-fluid m-0 p-0" >

            <div class="col-1 " >
                <MenuIcon onClick={props.HideSideBar} style={{height:'40%', width:'40%' }}/>
            </div>
            <ul class="navbar-nav  mb-2 mb-lg-0">
                    
                    <li class="nav-item" >
                     <Link class="nav-link active" to="/">Company</Link>
                    </li>      
                    
            </ul>
                
            
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav  mb-2 mb-lg-0">
                    
                    <li class="nav-item" >
                        <Link class="nav-link active" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link active" to="/materiales">items</Link>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link active " href={{}} >Services</a>
                    </li>
                    
                </ul>
                <form class="d-flex w-100" onSubmit={sutmit} >
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={props.onSearchChange}/>
                    <button class="btn btn-outline-primary" type="submit">Search</button>
                </form>
            </div>
          </div>
        </nav>
    )
}