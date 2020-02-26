import React from 'react';

export default function Members(props) {

    return(
        <div className='member-list'>
            {props.members.map(member => (
                <div className='member' key={member.id}>
                    <p>{member.name}</p>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                </div>
            ))}
        </div>
    );
}