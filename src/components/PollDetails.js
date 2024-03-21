import React from 'react';

const PollDetails = ({ poll, userVote, onVote }) => {
    const totalVotes = poll.optionOne.votes.length + poll.optionTwo.votes.length;
    const optionOnePercentage = totalVotes === 0 ? 0 : Math.round((poll.optionOne.votes.length / totalVotes) * 100);
    const optionTwoPercentage = totalVotes === 0 ? 0 : Math.round((poll.optionTwo.votes.length / totalVotes) * 100);

    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">Would You Rather</h3>
                <p className="card-text">{poll.optionOne.text}</p>
                <p className="card-text">Votes: {poll.optionOne.votes.length} ({optionOnePercentage}%)</p>
                <p className="card-text">{poll.optionTwo.text}</p>
                <p className="card-text">Votes: {poll.optionTwo.votes.length} ({optionTwoPercentage}%)</p>
                {userVote && <p>Your Vote: {userVote === 'optionOne' ? poll.optionOne.text : poll.optionTwo.text}</p>}
                <button onClick={() => onVote('optionOne')} className="btn btn-primary">Vote Option One</button>
                <button onClick={() => onVote('optionTwo')} className="btn btn-primary">Vote Option Two</button>
            </div>
        </div>
    );
}

export default PollDetails;
