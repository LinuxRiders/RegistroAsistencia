const BASE_URL = import.meta.env.VITE_SERVER;

export const searchUserRequest = async (doc) => {
    return await fetch(`${BASE_URL}/api/search`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(doc)
    });
}

export const registerUserRequest = async (doc) => {
    return await fetch(`${BASE_URL}/api/register`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(doc)
    });
}

export const getUsersRequest = async (doc) => {
    return await fetch(`${BASE_URL}/api/users`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        }
    });
}
