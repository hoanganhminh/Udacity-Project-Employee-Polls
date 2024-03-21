import React from 'react';
import PollList from '../components/PollList';

const HomePage = ({ polls, onSelect }) => {
    return (
        <div>
            <h1 className="display-4">Home</h1>
            <PollList polls={polls} onSelect={onSelect} />
        </div>
    );
}

export default HomePage;
