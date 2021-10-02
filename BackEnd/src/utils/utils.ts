import * as crypto from 'crypto'

/**
     * hash password with sha512.
     * @function
     * @param {string} password - List of required fields.
     * @param {string} salt - Data to be validated.
     */
export const sha512 = (password: string) =>{
    return password ? crypto.createHash('sha256').update(password).digest('hex') : ''
};