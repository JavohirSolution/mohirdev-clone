import { jwtDecode } from 'jwt-decode';

export const getToken = (key, item) => {
    try {
        return localStorage.getItem(key);
    } catch (error) {
        console.log(error.message)
    }
}
export const setToken = (key, item) => {
    try {
        return localStorage.setItem(key, item);
    } catch (error) {
        console.log(error.message)
    }
}
export const removeToken = (key, item) => {
    try {
        return localStorage.removeItem(key, item);
    } catch (error) {
        console.log(error.message)
    }
}

export function validateToken(token) {
    try {
        const decoded = jwtDecode(token);
        // Check for the expiration time
        if (decoded.exp * 1000 < Date.now()) {
            return false;
        }
        // You can add more validation checks here if needed
        return true;
    } catch (error) {
        return false;
    }
}