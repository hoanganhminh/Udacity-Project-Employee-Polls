import React, { useState } from 'react';

const NewPollForm = ({ onSubmit }) => {
    const [optionOne, setOptionOne] = useState('');
    const [optionTwo, setOptionTwo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(optionOne, optionTwo);
    };

    return (
        <div>
            <h2>Create New Poll</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Option One" value={optionOne} onChange={(e) => setOptionOne(e.target.value)} />
                <input type="text" placeholder="Option Two" value={optionTwo} onChange={(e) => setOptionTwo(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default NewPollForm;
