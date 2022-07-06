import {useState, useEffect} from 'react'
import {CreateUser} from './../services/UserService'

const SignUp = () => {
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');
    

    const onChangeInput = e => {
    
        switch (e.target.name){
            case 'name':
                setName(e.target.value)
                
            case 'password':
                setPassword(e.target.value)
                
            case 'email':
                setEmail(e.target.value)
        } 
        
      }


    const onSubmit = async (e) => {
        e.preventDefault()
        const ordersId=[]
        const admin=false
        const data ={name,password,email,ordersId,admin}

        await CreateUser(data)
        
        
      }

    return(

        <div class="container  " style={{minHeight:'80vh'}}>
        
          <div class="row  justify-content-center align-items-center py-5 " >

            
            <form class="w-50 m-1" onSubmit={onSubmit} style={{boxShadow: '0px 10px 10px -6px black'}}>

                <div class="row text-center">
                    <h1 class=" fw-bold  text-black display-4 " > Create your   <br/>account</h1>
                </div>
                <div class="mb-3 mt-1">

                  <label for="UserName" class="form-label">User Name</label>
                  <input type="text" class="form-control" id="UserName" name="name" onChange={onChangeInput}/>
                  
                </div>

                <div class="mb-3">

                  <label for="UserPassword" class="form-label">User Password</label>
                  <input type="password" class="form-control" id="UserPassword" name="password" onChange={onChangeInput}/>

                </div>

                <div class="mb-3">

                  <label for="UserEmail" class="form-label">User Email</label>
                  <input type="email" class="form-control" id="UserEmail" name="email" onChange={onChangeInput}/>

                </div>

                <button type="submit" class="btn btn-dark mb-2 w-100">Submit</button>

              </form>
          </div>

      </div>
    )
}

export default SignUp