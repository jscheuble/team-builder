import React, { useState } from 'react';
import './App.css';

import MemberForm from './Components/MemberForm';
import Members from './Components/Members';

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: 'Jana',
      email: 'janascheuble@gmail.com',
      role: 'Web Dev Student'
    },
  ]);
  const [memberToEdit, setMemberToEdit] = useState(
    {
      id: null,
      name: '',
      email: '',
      role: ''
    }
  );

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember]);
  }


  return (
    <div className="App">
      <h1>Team</h1>
      <MemberForm addNewMember={addNewMember} memberToEdit={memberToEdit} setMemberToEdit={setMemberToEdit}/>
      <Members members={members} />
    </div>
  );
}

export default App;
