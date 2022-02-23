import React, { useState } from 'react';
import './User.css'
//import { addFriend } from '../../modules/users';

export default function UserCard({ user}) {
  const [checked, setChecked] = useState(false);
 

  const handleChange = () => {
    setChecked(!checked);
    // const usercard = {
    //   id: user.id,
    //   email: user.email,
    //   name: user.name,
    //   aboutMe: user.aboutMe
    // };
    
  };

 

  return (
    <div>
      <div className="user-view" >
        <div className="card">
          <h5 className="card-content">Member: {user.name}</h5>
          <h5 className="card-content">Email: {user.email}</h5>
          <h5 className="card-content">About me:{user.aboutMe}</h5>
          <div>
            <label>
              <input
                type="checkbox"
                onChange={handleChange}
              />
              Favorite
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

