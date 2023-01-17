import React, {useState} from 'react';
import NewUserForm from './Components/Users/NewUserForm';
import UserList from './Components/Users/UserList'; 

function App() {
  const [usersList, setUsersList] = useState([]);

  const addToUserList = (name, age) => {
    setUsersList(usersList => {
      return [...usersList, {name, age, id: Math.random().toString()}];
    })
  };

  return (
    <div>
      <NewUserForm onAddUser = {addToUserList}/>
      <UserList users={usersList}/>
    </div>
  );
}

export default App;
