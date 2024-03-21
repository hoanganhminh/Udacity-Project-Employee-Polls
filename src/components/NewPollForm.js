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
            <h2 className="display-4">Create New Poll</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input type="text" placeholder="Option One" value={optionOne} onChange={(e) => setOptionOne(e.target.value)} className="form-control" />
                </div>
                <div className="mb-3">
                    <input type="text" placeholder="Option Two" value={optionTwo} onChange={(e) => setOptionTwo(e.target.value)} className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default NewPollForm;
