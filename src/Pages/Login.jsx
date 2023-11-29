import React from 'react';
import pagepic from '../Images/page.jpg';
import logo from '../Images/logo.jpg';
import { useState } from 'react';
import LockOpenIcon from '@mui/icons-material/LockOpen';

import { Link, useNavigate } from "react-router-dom";

import swal from 'sweetalert2';
function Login(){
  //login field require
     const[username, setUsername]=useState('');
     const[password, setPassword]=useState('');
     const[error, setError]=useState('');

     const navigate = useNavigate();
     const login=()=>{
      if(username==='Ritish' &&  password==='12345'){
        swal.fire({
          title: 'User',
          text: 'Login Successfully',
          icon: 'success',
      });
        navigate(`/Dashbord`);
        
      }else{
        swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please enter email',
         
        })
        
      }

     };
 
   
    return(
           <div className="container">
            <div className='main'>
                <img src={pagepic} className="pageimg"/>
            </div>
            <div className='second'>
                <img src={logo} className="logoimg"/><br/>
                <span className="heding">Login to your dashboard</span>
                <form className="loginform">
                    <label>Email</label>
                    <label><input type="email" placeholder='enter email' className="inputlogin" value={username} onChange={(e) => setUsername(e.target.value)}/></label>
                    <label>Password</label>
                    <label><input type="password" placeholder='enter password' className="inputlogin" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </label><br/>
                    
                    <label><button className="buttonlogin" onClick={login}>Login </button></label><br/>
                    <label ><input className="remeder" type="checkbox"/> Remendar me
                    <LockOpenIcon  style={{marginLeft:'6vw'}}/><Link to="/Forget"  style={{textDecoration:'none'}}>Forget <p style={{marginLeft:'15vw'}}> Password?</p></Link>
                    
                  
                    </label>
                    <label>new User</label><Link to="/Signup"><button>Signup here</button></Link>
                </form><br></br><br></br>
                <span className="copyright">Copyright @ 2023 by Mithilesh kumar yadav.</span>
            </div>
           </div>
    );
}
export default Login;