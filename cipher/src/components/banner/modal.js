// import gaurang from './../../../public/uploads/photo_6434225cde47edebbab8ca46.png';
import { useState,useEffect } from 'react';
// import gaurang from './../../../../backend/public/uploads/'
function Modal(props){
    
    const[value1,setName]=useState('');
    const[value2,setEmail]=useState('');
    const[value3,setMobile]=useState('');
    const[value4,setPhoto]=useState('');
     
const pencilHandler=async(e)=> {

        e.preventDefault();
        const userFile=document.getElementById('photo').files[0];
           console.log(userFile)
        const formData = new FormData();
        formData.append('file', userFile);
        console.log(formData);
        const token=localStorage.getItem('token');
          await fetch("http://localhost:5000/api/v1/auth/uploadphoto", {
            method: "PUT",
            body:formData,
            headers: {
              "authorization":`Bearer ${token}`,
              "headers":"multipart/form-data"
            },
          })
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              console.log(data);
            });
      }

    const fetching_detail=()=>{
        let token=localStorage.getItem('token');
        fetch('http://localhost:5000/api/v1/auth/me', {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "authorization":`Bearer ${token}`
            },
          })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setName(data.data.name);
            setEmail(data.data.email);
            setMobile(data.data.mobilenumber)  ;
            setPhoto(data.data.profilePhoto);
        }
        )
    }
    useEffect(()=>{
        fetching_detail();
    },[]);
    const valueChangeHandler=(e)=>{
        if(e.target.name==="name"){
            setName(e.target.value);
        }
        if(e.target.name==="email"){
            setEmail(e.target.value);
        }
        if(e.target.name==="mobilenumber"){
            setMobile(e.target.value);
        }
        if(e.target.name==="profilePhoto"){
            setPhoto(e.target.files[0]);
        }
    }

    const clickHandler=async()=>{
          const formData=
          {
            "name":value1,
            "email":value2,
            "mobilenumber":value3,
            "profilePhoto":value4
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
              props.onCancel();
            });
        }
        let imgs = [
            `uploads/${value4}`];
    return (
        <div className="modall row">
            <div className="col-lg-4 col-md-4 col-sm-4" style={{display:"flex" ,justifyContent:"space-around",flexDirection:"column"}}>
                <img src={imgs[0] } alt="me" style={{width:"90%"}}/>
                <form style={{marginTop:"0px"}} onSubmit={pencilHandler}>
        <label htmlFor="photo"><i class='bx bxs-edit-alt' pencil></i></label>
        <input type="file" id="photo" accept="png" onChange  ={valueChangeHandler} name="profilePhoto" style={{display:"none",zIndex:"0"}} />
        <button type="submit" style={{width:"80%",backgroundColor:"black",marginTop:"0px"}}>Change</button>
      </form>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8">
                <div style={{textAlign:"left",paddingTop:"30px",fontWeight:"bold"}}>
                    <div className="form-group" >
                        <label for="name">Name</label>
                        <input type="text" className="form-control" name="name" value={value1}  onChange={valueChangeHandler}/>
                    </div>
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email" className="form-control" name="email" value={value2} onChange={valueChangeHandler}/>
                    </div>
                    <div className="form-group">
                        <label for="mobilenumber">Mobile Number</label>
                        <input type="number" className="form-control" name="mobilenumber" value={value3} onChange={valueChangeHandler}/>
                    </div>

                   <button onClick={props.onCancel}style={{backgroundColor:"black",width:"80px",marginTop:"30px"}}>Cancel</button>
                   <button onClick={clickHandler} style={{backgroundColor:"red",width:"80px",marginTop:"30px"}}>Confirm</button>
                </div>
            </div>
        
        </div>
    ) ;
} 
export default Modal;