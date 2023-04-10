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
        </div>:<div>
            <form onSubmit={submitHandler}>
            <input type="email" required placeholder="email"/>
            <input type="password" required placeholder="password"/>
            <button type="submit">Login</button>
            </form>
            </div>}

        </>
    )
}

export default UserProfile