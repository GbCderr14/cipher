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
    const clickHandler=async()=>{
        if(isdisabled===true){
            setIsDisabled(false);
        }
        else{
            setIsDisabled(true);
          const formData=
          {
            "interests":value
          }
          const token=localStorage.getItem('token');
          await fetch("http://localhost:5000/api/v1/auth/updatedetails", {
            method: "PUT",
            body: JSON.stringify(formData),
            headers: {
              "Content-Type": "application/json",
              "authorization":`Bearer ${token}`
            },
          })
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              console.log(data);
            });
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