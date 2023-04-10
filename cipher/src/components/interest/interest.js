import './interest.css';
import { useState,useEffect } from 'react';
const Interest =(props)=>{
    const [isdisabled,setIsDisabled]=useState(true);
    const [value,setValue]=useState(props.interests);
    useEffect(() => {
        setValue(props.interests);
      }, [props.interests]); 
    const valueChangeHandler=(e)=>{
        setValue(e.target.value);
    }
    const clickHandler=()=>{
        if(isdisabled===true){
            setIsDisabled(false);
        }
        else{
            setIsDisabled(true);
        }
    }
   
    return <>
    <div className="interest">
        <div className="firstline">
    <h4>Interest</h4>
    <button className="edit"onClick={clickHandler} >{isdisabled?"Edit":"Save"}</button>
    </div>
    <input type="text" className="webb" value={value} onChange={valueChangeHandler} disabled={isdisabled}/>
    </div>   
    </>
}

export default Interest;