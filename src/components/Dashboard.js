import React from 'react';

const Dashboard = ({ user }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">Welcome, {user.name}!</h2>
                <p className="card-text">Number of polls created: {user.questions.length}</p>
                <p className="card-text">Number of polls answered: {Object.keys(user.answers).length}</p>
            </div>
        </div>
    );
}

export default Dashboard;
