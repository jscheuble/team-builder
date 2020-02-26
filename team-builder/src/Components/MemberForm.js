import React, { useState } from 'react';

export default function MemberForm(props) {
    const [member, setMember] = useState({
        name: '',
        email: '',
        role: ''
    });

    const handleChange = e => {
        setMember({...member, [e.target.name]: e.target.value});
        console.log(member)
    }

    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(member);
        setMember({name: '', email: '', role: ''})
    }

    return(
        <form onSubmit={submitForm}>
            <label>Name: 
                <input type='text' name='name' onChange={handleChange} value={member.name}></input>
            </label>
            <label>Email:
                <input type='email' name='email' onChange={handleChange} value={member.email}></input>
            </label>
            <label>Role:
                <input type='text' name='role' onChange={handleChange} value={member.role}></input>
            </label>
            <button type='submit'>Add member!</button>
        </form>
    );
}