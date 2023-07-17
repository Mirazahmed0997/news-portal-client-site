import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/authProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Login = () => {




    
  const {signIn,user,logOut,google,setLoading}=useContext(AuthContext)
  const [error,setError]=useState([])
  const [success,setSuccess]=useState(false)
  const navigate=useNavigate();
  const location=useLocation();
  const from=location.state?.from?.pathname || '/'

    const handlSignIn=(event)=>
    {
        event.preventDefault()
        const form=event.target
        const email= form.email.value
        const password = form.password.value
        console.log(password,email)
    
      
        signIn(email,password)
        .then(result=>
          {
            const user= result.user
            setSuccess(true)
            console.log(user)
            form.reset();
            if(user.emailVerified){
              navigate(from,{replace:true})
            }
            else{
              toast.error('Email is not verified')
            }
          })
          .catch(error=>
            {
              setError(error.message)
            })
          .finally(()=>
          {
            setLoading(false)
          })  
      }


    return (
        <form onSubmit={handlSignIn} className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login Now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
    
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label> <br></br>
          <input type="email" placeholder="Email"name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label><br></br>
          <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <small>Don't have an account? <Link to='/registration'>Register</Link></small>
      </div>
          {
            success?<small className='text-primary ms-2'></small>:<small className='text-danger ms-3'>{error}</small>
          }  
      </div>

  </div>
             </form> 
    );
};

export default Login;