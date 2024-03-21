import React from 'react';
import Leaderboard from '../components/Leaderboard';

const LeaderboardPage = ({ users }) => {
    return (
        <div>
            <h1>Leaderboard</h1>
            <Leaderboard users={users} />
        </div>
    );
}

export default LeaderboardPage;
