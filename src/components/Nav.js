import React from 'react';

const Nav = ({ user, onLogout }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                {user && user.name && (
                    <p className="navbar-text">Welcome, {user.name}!</p>
                )}
                <button onClick={onLogout} className="btn btn-outline-primary">Logout</button>
            </div>
        </nav>
    );
}

export default Nav;
