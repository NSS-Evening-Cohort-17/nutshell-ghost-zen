import React, { useState, useEffect } from 'react';
import { getFriendById } from '../modules/FriendManager';
import './User.css'

export default function FriendCard({ friends, handleUnfriend}) {
  const [userObj, setUserObj] = useState({ id: "", name: "", email: "" , aboutMe:"" })
  // const friend = () => {
  //   // After the data comes back from the API, we
  //   return getFriendById(friends.friendId).then(usersFromAPI => {
  //     setUserObj(usersFromAPI)
  //   });
  // };

  useEffect(() => {
    getFriendById(friends.memberId).then(usersFromAPI => {
      setUserObj(usersFromAPI)
    });
  }, [friends.memberId]);

  return (
    <div>
      <div className="user-view" >
        <div className="card">
          <h5 className="card-content">User: {userObj.name}</h5>
          <h5 className="card-content">About Me: {userObj.aboutMe}</h5>
          <h5 className="card-content">friends.id: {friends.id}</h5>
          <h5 className="card-content">friends.memberId: {friends.memberId}</h5>
          <h5 className="card-content">friends.userId: {friends.userId}</h5>
          <div>
            
              <button 
                onClick={() => handleUnfriend(friends.id)}
                className="btn btn-danger"
                type="button"
              >
              Unfriend
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}

