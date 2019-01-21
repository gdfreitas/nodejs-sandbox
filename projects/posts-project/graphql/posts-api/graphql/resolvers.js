const bcrypt = require('bcryptjs')
const validator = require('validator')

const User = require('../models/User')

module.exports = {
    createUser: async ({ userInput }, req) => {
        const { email, name, password } = userInput;

        const errors = [];
        if (!validator.isEmail(email)) {
            errors.push({ message: 'Email is invalid' });
        }

        if (validator.isEmail(password) || !validator.isLength(password, { min: 5 })) {
            errors.push({ message: 'Password is too short!' })
        }

        if (errors.length) {
            const error = new Error('Invalid input');
            error.data = errors;
            error.code = 422;
            throw error;
        }

        const existingUser = await User.findOne({ email: email })
        if (existingUser) {
            const error = new Error('User exists already!')
            throw error;
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User({
            email, name, password: hashedPassword
        })

        const createdUser = await user.save();

        return {
            ...createdUser._doc,
            _id: createdUser._id.toString()
        }
    }
}