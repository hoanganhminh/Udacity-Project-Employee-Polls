import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../actions/authedUser';

const Nav = () => {
    const dispatch = useDispatch();
    const authedUser = useSelector(state => state.authedUser);
    const users = useSelector(state => state.users);

    const handleLogout = () => {
        dispatch(logoutUser());
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                {authedUser && (
                    <>
                        <p className="navbar-text">Welcome, {users[authedUser].name}!</p>
                        <button onClick={handleLogout} className="btn btn-outline-primary">Logout</button>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Nav;
