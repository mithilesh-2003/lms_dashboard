import React from "react";
import correct from '../Images/correct.jpg';
function Thank(){
    return(
         <div style={{textAlign:'center',marginTop:'15vh'}}><br/>
            <img src={correct} style={{height:'35vh',width:'20vw'}}/><br/><br/>
            <h1>Thank You!</h1>
            <p>Your submission has been submitted.</p>
         </div>
    )
}
export default Thank;