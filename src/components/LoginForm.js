import React, { useState } from 'react';

const LoginForm = ({ users, onLogin }) => {
    const [selectedUser, setSelectedUser] = useState('');

    const handleLogin = () => {
        if (selectedUser !== '') {
            onLogin(selectedUser);
        }
    };

    return (
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">Login</h2>
                <select className="form-select mb-3" value={selectedUser} onChange={e => setSelectedUser(e.target.value)}>
                    <option value="">Select User</option>
                    {Object.values(users).map(user => (
                        <option key={user.id} value={user.id}>{user.name}</option>
                    ))}
                </select>
                <button className="btn btn-primary" onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
}

export default LoginForm;
