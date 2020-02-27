import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    margin: 1%;

    &:hover {
        background: pink;
    }
`;

const Button = styled.button`
    max-width: 200px;
    margin: 0 auto;
    background: pink;

    &:hover {
        background: black;
        color: white;
    }
`;


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

    useEffect(() => {
        setMember(props.memberToEdit);
    }, [props.memberToEdit])

    return(
        <Form onSubmit={submitForm}>
            <label>Name: 
                <Input type='text' name='name' onChange={handleChange} value={member.name}></Input>
            </label>
            <label>Email:
                <Input type='email' name='email' onChange={handleChange} value={member.email}></Input>
            </label>
            <label>Role:
                <Input type='text' name='role' onChange={handleChange} value={member.role}></Input>
            </label>
            <Button type='submit'>Add member!</Button>
        </Form>
    );
}