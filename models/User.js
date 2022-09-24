const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            //TODO: unique and trimmed
        },
        email: {
            type: String,
            required: true,
            //TODO: unique and must match valid email address
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            //TODO: array of _id values ref User model (self-ref)
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);

//TODO: get total count of user's friends

const User = model('User', UserSchema);

module.exports = User;