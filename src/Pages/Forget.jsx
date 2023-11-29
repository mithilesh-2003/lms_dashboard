import React from 'react';
import { Link } from 'react-router-dom';
import pagepic from '../Images/page.jpg';
import logo from '../Images/logo.jpg';

function Forget(){

 
   
    return(
           <div className="container">
            <div className='main'>
                <img src={pagepic} className="pageimg"/>
            </div>
            <div className='second'>
                <img src={logo} className="logoimg"/><br/>
                <span className="heding">Login to your dashboard</span>
                <form className="loginform">
                    <label>Email</label><br></br>
                    <label><input type="email" placeholder='enter email' className="inputlogin" /></label>
                    <Link to="/Thank">
                   <button className="buttonlogin1">Request</button></Link><br/><br/>
                   <Link style={{marginLeft:'50px'}} to="/Login">back to login</Link>
                </form><br></br><br></br>
                <span className="copyright">Copyright @ 2023 by Ritish Tripathi.</span>
            </div>
           </div>
    );
}
export default Forget;