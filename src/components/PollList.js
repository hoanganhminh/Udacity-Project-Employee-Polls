import React from 'react';
import Poll from './Poll';

const PollList = ({ polls, onSelect }) => {
    if (!polls || !Array.isArray(polls) || polls.length === 0) {
        return <div>No polls available</div>;
    }

    return (
        <div>
            <h2>Polls</h2>
            {polls.map(poll => (
                <Poll key={poll.id} poll={poll} onSelect={onSelect} />
            ))}
        </div>
    );
}

export default PollList;
