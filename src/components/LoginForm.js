// components/LoginForm.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../actions/authedUser';

const LoginForm = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);
    const [selectedUser, setSelectedUser] = useState('');

    const handleLogin = () => {
        if (selectedUser !== '') {
            dispatch(loginUser(selectedUser));
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
