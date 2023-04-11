/* eslint-disable react-hooks/rules-of-hooks */
import gaurang from './gaurang.png';
import background from './background.png';
import { useState,useEffect } from 'react';
import './banner.css';

import Modal from './modal';
import Back from './backdrop';
const banner=()=>{
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [noOfFollowers,setNoOfFollower]=useState(0);
    const [profilePhoto,setProfilePhoto]=useState('');
    const[modalIsOpen,setModalIsOpen]=useState(false);
  function pencilHandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler(){
    setModalIsOpen(false);
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
            setNoOfFollower(data.data.noOfFollowers);
            setProfilePhoto(data.data.profilePhoto);    
            // setProfilePhoto(`'https://res.cloudinary.com/stealthman22/image/upload/v1586308024/new-portfolio/hero/time-lapse-photography-of-waterfalls-during-sunset-210186.jpg',
            // `);
        }
        )
    }

    useEffect(()=>{
        fetching_detail();

    },[]);
    let imgs = [
    `uploads/${profilePhoto}`];
    return <>
    {/* <div className='wrap'> */}
    {modalIsOpen ? <Modal onCancel={closeModalHandler}/>:null}
      {modalIsOpen ? <Back onClick={closeModalHandler}/>:null}
    <div style={{display:"flex" ,justifyContent:"space-between"}} className='banner'>
        <img src={background} className='backimage' alt="ny"/> 
        
        <div style={{display:"flex" }} className='profile'>
        <span  className="image">
            <img src={imgs[0]} alt="profile" style={{borderRadius:"50%"}} className='photo'/><i class='bx bxs-edit-alt' onClick={pencilHandler}></i>
        </span>
        <span className='detail'>
            <p>Hello,<br/>
            <span className='name'>{name}</span><br/>{email}</p>
        </span>
        </div>
        <div className='follow'>
            <p>{noOfFollowers} Folllowers</p>
        </div>
    </div>
    {/* </div> */}
    
    </>
}

export default banner;