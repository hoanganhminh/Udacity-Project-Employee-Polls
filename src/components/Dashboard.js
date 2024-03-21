import React from 'react';

const Dashboard = ({ user }) => {
    return (
        <div>
            <h2>Welcome, {user.name}!</h2>
            <p>Number of polls created: {user.questions.length}</p>
            <p>Number of polls answered: {Object.keys(user.answers).length}</p>
        </div>
    );
}

export default Dashboard;
