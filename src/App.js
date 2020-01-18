import React from 'react';
import UserTable from "../src/components/Faker/user.jsx";
import PatientTable from "../src/components/Faker/patients.jsx";
import './App.css';

import User from "../src/components/Faker/user.js";

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
      <PatientTable />
    </div>
  );
}

export default App;
