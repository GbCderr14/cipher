import LNavBar from "../components/navbars/left_navbar"
import UpNavBar from "../components/navbars/up_navbar"
import { useState } from "react"
const UserProfile=()=>{
    const [loggedIn,setIsLoggedIn]=useState(false);
    const submitHandler=async(e)=>{
        const formData=
            {
                email:e.target[0].value,
                password:e.target[1].value
            }
        
        e.preventDefault();
        await fetch("http://localhost:5000/api/v1/auth/login", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem('token', data.token);
      });
        setIsLoggedIn(true);
    }
    return(

<>
{loggedIn?
        <div>
            <UpNavBar/>
            <LNavBar/>
        </div>:<div style={{textAlign:"center"}}>
            <form onSubmit={submitHandler} style={{textAlign:"left"}}>
              <h1>Login</h1>
            <label 
            htmlFor="email">Email</label>
            <input type="email" required placeholder="email" style={{width:"300px", marginLeft:"60px"}}/>
            <br/>
            <br/>
            <label
            htmlFor="password">Password</label>
            <input type="password" required placeholder="password" style={{width:"300px", marginLeft:"30px"}}/>
            <br/>
            <button type="submit">Login</button>
            </form>
            </div>}

        </>
    )
}

export default UserProfile