import './password.css';
import { useState,useEffect } from 'react';
const passsword=()=>{

    // eslint-disable-next-line react-hooks/rules-of-hooks
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isdisabled,setIsDisabled]=useState(true);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value1,setValue1]=useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value2,setValue2]=useState('');
    const valueChangeHandler=(e)=>{
        const newValue=e.target.value;
        const inputName=e.target.name;
        if(inputName==="input1"){
            setValue1(newValue);
        }
        else if(inputName==="input2"){
            setValue2(newValue);
        }
    }

    const clickHandler=async()=>{


        if(isdisabled===true){

            setIsDisabled(false);
        }
        else{
            setIsDisabled(true);
          const formData=
          {
            "currentPassword":value1,
            "newPassword":value2
          }
          const token=localStorage.getItem('token');
          await fetch("http://localhost:5000/api/v1/auth/updatepassword", {
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
            //   console.log(data);
            });
    }

            // setIsDisabled(true);
        }
    return <>
    <div className="onweb">
        <div className="firstline">
    <h4>Password and Security</h4>
    <button className="edit" onClick={clickHandler} >{isdisabled?"Edit":"Save"}</button>
    </div>
      <div className="row">
        <div className="col-lg-12">
            {isdisabled?<><h6>Password</h6><input type="password" className="webb" placeholder="********************"/></>
            :<><h6>Current Password</h6><input type="password" name="input1" value={value1} className="webb" placeholder="********************" onChange={valueChangeHandler}/><h6>New Password</h6><input type="password" name="input2" onChange={valueChangeHandler} value={value2} className="webb" placeholder="********************"/></>
}
        </div>
      </div>
    </div>   
    </>
}

export default passsword;