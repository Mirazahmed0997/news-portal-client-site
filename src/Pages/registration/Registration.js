import React, { useContext, useState } from 'react';
import { Form,Link } from 'react-router-dom';
import { AuthContext } from '../../Context/authProvider/AuthProvider';
import { toast } from 'react-hot-toast';


const Registration = () => {

  const [error,setError]=useState([])
  const {createUser,user,updateUserProfile,varifyEmail}=useContext(AuthContext);
  const [success,setSuccess]=useState(false)

    const handleSubmit=(event)=>
    {
        event.preventDefault();
        const form=event.target
        const name=form.name.value
        const email= form.email.value
        const photoURL=form.photoURL.value
        const password = form.password.value
        const confirm= form.confirm.value
        console.log(email,password,confirm)

        if(password.length<6){
            setError('Password Should be atleast 6 characters')
            return;
      }
      if (password !== confirm)
      {
        setError('Password not match')
        return;
      }
        
        createUser(email,password)
        .then(result=>
            {
                const user= result.user
                console.log(user)
                setSuccess(true)
                form.reset();
                handleupdateUserProfile(name,photoURL)
                handleEmailVarification()
                toast.success('Please varify your email')
                return;

            })
        .catch(error=>
            {
                console.error(error)
                setError(error.message)

            })  
          }
            
            const handleupdateUserProfile=(name,photoURL)=>
            {
              const profile={
                displayName:name,
                photoURL:photoURL
              }
             updateUserProfile(profile)
             .then(()=>
             {

             }) 
             .catch(error=>
              {
                console.error(error)
              })
            }

            const handleEmailVarification=()=>
            {
              varifyEmail()
              .then(()=>{})
              .catch(e=>
                {
                  console.error(e)
                })
            }
          
            
          

    return (
        <form onSubmit={handleSubmit} className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Registration!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label><br></br>
                <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">phptoURL</span>
                </label><br></br>
                <input type="photoURL" name='photoURL' placeholder="URL" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label><br></br>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label><br></br>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm password</span>
                </label><br></br>
                <input type="password" placeholder="Confirm password" name='confirm' className="input input-bordered" required /><br></br>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
     
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <small>Already have an account? <Link to='/login'>Login</Link></small><br></br>
                {
                  success?<small className='text-primary'>User successfully created</small>:
                  <small className='text-danger'>{error}</small> 
                }
            </div>
          </div>
        </div>
          
           </form> 
    );
};

export default Registration;