import React from 'react';
import './User.css'
//import { addFriend } from '../../modules/users';

export default function FriendCard({ friends, handleUnfriend}) {

  return (
    <div>
      <div className="user-view" >
        <div className="card">
          <h5 className="card-content">User: {friends.userId}</h5>
          <h5 className="card-content">Name: {friends.friendId}</h5>
          <h5 className="card-content">About me:{friends.aboutMe}</h5>
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

