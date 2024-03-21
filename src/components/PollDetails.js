import React from 'react';

const PollDetails = ({ poll, userVote, onVote }) => {
    const totalVotes = poll.optionOne.votes.length + poll.optionTwo.votes.length;
    const optionOnePercentage = totalVotes === 0 ? 0 : Math.round((poll.optionOne.votes.length / totalVotes) * 100);
    const optionTwoPercentage = totalVotes === 0 ? 0 : Math.round((poll.optionTwo.votes.length / totalVotes) * 100);

    return (
        <div>
            <h3>Would You Rather</h3>
            <p>{poll.optionOne.text}</p>
            <p>Votes: {poll.optionOne.votes.length} ({optionOnePercentage}%)</p>
            <p>{poll.optionTwo.text}</p>
            <p>Votes: {poll.optionTwo.votes.length} ({optionTwoPercentage}%)</p>
            {userVote && <p>Your Vote: {userVote === 'optionOne' ? poll.optionOne.text : poll.optionTwo.text}</p>}
            <button onClick={() => onVote('optionOne')}>Vote Option One</button>
            <button onClick={() => onVote('optionTwo')}>Vote Option Two</button>
        </div>
    );
}

export default PollDetails;
