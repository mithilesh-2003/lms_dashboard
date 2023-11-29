import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import HomeIcon from '@mui/icons-material/Home';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
function Dashbord(){
    return(
    <div>
             <Header/>
              <Sidebar/>
               <div className='main-container'>
           <h4>Dashbord</h4>

           {/*card of dashbord */}

           <div className='card-of-dashbord'>
           <div className='card-dashbord'>
           <span className="icon-dashbord">
          <PermIdentityIcon style={{fontSize:'6vh'}}/></span>
          <span className='card-text-dashbord'>9<br/>Empolyee</span>
         </div>

          {/*card of dashbord */}

         <div className='card-dashbord'>
           <span className="icon-dashbord">
          <HomeIcon style={{fontSize:'6vh'}}/></span>
          <span className='card-text-dashbord'>1<br/>Departments</span>
         </div>

           {/*card of dashbord */}

           <div className='card-dashbord'>
           <span className="icon-dashbord">
          <EditCalendarIcon style={{fontSize:'6vh'}}/></span>
          <span className='card-text-dashbord'>20<br/>Leaves</span>
         </div>

           {/*card of dashbord */}

           <div className='card-dashbord'>
           <span className="icon-dashbord">
          <PersonRemoveIcon style={{fontSize:'6vh'}}/></span>
          <span className='card-text-dashbord'>0<br/>On leave today</span>
         </div>
         </div>



         {/*admin static models */}

          <div style={{display:'flex'}}>
           <div className='models-dashbord'>
            <div style={{display:'flex',marginLeft:'2vw'}}>
             <h5 style={{marginRight:'25vw'}}>Admin Statistics</h5>
             <button className='card-button'>Today</button>
             <button className='card-button'>This week</button>
             <button className='card-button'>This year</button>
             </div><hr style={{color:'grey'}}/>

              {/*admin static card */}
              <div style={{display:'flex'}}>
              <div className='card-dashbord1'>
           <span className="icon-dashbord1">
          <PersonRemoveIcon style={{fontSize:'6vh'}}/></span>
          <span className='card-text-dashbord1'><h5>REPLACEMENT</h5>Employee On Leave<br/>Employee On Request</span>
          <span style={{marginLeft:'5vw',marginTop:'5vh'}}><h5>0</h5><h5>0</h5></span>
         </div>
            {/*admin static card */}
         <div className='card-dashbord1'>
           <span className="icon-dashbord1">
          <PersonRemoveIcon style={{fontSize:'6vh'}}/></span>
          <span className='card-text-dashbord1'><h5>ANNUAL_LEAVE</h5>Employee On Leave <br/>Employee On Requests</span>
          <span style={{marginLeft:'5vw',marginTop:'5vh'}}><h5>0</h5><h5>0</h5></span>
         </div></div>
        
         
       {/*admin static card */}
       <div style={{display:'flex'}}>
         <div className='card-dashbord1'>
           <span className="icon-dashbord1">
          <PersonRemoveIcon style={{fontSize:'6vh'}}/></span>
          <span className='card-text-dashbord1'><h5>SICK_LEAVE</h5> Employee On Leave <br/>Employee On Requests</span>
          <span style={{marginLeft:'5vw',marginTop:'5vh'}}><h5>0</h5><h5>0</h5></span>
         </div>
          {/*admin static card */}
          <div className='card-dashbord1'>
           <span className="icon-dashbord1">
          <PersonRemoveIcon style={{fontSize:'6vh'}}/></span>
          <span className='card-text-dashbord1'><h5>EMERGENCY_LEAVE</h5>Employee On Leave<br/>Employee On Requests</span>
          <span style={{marginLeft:'4vw',marginTop:'5vh'}}><h5>0</h5><h5>0</h5></span>
         </div>
         </div>
           </div>  

           {/*  deshbord people on week of card */}     
           <div className='card-of-last'>
             <h5 style={{margin:'3vh 3vw'}}>People On Weekoff</h5><hr style={{color:'grey'}}/>
             <button className='btn-dashbord'>Full<br/> Name</button>
             <button className='btn-dashbord'>From<br/> Date</button>
             <button className='btn-dashbord'>To<br/> Date</button>
             <hr style={{color:'grey'}}/>
           </div>
           </div>
        </div>
    </div>
    );
}
export default Dashbord;