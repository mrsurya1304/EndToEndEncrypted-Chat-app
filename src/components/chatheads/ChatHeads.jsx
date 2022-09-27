import React from 'react'
import "./chatheads.css";

export default function ChatHeads({items, setreceiver}) {
  
  return (  //Rendering all the available users from firebase with a profile picture and their username Clicking the username sets them as the receiver
    <div>
        <p>Users</p>
        {items.map((obj, i) => (
            <div key={i} className ="chat-head-item" onClick={() => setreceiver(obj)}>
                <div className='user-profile-pic'>
                    <p className='user-profile-pic-text'>{obj.email[0]}</p>
                </div>
                <p className='username' title={obj.email}>{obj.email}</p>
            </div>
        ))}
    </div>
  );
}
