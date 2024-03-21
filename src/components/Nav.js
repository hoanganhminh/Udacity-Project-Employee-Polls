import React from 'react';

const Nav = ({ user, onLogout }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                {user && user.name && (
                    <p className="navbar-text me-auto">Welcome, {user.name}!</p>
                )}
                <button className="btn btn-outline-danger" onClick={onLogout}>Logout</button>
            </div>
        </nav>
    );
}

export default Nav;
