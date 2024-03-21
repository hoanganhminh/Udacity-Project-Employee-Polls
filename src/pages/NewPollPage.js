import React from 'react';
import NewPollForm from '../components/NewPollForm';

const NewPollPage = ({ onSubmit }) => {
    return (
        <div>
            <h1 className="display-4">New Poll</h1>
            <NewPollForm onSubmit={onSubmit} />
        </div>
    );
}

export default NewPollPage;
