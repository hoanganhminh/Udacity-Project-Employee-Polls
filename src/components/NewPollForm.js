import React, { useState } from 'react';

const NewPollForm = ({ onSubmit }) => {
    const [optionOne, setOptionOne] = useState('');
    const [optionTwo, setOptionTwo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(optionOne, optionTwo);
    };

    return (
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">Create New Poll</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Option One" value={optionOne} onChange={(e) => setOptionOne(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Option Two" value={optionTwo} onChange={(e) => setOptionTwo(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default NewPollForm;
