import {useState, useEffect} from 'react'
import {UserAuth2} from './../services/UserService'
import {GetUser} from './../services/LocalStorageService'
import { useHistory  } from "react-router-dom";

const UserAuthForm = (props) => {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const history = useHistory()
    const onChangeUsername = e => {
    
        setUsername(
          e.target.value,
        )
        
      }

    const onChangePassword = e => {

        setPassword(
        e.target.value,
        )
    
      }


    const onSubmit =  async (e) => {
        e.preventDefault()
        const data ={username,password}
        
        const userdata= await UserAuth2(data)
        console.log('get auth')
        console.log(userdata)
        console.log('get auth')
        props.getUserData(userdata)
       
        history.goBack()
        
        
      }

    return(

        <div class="container" style={{minHeight:'80vh'}}>
        
          <div class="row  justify-content-center align-items-center py-5">
            <form class="w-50  m-1" onSubmit={onSubmit} style={{boxShadow: '0px 10px 10px -6px black'}}>

                <div class="row text-center">
                    <h1 class=" fw-bold  text-black display-4 " > log in to your<br/>account</h1>
                </div>
                <div class="mb-3">

                  <label for="UserName" class="form-label">User Name</label>
                  <input type="text" class="form-control" id="UserName" name="username" onChange={onChangeUsername}/>
                  
                </div>

                <div class="mb-3">

                  <label for="UserPassword" class="form-label">User Password</label>
                  <input type="password" class="form-control" id="UserPassword" name="password" onChange={onChangePassword}/>

                </div>

                <button type="submit" class="btn btn-dark mb-2 w-100">Submit</button>

              </form>
          </div>

      </div>
    )
}

export default UserAuthForm