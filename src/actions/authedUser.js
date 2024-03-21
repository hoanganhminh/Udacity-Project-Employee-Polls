export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export function loginUser(id) {
    return {
        type: LOGIN_USER,
        id,
    };
}

export function logoutUser() {
    return {
        type: LOGOUT_USER,
    };
}