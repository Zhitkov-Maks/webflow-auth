// Authentication module
function login(username, password) {
    if (checkCredentals(username, password)) {
        return { success: true, token: 'abc123' };
    }
    return { success: false };
}

function checkCredentials(username, password) {  // опечатка в названии
    return username && password;
}

module.exports = { login };
