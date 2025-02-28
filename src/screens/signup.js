import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  const [credentials,setcredentials]=useState({name:"",Email:"",password:"",geolocation:""})
 const handleSubmit= async(e)=>{
    e.preventDefault() ;
    const response=await fetch("http://localhost:5000/api/createuser",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation})

    }) 
    const json=await response.json()
    console.log(json)    
    if (!json.success) {
      alert("Enter valid credentials");
    }
    if(json.success){
      alert("Account is Created Successfully")
    }
 }
  const onChange=(event)=>{
  setcredentials({...credentials,[event.target.name]:event.target.value})   
  

  } 


  return (
    <div className='c1'>
    <div className='container container1 w-50'>
    <div className='header'>
          <div className='text'>SignUp</div>
          <div className='underline'></div>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control w-100% bg-white text-dark"name='name' value={credentials.name} onChange={onChange} />
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control"name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text w-100% bg-white text-dark">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control w-100% bg-white text-dark" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1"/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
    <input type="text" className="form-control w-100% bg-white text-dark" name='geolocation' value={credentials.geolocation} onChange={onChange} id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" className=" m-3 btn btn-primary">Submit</button>
  <Link to="/login " className='m-3 btn btn-danger'>Already a user</Link>
</form>
     </div>
    </div>
  )
}
