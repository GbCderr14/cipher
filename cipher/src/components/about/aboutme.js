import './aboutme.css';
import { useState,useEffect } from 'react';
const About =(props)=>{
    const [isdisabled,setIsDisabled]=useState(true);
    const [value,setValue]=useState(props.about); 

    useEffect(() => {
        setValue(props.about);
      }, [props.about]);

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
    <div className="about">
        <div className="firstline">
    <h4>About Me</h4>
    <button className="edit" onClick={clickHandler} >{isdisabled?"Edit":"Save"}</button>
    </div>
    <textarea type="text" className="aboutme"  style={{paddingTop:"20px",paddingLeft:"20px"}} value={value} disabled={isdisabled} onChange={valueChangeHandler}/> 
    </div>   
    </>
}

export default About;