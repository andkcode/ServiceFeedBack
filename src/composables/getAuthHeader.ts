export const getAuthHeader = (contentType = 'application/json') => {
    return {
        headers: {
            'Content-Type': contentType,
        },
        withCredentials: true,
    };
};
