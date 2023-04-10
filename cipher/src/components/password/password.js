import './password.css';
import { useState } from 'react';
const passsword=()=>{

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isdisabled,setIsDisabled]=useState(true);
    const clickHandler=()=>{


        if(isdisabled===true){

            setIsDisabled(false);
        }
        else{

            setIsDisabled(true);
        }
    }

    return <>
    <div className="onweb">
        <div className="firstline">
    <h4>Password and Security</h4>
    <button className="edit" onClick={clickHandler} >{isdisabled?"Edit":"Save"}</button>
    </div>
      <div className="row">
        <div className="col-lg-12">
            <h6>Password</h6>
            <input type="password" className="webb" placeholder="********************" disabled={isdisabled}/>
        </div>
      </div>
    </div>   
    </>
}

export default passsword;