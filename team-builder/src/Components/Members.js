import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    border: 2px solid pink;
    margin: 1% auto;
    max-width: 48%;
`;

export default function Members(props) {

    return(
        <div className='member-list'>
            {props.members.map(member => (
                <Card className='member' key={member.id}>
                    <p>{member.name}</p>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                </Card>
            ))}
        </div>
    );
}