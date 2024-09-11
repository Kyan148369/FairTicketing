import crypto from 'crypto';

/**
 * Function to salt and hash a password
 * @param {string} password - The password to hash
 * @returns {Promise<string>} The hashed password
 */
export async function saltAndHashPassword(password) {
    const salt = crypto.randomBytes(16).toString('hex'); // Generate a random salt
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString('hex'); // Hash the password with the salt
    return `${salt}:${hash}`; // Return the salt and hash together
}
