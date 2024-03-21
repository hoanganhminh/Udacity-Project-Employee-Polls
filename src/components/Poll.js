import React from 'react';

const Poll = ({ poll, onSelect }) => {
    return (
        <div>
            <h3>Would You Rather</h3>
            <p>{poll.optionOne.text} or {poll.optionTwo.text}?</p>
            <button onClick={() => onSelect(poll.id)}>View Poll</button>
        </div>
    );
}

export default Poll;
