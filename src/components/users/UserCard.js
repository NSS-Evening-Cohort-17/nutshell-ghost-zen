import React from 'react';
import './User.css'

export default function UserCard({ user, handleFriend}) {
  

  return (
    <div>
      <div className="user-view" >
        <div className="card">
          <h5 className="card-content">Member: {user.name}</h5>
          <h5 className="card-content">Email: {user.email}</h5>
          <h5 className="card-content">About me:{user.aboutMe}</h5>
          <div>
          <button 
                onClick={() => handleFriend(user.id)}
                className="btn btn-danger"
                type="button"
              >
              Friend
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}