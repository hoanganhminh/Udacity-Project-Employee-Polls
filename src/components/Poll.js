import React from 'react';

const Poll = ({ poll, onSelect }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">Would You Rather</h3>
                <p className="card-text">{poll.optionOne.text} or {poll.optionTwo.text}?</p>
                <button onClick={() => onSelect(poll.id)} className="btn btn-primary">View Poll</button>
            </div>
        </div>
    );
}

export default Poll;
