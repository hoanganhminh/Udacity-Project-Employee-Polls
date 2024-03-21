import React from 'react';

const Nav = ({ user, onLogout }) => {
    return (
        <div>
            {user && user.name && (
                <p>Welcome, {user.name}!</p>
            )}
            <button onClick={onLogout}>Logout</button>
        </div>
    );
}

export default Nav;
