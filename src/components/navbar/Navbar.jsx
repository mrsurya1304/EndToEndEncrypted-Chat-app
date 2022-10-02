import React from 'react'
import { useHistory } from 'react-router-dom';
import "./navbar.css";

export default function Navbar({ user, setUser}) {

let history = useHistory();

const logout = () => {  //Method to log out
  localStorage.setItem("user",null);  //Removing user from localstorage
  setUser(null);  //Setting user back to null
  history.push("/"); //Going back to login screen
}

  return (  //Navigation bar with a welcome message if logged in and log out button. If not logged in we ask user to log in
    
    
    <div className= {user ? "userset":"usernotset"}>
        {user ? (
        <div className='navbar-user'>
          <p>{user.email}</p><br /><br />
          <button className='logout' onClick={logout}>Log out</button>
        </div>
         ) : (
        <div className='navbar-content'>
          <p>Login to use chat</p>
        </div>
         )}
         <p className='appname'>SecureChat</p>
         <p></p>
    </div>
    
 )
}
