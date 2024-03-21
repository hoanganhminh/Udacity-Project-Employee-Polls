import React, { useState } from 'react';

const LoginForm = ({ users, onLogin }) => {
    const [selectedUser, setSelectedUser] = useState('');

    const handleLogin = () => {
        if (selectedUser !== '') {
            onLogin(selectedUser);
        }
    };

    return (
        <div>
            <h2 className="display-4">Login</h2>
            <select value={selectedUser} onChange={e => setSelectedUser(e.target.value)} className="form-select">
                <option value="">Select User</option>
                {Object.values(users).map(user => (
                    <option key={user.id} value={user.id}>{user.name}</option>
                ))}
            </select>
            <button onClick={handleLogin} className="btn btn-primary">Login</button>
        </div>
    );
}

export default LoginForm;
