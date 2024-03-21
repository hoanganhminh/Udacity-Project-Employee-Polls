import React, { useState } from 'react';
import PollDetails from '../components/PollDetails';

const PollPage = ({ poll, user, onVote }) => {
    const [userVote, setUserVote] = useState(null);

    const handleVote = (selectedOption) => {
        onVote(selectedOption);
        setUserVote(selectedOption);
    };

    return (
        <div>
            <h1>Poll</h1>
            {poll && (
                <PollDetails
                    poll={poll}
                    user={user}
                    userVote={userVote}
                    onVote={handleVote}
                />
            )}
        </div>
    );
}

export default PollPage;
