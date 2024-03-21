import React from 'react';

const Leaderboard = ({ users }) => {
    return (
        <div>
            <h2>Leaderboard</h2>
            <ul className="list-group">
                {users.map(user => (
                    <li key={user.id} className="list-group-item d-flex align-items-center">
                        <img src={user.avatarURL} alt={user.name} className="avatar me-3" />
                        <div>
                            <h3>{user.name}</h3>
                            <p>Questions Asked: {user.questions.length}</p>
                            <p>Questions Answered: {Object.keys(user.answers).length}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Leaderboard;
