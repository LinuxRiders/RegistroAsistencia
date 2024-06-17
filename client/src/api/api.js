const BASE_URL = import.meta.env.VITE_SERVER;

// --------------------- SECTION LOGIN -----------------------

export const accesUserRequest = async (data) =>
    await fetch(`${BASE_URL}/api/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });

export const refreshTokenRequest = async (refreshToken) => {
    return await fetch(`${BASE_URL}/api/login/refresh-token`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${refreshToken}`,
        },
    });
};

export const accessTokenRequest = async (accessToken) => {
    return await fetch(`${BASE_URL}/api/login/user`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
    });
};

export const signOutRequest = async (refreshToken) => {
    return await fetch(`${BASE_URL}/api/login/signout`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${refreshToken}`,
        },
    });
};

// --------------------- SECTION REGISTER -----------------------

export const createUserRequest = async (accessToken, data) => {
    return await fetch(`${BASE_URL}/api/register/user`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(data)
    });
};

// --------------------- SECTION ASISTENCIA -----------------------

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


