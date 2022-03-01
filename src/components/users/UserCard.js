import React, { useState } from 'react';

export default function UserCard({ user, handleFriend, friendObj, handleUnfriend}) {
  
  const handleFriendShip  = () => {
    if (friendObj) {
      console.log('friendObj.id',friendObj.id)
      handleUnfriend(friendObj.id);     
  } else { handleFriend (user.id)}
  };

  return (
    <div>
      <div className="user-view" >
        <div className="card">
          <h5 className="card-content">Member: {user.name}</h5>
          <h5 className="card-content">Email: {user.email}</h5>
          <h5 className="card-content">About me:{user.aboutMe}</h5>
          <h5 className="card-content">isFriend:{friendObj ? 'Yes' : 'No'}</h5>
          <div>
          <button 
                onClick={() => handleFriendShip()}
                className="btn btn-danger"
                type="button"
              >
              {friendObj ? 'Unfriend' : 'Friend'}
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}