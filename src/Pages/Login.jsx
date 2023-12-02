import React from 'react';
import pagepic from '../Images/page.jpg';
import logo from '../Images/logo.jpg';
import { useState } from 'react';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import axios from 'axios'


import { Link ,useNavigate} from "react-router-dom"; 

import Swal from 'sweetalert2'

const Login=()=>{
  //login field require
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const Navigate=useNavigate();
  const Change = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // call api
   
  const Submit = async(e) => {
    e.preventDefault();
    try{
        // api call
        const response =await axios.post('http://localhost:3001/login',formData);
        if(response && response.data){
            console.log(response.data);
            Swal.fire({
                icon:'success',
                title:'Login scuuessfully'
            })
            Navigate(`/Dashbord`)
        }
        else{
            console.error('invalid response data',response);
        }
    }catch(error){
        console.error('error during signup ',error);
        if(error.response && error.response.data){
            console.error('error details:',error.response.data);
        }else{
            console.error('unspected error')
        }
    }
  };
 
   
    return(
           <div className="container">
            <div className='main'>
                <img src={pagepic} className="pageimg" alt=""/>
            </div>
            <div className='second'>
                <img src={logo} className="logoimg" alt=""/><br/>
                <span className="heding">Login to your dashboard</span>
                <form className="loginform" onSubmit={Submit}>
                    <label>Email</label>
                    <label><input type="email" placeholder='enter email' className="inputlogin" name='email' value={formData.email} onChange={Change}/></label>
                    <label>Password</label>
                    <label><input type="password" placeholder='enter password' className="inputlogin" name='password' value={formData.password} onChange={Change}/>
                    </label><br/>
                    
                    <label><button className="buttonlogin" type='Submit' onClick={Submit}>Login </button></label><br/>
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