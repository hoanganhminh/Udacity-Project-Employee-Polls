import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = ({ users, onLogin }) => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm users={users} onLogin={onLogin} />
        </div>
    );
}

export default LoginPage;
