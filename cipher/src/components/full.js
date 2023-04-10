import { useEffect,useState } from 'react'
import React from 'react'
import About from './about/aboutme'
import Cipher from './ciphermap/cipher'
import OnWeb from './onweb/onweb'
import Professional from './professional/professional'
import Password from './password/password'
import Interests from './interest/interest'

const Full=()=>{
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [noOfFollowers,setNoOfFollower]=useState(0);
    const [about,setAbout]=useState('');
    const [linkedinHandle,setLinkedinHandle]=useState('');
    const [githubHandle,setGithubHandle]=useState('');
    const [facebookProfile,setFacebookProfile]=useState('');
    const [twitter,setTwitter]=useState('');
    const [instagram,setInstagram]=useState('');
    const [website,setWebsite]=useState('');
    const [highestEducation,setHighestEducation]=useState('');
    const [currentPosition,setCurrentPosition]=useState('');
    const [interests,setInterests]=useState('');
    const [profilePhoto,setProfilePhoto]=useState('');



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
            setAbout(data.data.about);
            setLinkedinHandle(data.data.linkedinHandle);
            setGithubHandle(data.data.githubHandle);
            setFacebookProfile(data.data.facebookProfile);
            setTwitter(data.data.twitter);
            setInstagram(data.data.instagram);
            setWebsite(data.data.website);
            setHighestEducation(data.data.highestEducation);
            setCurrentPosition(data.data.currentPosition);
            setInterests(data.data.interests);
            setProfilePhoto(data.data.profilePhoto);    

        }
        )
    }

    useEffect(()=>{
        fetching_detail();

    },[]);
    return(
        <div>
            <About about={about}/>
    <Cipher />
    <OnWeb
    linkedin={linkedinHandle}
    github={githubHandle}
    facebook={facebookProfile}
    twitter={twitter}
    instagram={instagram}
    website={website}
    
    />
    <Professional
    education={highestEducation}
    position={currentPosition}
    />
    <Password/>
    <Interests
    interests={interests}
    />
        </div>
    )
}

export default Full