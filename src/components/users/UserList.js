import React, { useState, useEffect } from 'react';
import { deleteFriend, getAllFriends, getAllUsers } from '../../modules/users';
import FriendCard from './FriendCard';
import UserCard from './UserCard';


export const UserList = ( ) => {
  // The initial state is an empty array
  const [users, setUsers] = useState([]);
  const [friends, setFriends] = useState([]);
 const sessionUserId  = JSON.parse(window.sessionStorage.getItem("nutshell_user"))
 const UserId = sessionUserId.id
console.log('test', UserId)
  const getUsers = () => {
    // After the data comes back from the API, we
    return getAllUsers().then(usersFromAPI => {
      setUsers(usersFromAPI)
    });
  };
  const getFriends = () => {
    // After the data comes back from the API, we
    return getAllFriends(UserId).then(usersFromAPI => {
        setFriends(usersFromAPI)
    });
  };

  const handleUnfriend = id => {
    deleteFriend(id)
    .then(() => getFriends());
  };

  useEffect(() => {
    getUsers();
    getFriends();
  }, []);
  
  // Finally we use .map() to "loop over" the animals array to show a list of animal cards
  return (
      <>
    <div className="container-cards">
        <h3>Members</h3>
      {users.map(user => <UserCard key={user.id} user={user}  />)}
    </div>
    <div className="container-cards">
        <h3>Friends</h3>
      {friends.map(friend => <FriendCard key={friend.id} friends={friend} handleUnfriend={handleUnfriend} />)}
    </div>
    </>
  );

};
