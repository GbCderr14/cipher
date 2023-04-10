import './onweb.css';
import { useState,useEffect } from 'react';
const OnWeb =(props)=>{
  const [isdisabled,setIsDisabled]=useState(true);
  const [value1,setValue1]=useState(props.linkedin); 
  const [value2,setValue2]=useState(props.github);
  const [value3,setValue3]=useState(props.facebook);
  const [value4,setValue4]=useState(props.twitter);
  const [value5,setValue5]=useState(props.instagram);
  const [value6,setValue6]=useState(props.website);

    useEffect(() => {
        setValue1(props.linkedin);
        setValue2(props.github);
        setValue3(props.facebook);
        setValue4(props.twitter);
        setValue5(props.instagram);
        setValue6(props.website);
      }, [props.linkedin,
        props.github,
        props.facebook,
        props.twitter,
        props.instagram,
        props.website]);

        const valueChangeHandler = (e) => {
          const newValue = e.target.value;
          const inputName = e.target.name;
          
          if (inputName === "input1") {
            setValue1(newValue);
          } else if (inputName === "input2") {
            setValue2(newValue);
          } else if (inputName === "input3") {
            setValue3(newValue);
          } else if (inputName === "input4") {
            setValue4(newValue);
          } else if (inputName === "input5") {
            setValue5(newValue);
          } else if (inputName === "input6") {
            setValue6(newValue);
          }
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
    <div className="onweb">
        <div className="firstline">
    <h4>On The Web</h4>
    <button className="edit" onClick={clickHandler} >{isdisabled?"Edit":"Save"}</button>
    </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 ">
            <h6>Linkedin</h6>
           <div className="input"> <i class='bx bxl-linkedin-square'></i><input name="input1" type="text" className="web" value={value1} disabled={isdisabled} onChange={valueChangeHandler}/></div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 ">
        <h6>Github</h6>
        <div className="input"><i class='bx bxl-github' ></i><input name="input2"  type="text" className="web" value={value2} disabled={isdisabled} onChange={valueChangeHandler}/></div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 ">
            <h6>Facebook</h6>
            <div className="input"> <i class='bx bxl-facebook-circle' ></i><input name="input3"  type="text" className="web" value={value3} disabled={isdisabled} onChange={valueChangeHandler}/></div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 ">
        <h6>Twitter</h6>
        <div className="input"><i class='bx bxl-twitter' ></i><input name="input4"  type="text" className="web" value={value4} disabled={isdisabled} onChange={valueChangeHandler}/></div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 ">
            <h6>Instagram</h6>
            <div className="input"><i class='bx bxl-instagram-alt' ></i><input name="input5"  type="text" className="web" value={value5} disabled={isdisabled} onChange={valueChangeHandler}/></div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 ">
        <h6>Website</h6>
        <div className="input"><i class='bx bxl-google-cloud' ></i><input name="input6"  type="text" className="web" value={value6} disabled={isdisabled} onChange={valueChangeHandler}/></div>
        </div>
      </div>
    </div>   
    
    </>
}

export default OnWeb;