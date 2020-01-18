import React from 'react';
import UserTable from "../src/components/Faker/faker";
import './App.css';

import User from "../src/components/Faker/faker2";

const userrs = [];

function userr() {
 
  for (let i = 0; i < 15; i++) {
    userrs[i] = new User();
    userrs[i].makeUserData();
  }
  
}

userr();

function App() {
  return (
    <div className="App">
      <UserTable users={userrs} />
    </div>
  );
}

export default App;
