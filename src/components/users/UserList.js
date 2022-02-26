import React, { useState, useEffect } from 'react';
import { addFriend, deleteFriend, getAllFriends, getAllUsers } from '../modules/FriendManager';
import FriendCard from './FriendCard';
import UserCard from './UserCard';


export const UserList = ( ) => {
  // The initial state is an empty array
  const [users, setUsers] = useState([]);
  const [friends, setFriends] = useState([]);
  const [members, setMembers] = useState([]);
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
        setFriends(usersFromAPI)     });
            
  };
  // const getMembers = () => {
  //   const memberArray = []
  //   // After the data comes back from the API, we
  //   for (let i = 0; i < friends.length; i++) {
  //     const userindex =  users.find(user => user.id === friends[i].userId)
  //     //let messagObj = {'message':userMessages[i].message}
  //     let memberObj = {'message':userMessages[i].message, 'fullName':username.fullName}
  //     memberArray .push(messagObj)
  // }
  //   members = friends.map((friend) => users.filter(users.id!=friend.friendId)).join("") 
  // };

  const handleUnfriend = id => {
    console.log('delete id',id)
    deleteFriend(id)
    .then(() => getFriends())
  };
 
 const handleFriend = id => {
    const newFriend = {
      memberId: id,
      userId: UserId
    }
    addFriend(newFriend)
    .then(() => getFriends());
  };

  useEffect(() => {
    getFriends();
    getUsers();  
   
  }, []);
  
  // Finally we use .map() to "loop over" the animals array to show a list of animal cards
  return (
      <>
    <div className="container-cards">
        <h3>Members</h3>
      {users.map(user => <UserCard key={user.id} user={user} handleFriend={handleFriend} />)}
    </div>
    <div className="container-cards">
        <h3>Friends</h3>
      {friends.map(friend => <FriendCard key={friend.id} friends={friend} handleUnfriend={handleUnfriend} />)}
    </div>
    </>
  );

};
